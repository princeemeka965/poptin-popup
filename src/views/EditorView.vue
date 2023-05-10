<script>
import { ref } from 'vue'
import EditorMenu from '../components/EditorMenu.vue'
import TextFormatEditor from '../components/TextFormatEditor.vue'
export default {
  components: { TextFormatEditor, EditorMenu },
  setup() {
    const draggedElem = ref(null)

    const allowDrop = (event) => {
      event.preventDefault()
    }

    const drop = (event) => {
      event.preventDefault();
      event.target.appendChild(draggedElem.value.cloneNode(true));

      const domLength = document.querySelector('[data-dropzone]').querySelectorAll('[data-text]').length;

      if (draggedElem.value.disabled) {
        for (let i = 0; i < domLength; i++) {
          document.querySelector('[data-dropzone]').querySelectorAll('[data-text]')[i].removeAttribute('disabled')
          // Add basic css class for styling
          document.querySelector('[data-dropzone]').querySelectorAll('[data-text]')[i].classList.add('p-2');
          document.querySelector('[data-dropzone]').querySelectorAll('[data-text]')[i].classList.add('border');
        }
      }
      else {
        for (let i = 0; i < domLength; i++) {
          // Add basic css class for styling
          document.querySelector('[data-dropzone]').querySelectorAll('[data-text]')[i].classList.add('p-2');

          // check for headers and make them editable
          if (document.querySelector('[data-dropzone]').querySelectorAll('[data-text]')[i].hasAttribute('data-header')) {
            document.querySelector('[data-dropzone]').querySelectorAll('[data-text]')[i].setAttribute('contentEditable', true)
          }
        }
      }
    }

    return {
      allowDrop,
      drop,
      draggedElem
    }
  }
}
</script>

<template>
  <div class="w-full flex flex-col">
    <header class="w-full p-5 flex">
      <img src="@/assets/poptin.png" width="100" />
    </header>

    <section class="w-full h-full flex justify-center">
      <div
        class="lg:w-11/12 w-full flex sm:flex-col md:flex-col lg:flex-row bg-white my-5 lg:p-5 p-2"
      >
        <!--- Section for the canvas -->

        <div class="lg:w-2/3 flex w-full flex-col lg:mx-3">
          <text-format-editor />

          <div
            class="w-full flex flex-grow border border-dashed flex-col p-5 my-2"
            @drop="drop($event)"
            @dragover="allowDrop($event)"
            data-dropzone
          >
        </div>
        </div>

        <div class="lg:w-1/3 w-full flex flex-col p-2 poptin-editor">
          <editor-menu @selectedElem="draggedElem = $event" />
        </div>
      </div>
    </section>
  </div>
</template>

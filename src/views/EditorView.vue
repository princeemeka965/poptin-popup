<script>
import { ref } from 'vue'
import EditorMenu from '../components/EditorMenu.vue'
import TextFormatEditor from '../components/TextFormatEditor.vue'
import SelectModal from '../components/SelectModal.vue'

export default {
  components: { TextFormatEditor, EditorMenu, SelectModal },
  setup() {
    const draggedElem = ref(null)
    const nodeElem = ref(null);
    const hitSelect = ref(null);

    const allowDrop = (event) => {
      event.preventDefault()
    }

    const drop = (event) => {
      event.preventDefault();

      // Create a div that will house our dragged Item
      // Style the div element
      const divElem = document.createElement('div');
      divElem.classList.add('p-2');
      divElem.setAttribute('data-text', '');

      // Append the dragged element to the div
      divElem.appendChild(draggedElem.value.cloneNode(true));

      // Append the div to our dropzone
      event.target.appendChild(divElem)

      const domLength = event.target.querySelectorAll('[data-text]').length;

      const mediaLength = event.target.querySelectorAll('img').length;

      const currentIndex = domLength - 1;

      const currentMedia = mediaLength - 1;

      if (draggedElem.value.disabled) {
        event.target.querySelectorAll('[data-text]')[currentIndex].removeAttribute('disabled')
        event.target.querySelectorAll('[data-text]')[currentIndex].removeAttribute('draggable')
        event.target.querySelectorAll('[data-text]')[currentIndex].setAttribute('tabIndex', 0)

        // Add basic css class for styling
        event.target.querySelectorAll('[data-text]')[currentIndex].classList.add('p-2')
        event.target.querySelectorAll('[data-text]')[currentIndex].style.width = 'fit-content'

        event.target.querySelectorAll('[data-text]')[currentIndex].onclick = function () {
          nodeElem.value = event.target.querySelectorAll('[data-text]')[currentIndex];
        }
      }

      if (draggedElem.value.attributes.media) {
        event.target.querySelectorAll('img')[currentMedia].style.width = `${draggedElem.value.clientWidth}px`
      }

      if ((!draggedElem.value.disabled) && (!draggedElem.value.attributes.media)) {
        // Add basic css class for styling
        event.target.querySelectorAll('[data-text]')[currentIndex].removeAttribute('draggable')
        event.target.querySelectorAll('[data-text]')[currentIndex].setAttribute('tabIndex', 0)
        // check for headers and make them editable
        if (event.target.querySelectorAll('[data-text]')[currentIndex].hasAttribute('data-header')) {
          event.target.querySelectorAll('[data-text]')[currentIndex].setAttribute('contentEditable', true)
        }

        event.target.querySelectorAll('[data-text]')[currentIndex].onclick = function () {
          nodeElem.value = event.target.querySelectorAll('[data-text]')[currentIndex];
        }
      }

      event.target.querySelectorAll('[data-select]')[currentIndex].onclick = function () {
        nodeElem.value = event.target.querySelectorAll('[data-select]')[currentIndex];
        if (event.target.querySelectorAll('[data-select]')[currentIndex].options.length <= 1) {
          hitSelect.value = true;
        }
      }
    }

    return {
      allowDrop,
      drop,
      draggedElem,
      nodeElem,
      hitSelect
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
          <text-format-editor :active-node="nodeElem" />

          <div
            class="w-full flex flex-grow border border-dashed flex-col p-5 my-2"
            @drop="drop($event)"
            @dragover="allowDrop($event)"
            data-dropzone
          ></div>
        </div>

        <div class="lg:w-1/3 w-full flex flex-col p-2 poptin-editor">
          <editor-menu @selectedElem="draggedElem = $event" />
        </div>
      </div>
    </section>

    <select-modal :active-node="nodeElem" :open="hitSelect" v-if="hitSelect" @closeSelect="hitSelect = false" />
  </div>
</template>

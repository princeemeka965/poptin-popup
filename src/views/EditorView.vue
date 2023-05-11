<script>
import { reactive, ref } from 'vue'
import EditorMenu from '../components/EditorMenu.vue'
import TextFormatEditor from '../components/TextFormatEditor.vue'
import SelectModal from '../components/SelectModal.vue'
import ContextMenu from '../components/ContextMenu.vue'

export default {
  components: { TextFormatEditor, EditorMenu, SelectModal, ContextMenu },
  setup() {
    const draggedElem = ref(null)
    const nodeElem = ref(null)
    const hitSelect = ref(null)
    const contextMenu = ref(false)
    let targetElemPosition = reactive({ value: [] })

    const allowDrop = (event) => {
      event.preventDefault()
    }

    const drop = (event) => {
      event.preventDefault()

      // Create a div that will house our dragged Item
      // Style the div element
      const divElem = document.createElement('div')
      divElem.setAttribute('data-text', '')

      // Append the dragged element to the div
      divElem.appendChild(draggedElem.value.cloneNode(true))

      // Append the div to our dropzone
      event.target.appendChild(divElem)

      const domLength = event.target.querySelectorAll('[data-text]').length

      const mediaLength = event.target.querySelectorAll('img').length

      const currentIndex = domLength - 1

      const currentMedia = mediaLength - 1

      if (draggedElem.value.disabled) {
        event.target.querySelectorAll('[data-text]')[currentIndex].removeAttribute('disabled')
        event.target.querySelectorAll('[data-text]')[currentIndex].removeAttribute('draggable')
        event.target.querySelectorAll('[data-text]')[currentIndex].setAttribute('tabIndex', 0)

        // Add basic css class for styling
        event.target.querySelectorAll('[data-text]')[currentIndex].classList.add('p-2')
        event.target.querySelectorAll('[data-text]')[currentIndex].style.width = 'fit-content'

        event.target.querySelectorAll('[data-text]')[currentIndex].onclick = function () {
          nodeElem.value = event.target.querySelectorAll('[data-text]')[currentIndex]
          targetElemPosition.value = [
            {
              x: Math.ceil(nodeElem.value.getBoundingClientRect().left),
              y: Math.ceil(nodeElem.value.getBoundingClientRect().top)
            }
          ]
          contextMenu.value = true
        }
      }

      if (draggedElem.value.attributes.media) {
        event.target.querySelectorAll('img')[
          currentMedia
        ].style.width = `${draggedElem.value.clientWidth}px`
        event.target.querySelectorAll('img')[currentMedia].removeAttribute('draggable')
        event.target.querySelectorAll('[data-text]')[currentIndex].onclick = function () {
          nodeElem.value = event.target.querySelectorAll('img')[currentMedia]
          targetElemPosition.value = [
            {
              x: Math.ceil(nodeElem.value.getBoundingClientRect().left),
              y: Math.ceil(nodeElem.value.getBoundingClientRect().top)
            }
          ]
          contextMenu.value = true
        }
      }

      if (!draggedElem.value.disabled && !draggedElem.value.attributes.media) {
        // Add basic css class for styling
        event.target.querySelectorAll('[data-text]')[currentIndex].removeAttribute('draggable')
        event.target.querySelectorAll('[data-text]')[currentIndex].setAttribute('tabIndex', 0)
        // check for headers and make them editable
        if (
          event.target.querySelectorAll('[data-text]')[currentIndex].hasAttribute('data-header')
        ) {
          event.target
            .querySelectorAll('[data-text]')
            [currentIndex].setAttribute('contentEditable', true)
        }

        event.target.querySelectorAll('[data-text]')[currentIndex].onclick = function () {
          nodeElem.value = event.target.querySelectorAll('[data-text]')[currentIndex]
          targetElemPosition.value = [
            {
              x: Math.ceil(nodeElem.value.getBoundingClientRect().left),
              y: Math.ceil(nodeElem.value.getBoundingClientRect().top)
            }
          ]
          contextMenu.value = true
        }
      }

      // check for select Input field
      if (event.target.querySelectorAll('[data-text]')[currentIndex].hasAttribute('data-select')) {
        event.target.querySelectorAll('[data-select]')[currentIndex - 1].onclick = function () {
          nodeElem.value = event.target.querySelectorAll('[data-select]')[currentIndex - 1]
          if (event.target.querySelectorAll('[data-select]')[currentIndex - 1].options.length <= 1) {
            hitSelect.value = true
          }
          targetElemPosition.value = [
            {
              x: Math.ceil(nodeElem.value.getBoundingClientRect().left),
              y: Math.ceil(nodeElem.value.getBoundingClientRect().top)
            }
          ]
          contextMenu.value = true
        }
      }
    }

    const closeContext = () => {
      contextMenu.value = false
      targetElemPosition.value = []
    }

    return {
      allowDrop,
      drop,
      draggedElem,
      nodeElem,
      hitSelect,
      contextMenu,
      targetElemPosition,
      closeContext
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

    <select-modal
      :active-node="nodeElem"
      :open="hitSelect"
      v-if="hitSelect"
      @closeSelect="hitSelect = false"
    />

    <context-menu
      :active-node="nodeElem"
      :open="contextMenu"
      :position="targetElemPosition"
      @closeContext="closeContext"
    />
  </div>
</template>

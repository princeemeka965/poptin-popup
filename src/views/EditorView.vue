<script>
import { onMounted, reactive, ref } from 'vue'
import EditorMenu from '../components/EditorMenu.vue'
import TextFormatEditor from '../components/TextFormatEditor.vue'
import SelectModal from '../components/SelectModal.vue'
import ContextMenu from '../components/ContextMenu.vue'
import { processDropElem } from '../helpers'
import PopupTemplate from '../components/PopupTemplate.vue'

export default {
  components: { TextFormatEditor, EditorMenu, SelectModal, ContextMenu, PopupTemplate },
  setup() {
    const draggedElem = ref(null)
    const nodeElem = ref(null)
    const hitSelect = ref(null)
    const contextMenu = ref(false)
    const createPopUp = ref(false)
    let targetElemPosition = reactive({ value: [] })

    onMounted(() => {
      document.querySelector('[data-dropzone]').addEventListener('click', () => {
        const dropZoneLength = document
          .querySelector('[data-dropzone]')
          .querySelectorAll('[data-text]').length

        if (document.activeElement.hasAttribute('data-text')) {
          document.activeElement.classList.add('active')
          contextMenu.value = true
          nodeElem.value = document.activeElement
          targetElemPosition.value = [
            {
              x: Math.ceil(document.activeElement.getBoundingClientRect().left),
              y: Math.ceil(document.activeElement.getBoundingClientRect().top)
            }
          ]

          for (var i = 0; i < dropZoneLength; i++) {
            if (
              document.querySelector('[data-dropzone]').querySelectorAll('[data-text]')[i] !==
              document.activeElement
            ) {
              document
                .querySelector('[data-dropzone]')
                .querySelectorAll('[data-text]')
                [i].classList.remove('active')
            }
          }
        } else {
          document
            .querySelector('[data-dropzone]')
            .querySelector('.active')
            .classList.remove('active')
          closeContext()
          nodeElem.value = null
        }
      })

      /**
       * Trigger SetInterval to be saving the popup as LOCALSTORAGE
       */

      setInterval(() => {
        savePopup()
      }, 1000)
    })

    const allowDrop = (event) => {
      event.preventDefault()
    }

    const drop = (event) => {
      event.preventDefault()
      let clonedElem

      /**
       * We check if the dragged element is a child of the [data-dropzone] element using the value set in nodeElem ref
       * This value is set when an element inside the dropzone is clicked
       * If dragged element is a child of the [data-dropzone] div, we don't clone and append the dragged Element
       */

      // Here the dragged element is not a child of the [data-dropzone] div
      if (!nodeElem.value) {
        // we clone the dragged element
        clonedElem = draggedElem.value.cloneNode(true)
        // Append the cloned dragged element to the div
        document.querySelector('[data-dropzone]').appendChild(clonedElem)
      } else {
        // Here, the dragged element is a child of the [data-dropzone] div
        // We set our clonedElem variable to be equal to the nodeElem ref value which is the dragged Element
        clonedElem = nodeElem.value
      }

      // Here we process the dragged Element dropped using the processDropElem helper
      processDropElem(clonedElem)

      // check for select Input field
      if (clonedElem.hasAttribute('data-select')) {
        clonedElem.onclick = function () {
          if (clonedElem.options.length <= 1) {
            hitSelect.value = true
          }
        }
      }
    }

    const closeContext = () => {
      contextMenu.value = false
      targetElemPosition.value = []
    }

    const savePopup = () => {
      // get the innerhtml elements of popupTemplate div
      // this passes the innerhtml elements as string
      const popupContent = document.getElementById('popupTemplate').innerHTML
      // Set it as localStorage
      localStorage.setItem('popupDom', popupContent)
    }

    const previewPopUp = () => {
      // here we use the DOMParser().parseFromString to parse and convert HTML Strings to DOM nodes
      const parser = new DOMParser()
      const htmlString = localStorage.getItem('popupDom')
      const doc = parser.parseFromString(htmlString, 'text/html')
      // Parsed nodes
      const nodes = doc.body

      createPopUp.value = true

      document.getElementById('dialog').appendChild(nodes)
    }

    const closeDialog = () => {
      createPopUp.value = false
    }

    return {
      allowDrop,
      drop,
      draggedElem,
      nodeElem,
      hitSelect,
      contextMenu,
      targetElemPosition,
      closeContext,
      savePopup,
      previewPopUp,
      createPopUp,
      closeDialog
    }
  }
}
</script>

<template>
  <div class="w-full flex flex-col">
    <header class="w-full p-5 flex">
      <div class="w-full flex flex-grow">
        <img src="@/assets/poptin.png" width="100" />
      </div>
      <div class="flex">
        <button
          style="
            width: 8rem;
            text-align: center;
            padding: 9px 12px;
            background-color: #f1f1f1;
            border-radius: 20px;
            color: #000;
          "
          @click="previewPopUp"
        >
          Preview
        </button>
        <button
          style="width: 8rem; text-align: center; padding: 9px 12px; border-radius: 20px"
          class="bg-yellow-900 text-white mx-5"
          @click="savePopup"
        >
          Save
        </button>
      </div>
    </header>

    <section class="w-full h-full -mt-3 flex justify-center">
      <div
        class="lg:w-11/12 w-full flex sm:flex-col md:flex-col lg:flex-row bg-white my-5 lg:p-5 p-2"
      >
        <!--- Section for the canvas -->

        <div class="lg:w-2/3 flex w-full flex-col lg:mx-3" style="height: 80vh">
          <text-format-editor :active-node="nodeElem" />
          <div
            class="w-full sm:relative flex flex-grow border border-dashed justify-center p-5 my-2"
            id="popupTemplate"
          >
            <div
              style="width: 28rem; height: 28rem; border-radius: 50%; background-color: #e55252"
              class="rounded-full border p-2"
              data-container
            >
              <div
                class="w-full h-full border-4 rounded-full"
                style="border-color: #ffffff"
                data-dropzone=""
                @drop="drop($event)"
                @dragover="allowDrop($event)"
              >
                <popup-template />
              </div>
            </div>
          </div>
        </div>

        <div class="lg:w-1/3 w-full flex flex-col p-2 poptin-editor">
          <editor-menu @selectedElem="draggedElem = $event" :active-node="nodeElem" />
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

  <!-- Modal to view Popup after creating-->
  <div :class="createPopUp ? 'dialog' : 'hidden'" id="dialog">
    <button @click="closeDialog()" aria-label="close" class="x">❌</button>
  </div>
</template>

<style>
.layer {
  position: absolute;
  padding: 0;
  margin: 0;
  border: none;
  background-size: contain;
  background-repeat: no-repeat;
}
.text {
  word-spacing: -4px;
  letter-spacing: 1px;
  color: #ffffff;
}

.dialog body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.dialog {
  border-radius: 20px;
  border: 0;
  animation: fadeIn 1s ease both;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
}
.dialog::backdrop {
  animation: fadeIn 1s ease both;
  background: #000;
  z-index: 2;
  backdrop-filter: blur(20px);
}
.dialog [data-container] {
  top: -100vw;
  animation: slider 1s ease both;
}
.dialog .x {
  filter: grayscale(1);
  border: none;
  background: none;
  position: absolute;
  z-index: 9;
  top: 15px;
  right: 10px;
  transition: ease filter, transform 0.3s;
  cursor: pointer;
  transform-origin: center;
}
.dialog .x:hover {
  filter: grayscale(0);
  transform: scale(1.1);
}
.dialog h2 {
  font-weight: 600;
  font-size: 2rem;
  padding-bottom: 1rem;
}
.dialog p {
  font-size: 1rem;
  line-height: 1.3rem;
  padding: 0.5rem 0;
}
.dialog p a:visited {
  color: #000;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    top: 0;
  }
  to {
    opacity: 1;
    top: 1;
  }
}
@keyframes slider {
  from {
    top: -100vw;
  }
  to {
    top: 5vw;
  }
}
</style>

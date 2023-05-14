<script>
import { onMounted, reactive, ref } from 'vue'
import EditorMenu from '../components/EditorMenu.vue'
import TextFormatEditor from '../components/TextFormatEditor.vue'
import SelectModal from '../components/SelectModal.vue'
import ContextMenu from '../components/ContextMenu.vue'
import { AnFilledStar } from '@kalimahapps/vue-icons'
import { processDropElem } from '../helpers'

export default {
  components: { TextFormatEditor, EditorMenu, SelectModal, ContextMenu, AnFilledStar },
  setup() {
    const draggedElem = ref(null)
    const nodeElem = ref(null)
    const hitSelect = ref(null)
    const contextMenu = ref(false)
    let targetElemPosition = reactive({ value: [] })

    onMounted(() => {
      document.querySelector('[data-dropzone]').addEventListener('click', function () {
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
        }
      })
    })

    const allowDrop = (event) => {
      event.preventDefault()
    }

    const drop = (event) => {
      event.preventDefault()

      const clonedElem = draggedElem.value.cloneNode(true)

      // Append the cloned dragged element to the div
      document.querySelector('[data-dropzone]').appendChild(clonedElem)

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
      const popupContent = document.getElementById('popupTemplate').innerHTML;
      // Set it as localStorage
      localStorage.setItem("popupDom", popupContent);
    }

    const previewPopUp = () => {
      // here we use the DOMParser().parseFromString to parse and convert HTML Strings to DOM nodes
      const parser = new DOMParser();
      const htmlString = localStorage.getItem('popupDom');
      const doc = parser.parseFromString(htmlString, 'text/html');
      // Parsed nodes
      const nodes = doc.body;

      console.log(nodes)
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
      previewPopUp
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
        style="
          width: 8rem;
          text-align: center;
          padding: 9px 12px;
          border-radius: 20px;
        "
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
            class="w-full fixed flex flex-grow border border-dashed justify-center p-5 my-2"
            style="height: 74vh; width: 58.3%; top: 19%"
            id="popupTemplate"
          >
            <div
              style="width: 530px; height: 530px; border-radius: 50%; background-color: #e55252"
              class="rounded-full border p-2"
            >
              <div
                class="w-full h-full border-4 rounded-full"
                style="border-color: #ffffff"
                data-dropzone=""
                @drop="drop($event)"
                @dragover="allowDrop($event)"
              >
                <!---- Review Stars Block -->
                <div
                  tabindex="0"
                  data-text
                  style="
                    top: 1.4em;
                    left: 6.1em;
                    font-size: 29px;
                    color: rgb(198, 35, 35);
                    width: max-content;
                    position: absolute;
                  "
                >
                  <AnFilledStar class="icons" />
                </div>
                <div
                  tabindex="0"
                  data-text
                  style="
                    left: 6.8em;
                    font-size: 35px;
                    color: rgb(198, 35, 35);
                    width: max-content;
                    position: absolute;
                    top: 0.3em;
                  "
                >
                  <AnFilledStar class="icons" />
                </div>
                <div
                  tabindex="0"
                  data-text
                  style="
                    top: 1.4em;
                    left: 10.4em;
                    font-size: 29px;
                    color: rgb(198, 35, 35);
                    width: max-content;
                  "
                >
                  <AnFilledStar class="icons" />
                </div>

                <!--- Text Block -->
                <h3
                  class="font-bold text-black w-full p-2"
                  data-text=""
                  data-header=""
                  tabindex="0"
                  contenteditable=""
                  style="
                    top: 5rem;
                    left: 4.5rem;
                    right: 0rem;
                    width: 23rem;
                    height: auto;
                    font-size: 27px;
                    position: absolute;
                  "
                >
                  <div style="text-align: center">
                    <span style="font-size: inherit; font-weight: inherit; line-height: 1.1em"
                      ><font color="#ffffff" style="font-weight: bold"
                        >All the texts and elements in this popup should be editable and
                        dragable</font
                      ></span
                    >
                  </div>
                </h3>

                <!--- Input Field Block-->
                <input
                  class="font-bold text-black w-full p-2 active"
                  data-text=""
                  tabindex="0"
                  placeholder="E-mail"
                  value=""
                  style="
                    top: 12.2rem;
                    left: 5.3rem;
                    width: 21rem;
                    height: 3rem;
                    border-radius: 11px;
                    border-width: 2px;
                    border-style: solid;
                    position: absolute;
                  "
                />

                <!--- Button Field Block-->
                <button
                  class="font-bold text-black w-full p-2"
                  data-text=""
                  tabindex="0"
                  draggable=""
                  style="
                    top: 16.2rem;
                    left: 5.3rem;
                    width: 21rem;
                    background-color: rgb(15, 15, 15);
                    height: 3.5rem;
                    border-radius: 13px;
                    color: rgb(255, 255, 255);
                    font-size: 1.5em;
                    font-weight: bold;
                    position: absolute;
                  "
                >
                  SIGNUP NOW
                </button>

                <!--- Text Block -->
                <h1
                  class="font-bold text-black w-full p-2"
                  data-text=""
                  data-header=""
                  tabindex="0"
                  contenteditable="true"
                  style="top: 21.2rem; left: 4.8rem; right: 0rem; width: 21rem; position: absolute"
                >
                  <div style="text-align: center">
                    <span style="font-size: inherit; font-weight: inherit; line-height: 1.1em"
                      ><font color="#ffffff">No credit card required. No surprises</font></span
                    >
                  </div>
                </h1>
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
</style>

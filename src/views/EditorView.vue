<script>
import { onMounted, reactive, ref } from 'vue'
import EditorMenu from '../components/EditorMenu.vue'
import TextFormatEditor from '../components/TextFormatEditor.vue'
import SelectModal from '../components/SelectModal.vue'
import ContextMenu from '../components/ContextMenu.vue'
import { AnFilledStar } from '@kalimahapps/vue-icons'

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

      // Create a div that will house our dragged Item
      // Style the div element
      const divElem = document.createElement('div')
      divElem.setAttribute('data-aria', '')
      divElem.style.width = '10em'

      // Append the dragged element to the div
      divElem.appendChild(draggedElem.value.cloneNode(true))

      // Append the div to our dropzone
      event.target.appendChild(divElem)

      const mediaLength = event.target.querySelectorAll('[media]').length

      const domLength = document
        .querySelector('[data-dropzone]')
        .querySelectorAll('[data-text]').length

      const currentIndex = domLength - 1

      const currentMedia = mediaLength - 1

      if (draggedElem.value.disabled) {
        event.target.querySelectorAll('[data-text]')[currentIndex].removeAttribute('disabled')
        event.target.querySelectorAll('[data-text]')[currentIndex].removeAttribute('draggable')
        event.target.querySelectorAll('[data-text]')[currentIndex].setAttribute('tabIndex', 0)
        event.target.querySelectorAll('[data-text]')[currentIndex].style.top = '11em'
        event.target.querySelectorAll('[data-text]')[currentIndex].style.left = '13em'

        // Add basic css class for styling
        event.target.querySelectorAll('[data-text]')[currentIndex].classList.add('p-2')
      }

      if (draggedElem.value.attributes.media) {
        event.target.querySelectorAll('[media]')[currentMedia].removeAttribute('draggable')
        event.target.querySelectorAll('[media]')[currentMedia].classList.remove('pb-44')
        event.target.querySelectorAll('[media]')[currentMedia].style.width = '20em'
        event.target.querySelectorAll('[media]')[currentMedia].style.height = '20em'
        event.target.querySelectorAll('[media]')[currentMedia].style.backgroundSize = 'cover'
        event.target.querySelectorAll('[media]')[currentMedia].style.top = '11em'
        event.target.querySelectorAll('[media]')[currentIndex].style.left = '13em'
      }

      if (!draggedElem.value.disabled && !draggedElem.value.attributes.media) {
        // Add basic css class for styling
        event.target.querySelectorAll('[data-text]')[currentIndex].removeAttribute('draggable')
        event.target.querySelectorAll('[data-text]')[currentIndex].setAttribute('tabIndex', 0)
        event.target.querySelectorAll('[data-text]')[currentIndex].style.top = '11em'
        event.target.querySelectorAll('[data-text]')[currentIndex].style.left = '13em'
        // check for headers and make them editable
        if (
          event.target.querySelectorAll('[data-text]')[currentIndex].hasAttribute('data-header')
        ) {
          event.target
            .querySelectorAll('[data-text]')
            [currentIndex].setAttribute('contentEditable', true)
        }
      }

      // check for select Input field
      if (event.target.querySelectorAll('[data-text]')[currentIndex].hasAttribute('data-select')) {
        event.target.querySelectorAll('[data-select]')[currentIndex].onclick = function () {
          if (event.target.querySelectorAll('[data-select]')[currentIndex].options.length <= 1) {
            hitSelect.value = true
          }
        }
      }
    }

    const closeContext = () => {
      contextMenu.value = false
      targetElemPosition.value = []
    }

    const setNodeElem = () => {
      nodeElem.value = document.activeElement
      targetElemPosition.value = [
        {
          x: Math.ceil(document.activeElement.getBoundingClientRect().left),
          y: Math.ceil(document.activeElement.getBoundingClientRect().top)
        }
      ]
      contextMenu.value = true
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
      setNodeElem
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

        <div class="lg:w-2/3 flex w-full flex-col lg:mx-3" style="height: 80vh">
          <text-format-editor :active-node="nodeElem" />

          <div
            class="w-full fixed flex flex-grow border border-dashed justify-center p-5 my-2"
            style="height: 74vh; width: 58.3%; top: 19%"
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

                <div data-aria="">
                  <div
                    tabindex="0"
                    data-text
                    style="
                      top: 1.4em;
                      left: 6.3em;
                      font-size: 29px;
                      color: rgb(198 35 35);
                      width: max-content;
                    "
                    @click="setNodeElem($event)"
                  >
                    <AnFilledStar class="icons" />
                  </div>
                </div>
                <div data-aria="">
                  <div
                    tabindex="0"
                    data-text
                    style="
                      top: -0.3em;
                      left: 6.7em;
                      font-size: 35px;
                      color: rgb(198 35 35);
                      width: max-content;
                    "
                    @click="setNodeElem($event)"
                  >
                    <AnFilledStar class="icons" />
                  </div>
                </div>
                <div data-aria="">
                  <div
                    tabindex="0"
                    data-text
                    style="
                      top: -0.8em;
                      left: 10em;
                      font-size: 29px;
                      color: rgb(198 35 35);
                      width: max-content;
                    "
                    @click="setNodeElem($event)"
                  >
                    <AnFilledStar class="icons" />
                  </div>
                </div>

                <!--- Text Block -->
                <div data-aria="" style="font-size: 27px">
                  <h1
                    class="font-bold text-black w-full p-2"
                    data-text=""
                    data-header=""
                    tabindex="0"
                    contenteditable="true"
                    style="top: -0.4rem; left: 3.4rem; right: 0rem; width: 23rem"
                  >
                    <div style="text-align: center">
                      <span style="font-size: inherit; font-weight: inherit; line-height: 1.1em"
                        ><font color="#ffffff" style="font-weight: bold"
                          >All the texts and elements in this popup should be editable and
                          dragable</font
                        ></span
                      >
                    </div>
                  </h1>
                </div>

                <!--- Input Field Block-->
                <div data-aria="">
                  <input
                    class="font-bold text-black w-full p-2 active"
                    data-text=""
                    tabindex="0"
                    placeholder="E-mail"
                    value=""
                    style="
                      top: 1rem;
                      left: 5rem;
                      width: 21rem;
                      height: 3rem;
                      border-radius: 11px;
                      border-width: 2px;
                      border-style: solid;
                      background-color: rgb(255, 255, 255);
                    "
                  />
                </div>

                <!--- Button Field Block-->
                <div data-aria="">
                  <button
                    class="font-bold text-black w-full p-2"
                    data-text=""
                    tabindex="0"
                    style="
                      top: 3rem;
                      left: 5rem;
                      width: 21rem;
                      background-color: rgb(15, 15, 15);
                      height: 3.5rem;
                      border-radius: 34px;
                      color: #ffffff;
                      font-size: 1.5em;
                      font-weight: bold;
                    "
                  >
                    SIGNUP NOW
                  </button>
                </div>

                <!--- Text Block -->
                <div data-aria="">
                  <h1
                    class="font-bold text-black w-full p-2"
                    data-text=""
                    data-header=""
                    tabindex="0"
                    contenteditable="true"
                    style="top: 5rem; left: 5rem; right: 0rem; width: 21rem"
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

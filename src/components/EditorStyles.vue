<script setup>
import { kRange } from 'konsta/vue'
import dropdown from 'vue-dropdowns'
import { reactive, ref } from 'vue'
const props = defineProps({
  activeNode: String
})

const domTarget = reactive(props.activeNode ? props.activeNode.parentNode : '')
const fontWeight = ref(0)
const fontSize = ref(0)
const borderWidth = ref(0)
const width = ref(0)
const height = ref(0)
const bgColor = ref('#000000')
const iconColor = ref('#000000')
const borderColor = ref('#000000')
const borderRadius = ref(0)
const positionLeft = ref(0)
const positionRight = ref(0)
const positionTop = ref(0)
const positionBottom = ref(0)
const rotation = ref(0)

const arrayOfFonts = ref([
  {
    name: 'Arial'
  },
  {
    name: 'Helvetica'
  },
  {
    name: 'Verdana'
  },
  {
    name: 'Calibri'
  },
  {
    name: 'Lucida Sans'
  },
  {
    name: 'Segoe UI'
  },
  {
    name: 'Roboto'
  },
  {
    name: 'Trebuchet MS'
  },
  {
    name: 'Lucida Console'
  }
])
const fontFamily = ref({
  name: 'Arial'
})

const arrayOfStyles = ref([
  {
    name: 'solid'
  },
  {
    name: 'dotted'
  },
  {
    name: 'dashed'
  },
  {
    name: 'double'
  },
  {
    name: 'groove'
  },
  {
    name: 'ridge'
  },
  {
    name: 'inset'
  },
  {
    name: 'outset'
  },
  {
    name: 'none'
  }
])
const borderStyles = ref({
  name: 'solid'
})
function executeColor(data) {
  domTarget.value = props.activeNode
  domTarget.value.style.backgroundColor = data.target.value
  bgColor.value = data.target.value
}
function executeIconColor(data) {
  domTarget.value = props.activeNode
  domTarget.value.style.color = data.target.value
  iconColor.value = data.target.value
}
function executeBorderColor(data) {
  domTarget.value = props.activeNode
  domTarget.value.style.borderColor = data.target.value
  borderColor.value = data.target.value
}
function updateFontSize(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.fontSize = `${parseInt(event.target.value, 10)}px`
  fontSize.value = parseInt(event.target.value, 10)
}
function updateFontWeight(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.fontWeight = parseInt(event.target.value, 10)
  fontWeight.value = parseInt(event.target.value, 10)
}
function updateFontFamily(data) {
  domTarget.value = props.activeNode
  fontFamily.value = data
  domTarget.value.style.fontFamily = data.name
}
function updateBorderWidth(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.borderWidth = `${parseInt(event.target.value, 10)}px`
  borderWidth.value = parseInt(event.target.value, 10)
}
function updateBorderRadius(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.borderRadius = `${parseInt(event.target.value, 10)}px`
  borderRadius.value = parseInt(event.target.value, 10)
}
function updateBorderStyle(data) {
  domTarget.value = props.activeNode
  domTarget.value.style.borderStyle = data.name
  borderStyles.value = data
}
function updateWidth(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.width = `${parseInt(event.target.value, 10)}rem`
  width.value = parseInt(event.target.value, 10)
}
function updateHeight(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.height = `${parseInt(event.target.value, 10)}rem`
  height.value = parseInt(event.target.value, 10)
}
function updatePositionLeft(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.left = `${parseInt(event.target.value, 10)}rem`
  positionLeft.value = parseInt(event.target.value, 10)
}
function updatePositionRight(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.right = `${parseInt(event.target.value, 10)}rem`
  positionRight.value = parseInt(event.target.value, 10)
}
function updatePositionTop(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.top = `${parseInt(event.target.value, 10)}rem`
  positionTop.value = parseInt(event.target.value, 10)
}
function updatePositionBottom(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.bottom = `${parseInt(event.target.value, 10)}rem`
  positionBottom.value = parseInt(event.target.value, 10)
}
function updateRotation(event) {
  domTarget.value = props.activeNode
  domTarget.value.style.transform = `rotate(${parseInt(event.target.value, 10)}deg)`;
}
</script>
<template>
  <div class="my-2 p-3">
    <div class="w-full flex flex-col my-2 p-1 border border-dashed">
      <div class="p-1 w-full text-center font-bold text-base text-black">Sizing</div>

      <!--- Width Div-->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2">Width</span>
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="width"
                :step="0.1"
                :min="0"
                :max="100"
                @input="(e) => updateWidth(e)"
              />
            </div>
          </div>

          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span class="text-sm flex text-black">{{ width }} em</span>
            </div>
          </div>
        </div>
      </div>

      <!--- Height Div-->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2">Height</span>
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="height"
                :step="0.1"
                :min="0"
                :max="100"
                @input="(e) => updateHeight(e)"
              />
            </div>
          </div>

          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span class="text-sm flex text-black">{{ height }} em</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---- Typography Block -->
    <div class="w-full flex flex-col my-2 p-1 border border-dashed">
      <div class="p-1 w-full text-center font-bold text-base text-black">Typography</div>

      <!--- Font Size Div-->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2">Font Size</span>
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="fontSize"
                :step="0.1"
                :min="0"
                :max="1000"
                @input="(e) => updateFontSize(e)"
              />
            </div>
          </div>

          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span class="text-sm flex text-black">{{ fontSize }} em</span>
            </div>
          </div>
        </div>
      </div>

      <!--- Font Weight-->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Font Weight</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="fontWeight"
                :step="1"
                :min="0"
                :max="900"
                @input="(e) => updateFontWeight(e)"
              />
            </div>
          </div>

          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span class="text-sm flex text-black">{{ fontWeight }}</span>
            </div>
          </div>
        </div>
      </div>

      <!--- Letter Spacing-->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Letter Spacing</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="letterSpacing"
                :step="0.01"
                :min="0"
                :max="2"
                @input="(e) => updateLetterSpacing(e)"
              />
            </div>
          </div>

          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span class="text-sm flex text-black">{{ letterSpacing }} em</span>
            </div>
          </div>
        </div>
      </div>

      <!--- Line Height -->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Line Height</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="lineHeight"
                :step="0.1"
                :min="0"
                :max="2"
                @input="(e) => updateLineHeight(e)"
              />
            </div>
          </div>

          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span class="text-sm flex text-black">{{ lineHeight }}em</span>
            </div>
          </div>
        </div>
      </div>

      <!--- Font Family -->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Font Family</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <dropdown
                class="my-dropdown-toggle"
                :options="arrayOfFonts"
                :selected="fontFamily"
                v-on:updateOption="updateFontFamily($event)"
                :placeholder="'Select an Item'"
                :closeOnOutsideClick="boolean"
              >
              </dropdown>
            </div>
          </div>

          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span
                class="h-8 font-bold py-2 px-3 -mt-1 text-black text-sm"
                :style="`font-family: ${fontFamily.name} !important`"
              >
                Poptin</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--- Borders -->
    <div class="w-full flex flex-col my-2 p-1 border border-dashed">
      <div class="p-1 w-full text-center font-bold text-base text-black">Borders</div>

      <!--- Border Width-->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Border Width</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="borderWidth"
                :step="0.1"
                :min="0"
                :max="100"
                @input="(e) => updateBorderWidth(e)"
              />
            </div>
          </div>

          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span class="text-sm flex text-black">{{ borderWidth }} px</span>
            </div>
          </div>
        </div>
      </div>

      <!--- Border Radius Div-->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Border Radius</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="borderRadius"
                :step="0.1"
                :min="0"
                :max="100"
                @input="(e) => updateBorderRadius(e)"
              />
            </div>
          </div>

          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span class="text-sm flex text-black">{{ borderRadius }} px</span>
            </div>
          </div>
        </div>
      </div>

      <!--- Border Color Div-->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Border Color</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col justify-center">
              <span
                class="p-4 rounded-full border mx-1 cursor-pointer"
                :style="`border-color: ${borderColor}; background-color: ${borderColor}`"
              ></span>
              <input
                type="color"
                class="-mt-5 ml-2"
                id="color"
                style="opacity: 0; width: 26px; height: 23px"
                @change="executeBorderColor($event)"
              />
            </div>
            <div class="flex">
              <div class="flex flex-col justify-center">
                <span
                  class="p-3 font-semibold mx-1 -mt-1 uppercase"
                  :style="`color : ${borderColor}`"
                  >{{ borderColor }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--- Border Style Div-->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Border Style</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <dropdown
                class="my-dropdown-toggle"
                :options="arrayOfStyles"
                :selected="borderStyles"
                v-on:updateOption="updateBorderStyle($event)"
                :placeholder="'Select an Item'"
                :closeOnOutsideClick="boolean"
              >
              </dropdown>
            </div>
          </div>
          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span
                class="p-3 rounded-sm mx-1 -mt-1"
                :style="`border-style: ${borderStyles.name}; border-color: #f1f1f1; border-width: 2px`"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---- Colors -->
    <div class="w-full flex flex-col my-2 p-1 border border-dashed">
      <div class="p-1 w-full text-center font-bold text-base text-black">Colors</div>

      <!--- Background Color -->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Backgrund Color</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col justify-center">
              <span
                class="p-4 rounded-full border mx-1 cursor-pointer"
                :style="`background-color: ${bgColor}`"
              ></span>
              <input
                type="color"
                class="-mt-5 ml-2"
                id="color"
                style="opacity: 0; width: 26px; height: 23px"
                @change="executeColor($event)"
              />
            </div>

            <div class="flex">
              <div class="flex flex-col justify-center">
                <span
                  class="p-3 font-semibold mx-1 -mt-1 uppercase"
                  :style="`color : ${bgColor}`"
                  >{{ bgColor }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--- Icon Color -->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Icon Color</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col justify-center">
              <span
                class="p-4 rounded-full border mx-1 cursor-pointer"
                :style="`background-color: ${iconColor}`"
              ></span>
              <input
                type="color"
                class="-mt-5 ml-2"
                id="color"
                style="opacity: 0; width: 26px; height: 23px"
                @change="executeIconColor($event)"
              />
            </div>
            <div class="flex">
              <div class="flex flex-col justify-center">
                <span
                  class="p-3 mx-1 -mt-1 font-semibold uppercase"
                  :style="`color : ${iconColor}`"
                  >{{ iconColor }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---- Layout -->
    <div class="w-full flex flex-col my-2 p-1 border border-dashed">
      <div class="p-1 w-full text-center font-bold text-base text-black">Layout</div>

      <!--- Left Positioning -->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Position Left</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex w-full">
            <div class="flex flex-grow">
              <div class="flex flex-col w-full justify-center">
                <k-range
                  class="text-yellow-900"
                  :value="positionLeft"
                  :step="0.1"
                  :min="-100"
                  :max="100"
                  @input="(e) => updatePositionLeft(e)"
                />
              </div>
            </div>

            <div class="flex ml-3">
              <div class="flex flex-col justify-center">
                <span class="text-sm flex text-black">{{ positionLeft }} em</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--- Position Right -->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Position Right</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="positionRight"
                :step="0.1"
                :min="-100"
                :max="100"
                @input="(e) => updatePositionRight(e)"
              />
            </div>
            </div>
            <div class="flex ml-3">
              <div class="flex flex-col justify-center">
                <span class="text-sm flex text-black">{{ positionRight }} em</span>
              </div>
          </div>
        </div>
      </div>

      <!--- Position Top -->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Position Top</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="positionTop"
                :step="0.1"
                :min="-100"
                :max="100"
                @input="(e) => updatePositionTop(e)"
              />
            </div>
            </div>
            <div class="flex ml-3">
              <div class="flex flex-col justify-center">
                <span class="text-sm flex text-black">{{ positionTop }} em</span>
              </div>
          </div>
        </div>
      </div>

      <!--- Position Bottom -->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2"
              >Position Bottom</span
            >
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="positionBottom"
                :step="0.1"
                :min="-100"
                :max="100"
                @input="(e) => updatePositionBottom(e)"
              />
            </div>
            </div>
            <div class="flex ml-3">
              <div class="flex flex-col justify-center">
                <span class="text-sm flex text-black">{{ positionBottom }} em</span>
              </div>
          </div>
        </div>
      </div>
    </div>


    <div class="w-full flex flex-col my-2 p-1 border border-dashed">
      <div class="p-1 w-full text-center font-bold text-base text-black">Transform</div>

      <!--- Rotate Div-->
      <div class="w-full flex flex-col p-1">
        <div class="flex w-full">
          <div class="flex">
            <span class="font-semibold text-sm flex flex-grow text-black ml-2 my-2">Rotate</span>
          </div>
        </div>

        <div class="flex w-full">
          <div class="flex flex-grow">
            <div class="flex flex-col w-full justify-center">
              <k-range
                class="text-yellow-900"
                :value="rotation"
                :step="1"
                :min="0"
                :max="360"
                @input="(e) => updateRotation(e)"
              />
            </div>
          </div>

          <div class="flex ml-3">
            <div class="flex flex-col justify-center">
              <span class="text-sm flex text-black">{{ rotation }} deg</span>
            </div>
          </div>
        </div>
      </div>
      </div>

  </div>

</template>

<style>
.dropdown-toggle:hover {
  background: transparent !important;
}
.dropdown-toggle {
  min-width: 100% !important;
  border: 1px solid rgb(223, 212, 212);
  background: none !important;
  border-radius: 0.375rem;
  padding: 0.5rem !important;
  font-weight: 400;
}
.btn-group {
  margin: 0px !important;
  min-width: 100% !important;
}
.dropdown-menu {
  top: 85% !important;
  min-width: 100% !important;
}
.dropdown-menu > li > a:hover {
  color: #333333 !important;
}
</style>

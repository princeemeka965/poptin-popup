<script setup>
import { AnFilledStar } from '@kalimahapps/vue-icons'
import { BxSolidSearchAlt2 } from '@kalimahapps/vue-icons'
import { HiSolidInformationCircle } from '@kalimahapps/vue-icons'
import { IoSharpInformationCircle } from '@kalimahapps/vue-icons'
import { AkBookOpen } from '@kalimahapps/vue-icons'
import { BxSolidBell } from '@kalimahapps/vue-icons'
import { BsCheckCircleFill } from '@kalimahapps/vue-icons'
import { HiSolidMapPin } from '@kalimahapps/vue-icons'

const emit = defineEmits(['initiateDrag'])

function initiateDrag(ev) {
  emit('initiateDrag', ev.target)
}
</script>

<template>
  <div style="overflow: auto;">
    <!--- Display list of Html Elements that can be dragged to the popup-->
    <div class="my-2 p-2 border border-dashed">
      <div class="w-full">
        <h1 class="font-bold text-black w-full p-2" @dragstart="initiateDrag($event)" data-text dragged data-header draggable="true">Header</h1>
      </div>
    </div>

    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <input
          class="font-bold text-black w-full p-2"
          data-text
          disabled
          dragged
          draggable="true"
          value="Textfield"
        />
      </div>
    </div>

    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <button class="font-bold text-black w-full p-2" data-text dragged draggable="true">Button</button>
      </div>
    </div>

    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <select
          class="font-bold text-black w-full p-2"
          data-text
          data-select
          disabled
          dragged
          draggable="true"
        >
          <option selected>Select</option>
        </select>
      </div>
    </div>

    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <input
          class="font-bold text-black w-full p-2"
          data-text
          disabled
          dragged
          draggable="true"
          value=""
          placeholder="Number"
          type="number"
        />
      </div>
    </div>

    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <input
          class="font-bold text-black w-full p-2"
          data-text
          disabled
          dragged
          draggable="true"
          placeholder="Date Field"
          type="text"
          onfocus="(this.type = 'date')"
        />
      </div>
    </div>

    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <textarea
          class="font-bold text-black p-2"
          cols="34"
          data-text
          disabled
          dragged
          draggable="true"
          placeholder="Text Area"
          rows="1"
        />
      </div>
    </div>

    <div class="my-4 p-4 border">
      <h1 class="font-black font-semibold text-lg text-black">Icons</h1>
      <h1 class="font-semibold textbase my-2 text-black">Drag an icon to the dropzone area</h1>

      <div class="flex flex-wrap w-full my-4">
        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div draggable="true" data-text dragged style="color: #000; width: max-content">
              <AnFilledStar class="icons" />
            </div>
          </div>
        </div>
        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" dragged data-text>
              <BxSolidSearchAlt2 class="icons" />
            </div>
          </div>
        </div>
        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" dragged data-text>
              <HiSolidInformationCircle class="icons" />
            </div>
          </div>
        </div>
        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" dragged data-text>
              <IoSharpInformationCircle class="icons" />
            </div>
          </div>
        </div>

        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" dragged data-text>
              <AkBookOpen class="icons" />
            </div>
          </div>
        </div>

        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" dragged data-text>
              <BxSolidBell class="icons" />
            </div>
          </div>
        </div>

        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" dragged data-text>
              <BsCheckCircleFill class="icons" />
            </div>
          </div>
        </div>

        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" dragged data-text>
              <HiSolidMapPin class="icons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

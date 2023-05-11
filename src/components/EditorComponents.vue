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
  <div>
    <!--- Display list of Html Elements that can be dragged to the popup-->
    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <h1 class="font-bold text-black w-full" data-text data-header draggable="true">Header</h1>
      </div>
    </div>

    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <input
          class="font-bold text-black w-full"
          data-text
          disabled
          draggable="true"
          value="Textfield"
        />
      </div>
    </div>

    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <button class="font-bold text-black w-full" data-text draggable="true">Button</button>
      </div>
    </div>

    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <select
          class="font-bold text-black w-full"
          style="width: 100%"
          data-text
          data-select
          disabled
          draggable="true"
        >
          <option selected>Select</option>
        </select>
      </div>
    </div>

    <div class="my-2 p-2 border border-dashed">
      <div class="w-full" @dragstart="initiateDrag($event)">
        <input
          class="font-bold text-black w-full"
          data-text
          disabled
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
          class="font-bold text-black w-full"
          data-text
          disabled
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
          class="font-bold text-black w-full"
          data-text
          disabled
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
            <div class="min-w-max" draggable="true" data-text>
              <AnFilledStar class="icons" />
            </div>
          </div>
        </div>
        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" data-text>
              <BxSolidSearchAlt2 class="icons" />
            </div>
          </div>
        </div>
        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" data-text>
              <HiSolidInformationCircle class="icons" />
            </div>
          </div>
        </div>
        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" data-text>
              <IoSharpInformationCircle class="icons" />
            </div>
          </div>
        </div>

        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" data-text>
              <AkBookOpen class="icons" />
            </div>
          </div>
        </div>

        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" data-text>
              <BxSolidBell class="icons" />
            </div>
          </div>
        </div>

        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" data-text>
              <BsCheckCircleFill class="icons" />
            </div>
          </div>
        </div>

        <div class="p-1 mx-2 flex poptin-editor">
          <div class="w-full" @dragstart="initiateDrag($event)">
            <div class="min-w-max" draggable="true" data-text>
              <HiSolidMapPin class="icons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

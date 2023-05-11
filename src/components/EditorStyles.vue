<script setup>
import { kRange } from 'konsta/vue'
import dropdown from 'vue-dropdowns'
import { ref } from 'vue'

const fontWeight = ref(0)
const fontSize = ref(0)
const arrayOfColors = ref([
  {
  name: '#F0F8FF'
  },
  {
  name: '#FAEBD7'
  },
  {
    name: "#00FFFF"
  },
  {
    name: '#7FFFD4'
  },
  {
    name: '#F0FFFF'
  },
  {
    name: '#F5F5DC'
  },
  {
    name: '#FFE4C4'
  },
  {
    name: '#000000'
  },
  {
    name: '#FFEBCD'
  },
  {
    name: '#7FFF00'
  },
  {
    name: '#D2691E'
  }
])
const colors = ref({
  name: '#F0F8FF'
});

function updateBgColor(data) {
  colors.value = data;
}

const arrayOfFonts = ref([
  {
  name: 'Arial'
  },
  {
  name: 'Helvetica'
  },
  {
    name: "Verdana"
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
});
function updateFont(data) {
  fontFamily.value = data;
}

</script>

<template>
  <div class="my-2 p-3 border border-dashed">
    <div class="w-full flex my-2 p-1">
      <div class="flex w-1/3">
        <div class="flex flex-col justify-center">
          <span class="font-semibold text-base flex flex-grow text-black">Font Size</span>
        </div>
      </div>

      <div class="flex flex-grow">
        <div class="flex flex-col w-full justify-center">
          <k-range
            class="text-yellow-900"
            :value="fontSize"
            :step="1"
            :min="1"
            :max="1000"
            @input="(e) => (fontSize = parseInt(e.target.value, 10))"
          />
        </div>
      </div>

      <div class="flex flex-grow ml-3">
        <div class="flex flex-col justify-center">
          <span class="text-base flex text-black">{{ fontSize }}px</span>
        </div>
      </div>
    </div>

    <div class="w-full flex mt-5 mb-2 p-1">
      <div class="flex w-1/3">
        <div class="flex flex-col justify-center">
          <span class="font-semibold text-base flex flex-grow text-black">Font Weight</span>
        </div>
      </div>

      <div class="flex flex-grow">
        <div class="flex flex-col w-full justify-center">
          <k-range
            class="text-yellow-900"
            :value="fontWeight"
            :step="1"
            :min="1"
            :max="900"
            @input="(e) => (fontWeight = parseInt(e.target.value, 10))"
          />
        </div>
      </div>

      <div class="flex flex-grow ml-3">
        <div class="flex flex-col justify-center">
          <span class="text-base flex text-black">{{ fontWeight }}</span>
        </div>
      </div>
    </div>

    <div class="w-full flex mt-5 mb-2 p-1">
      <div class="flex w-1/3">
        <div class="flex flex-col justify-center">
          <span class="font-semibold text-base flex flex-grow text-black">Font Family</span>
        </div>
      </div>
      <div class="flex w-1/3">
        <dropdown
          class="my-dropdown-toggle"
          :options="arrayOfFonts"
          :selected="fontFamily"
          v-on:updateOption="updateFont($event)"
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean"
        >
        </dropdown>
      </div>
      <div class="flex flex-grow ml-3">
        <div class="flex flex-col justify-center">
          <span class="h-8 font-bold py-2 px-3 -mt-1 text-black text-sm" :style="`font-family: ${fontFamily.name} !important`">
            Poptin</span>
        </div>
        </div>
    </div>

    <div class="w-full flex mt-5 mb-2 p-1">
      <div class="flex w-1/3">
        <div class="flex flex-col justify-center">
          <span class="font-semibold text-base flex flex-grow text-black">Background</span>
        </div>
      </div>

      <div class="flex w-1/3">
        <dropdown
          class="my-dropdown-toggle"
          :options="arrayOfColors"
          :selected="colors"
          v-on:updateOption="updateBgColor($event)"
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean"
        >
        </dropdown>
      </div>
      <div class="flex flex-grow ml-3">
        <div class="flex flex-col justify-center">
          <span class="p-3 border -mt-1" :style="`background-color: ${colors.name}`"></span>
        </div>
        </div>
    </div>

    <div class="w-full flex mt-5 mb-2 p-1">
      <div class="flex w-1/3">
        <div class="flex flex-col justify-center">
          <span class="font-semibold text-base flex flex-grow text-black">Width</span>
        </div>
      </div>

      <div class="flex w-1/3">
        <div class="flex flex-col w-full justify-center">
          <input class="p-1 text-black border rounded-md" />
        </div>
      </div>

      <div class="flex ml-3">
        <div class="flex flex-col justify-center">
          <span class="text-base flex text-black">px</span>
        </div>
      </div>
    </div>

    <div class="w-full flex mt-5 mb-2 p-1">
      <div class="flex w-1/3">
        <div class="flex flex-col justify-center">
          <span class="font-semibold text-base flex flex-grow text-black">Height</span>
        </div>
      </div>

      <div class="flex w-1/3">
        <div class="flex flex-col w-full justify-center">
          <input class="p-1 text-black border rounded-md" />
        </div>
      </div>

      <div class="flex flex-grow ml-3">
        <div class="flex flex-col justify-center">
          <span class="text-base flex text-black">px</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.dropdown-toggle:hover{
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

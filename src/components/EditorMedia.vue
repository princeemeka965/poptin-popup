<script setup>
import { ref } from 'vue'
import ButtonComponent from './ButtonComponent.vue'

const objMedia = ref(null)

function initiateFileUpload() {
  let input = document.createElement('input')
  input.type = 'file'
  input.setAttribute('accept', 'image/*')
  input.onchange = () => {
    let files = Array.from(input.files)

    files.forEach((file) => {
      var urlBlob = URL.createObjectURL(file)
      objMedia.value = { url: urlBlob, type: file.type }
    })
  }
  input.click()
}

const emit = defineEmits(['initiateDrag'])

function initiateDrag(ev) {
  emit('initiateDrag', ev.target)
}
</script>

<template>
  <div class="w-full p-4 flex flex-col">
    <div class="my-3">
      <button-component :class-name="'w-1/2'" @submit="initiateFileUpload($event)">
        <template v-slot:button> Select an Image </template>
      </button-component>
    </div>
    <div class="w-full max-h-96 p-2 flex justify-center border border-dashed" id="previewImg">
      <div
        class="pb-44"
        v-if="objMedia"
        :style="`background: url(${objMedia.url}); background-size: contain; width: 100%; background-repeat: no-repeat`"
        data-text
        media
        @dragstart="initiateDrag($event)"
        draggable="true"
      >
    </div>
    </div>
  </div>
</template>

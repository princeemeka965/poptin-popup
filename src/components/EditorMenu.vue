<script setup>
import { ref } from 'vue';
import EditorComponents from './EditorComponents.vue';
import editorStyles from './EditorStyles.vue';
import EditorMedia from './EditorMedia.vue';

const active = ref('component');
const emit = defineEmits(['selectedElem'])

const props = defineProps({
  activeNode: Object,
});

function currentTab(tab) {
    active.value = tab;
}

function setDraggedElem(elem) {
  emit('selectedElem', elem);
}
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full p-1 flex">
      <div
        class="w-1/3 text-black flex justify-center cursor-pointer"
        :class="active === 'component' ? 'border-b-2 border-pink-900' : ''"
        @click="currentTab('component')"
      >
        <span class="text-base" :class="active === 'component' ? 'font-semibold' : ''"
          >Component</span
        >
      </div>

      <div
        class="w-1/3 text-black flex justify-center cursor-pointer"
        :class="active === 'styles' ? 'border-b-2 border-pink-900' : ''"
        @click="currentTab('styles')"
      >
        <span class="text-base" :class="active === 'styles' ? 'font-semibold' : ''"
          >Styles</span
        >
      </div>

      <div
        class="w-1/3 text-black flex justify-center cursor-pointer"
        :class="active === 'media' ? 'border-b-2 border-pink-900' : ''"
        @click="currentTab('media')"
      >
        <span class="text-base" :class="active === 'media' ? 'font-semibold' : ''"
          >Media</span
        >
      </div>
    </div>

    <div class="w-full flex flex-col" style="overflow: auto; height: 74vh">
        <editor-components v-if="active === 'component'" @initiateDrag="setDraggedElem($event)" />
        <editor-styles v-if="active === 'styles'" :active-node="props.activeNode" />
        <editor-media v-if="active === 'media'" @initiateDrag="setDraggedElem($event)" />
    </div>

  </div>
</template>

<style>
    .layer{
        position: absolute;
        padding: 0;
        margin: 0;
        border: none;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .text{
        word-spacing: -4px;
        letter-spacing: 1px;
        white-space: pre;
    }

</style>

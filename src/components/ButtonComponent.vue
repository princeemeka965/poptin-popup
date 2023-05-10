<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  className: String
})
const { className } = toRefs(props);
</script>

<template>
    <div class="w-full flex justify-center"
    >
        <button :class="className" class="align-middle select-none font-bold text-center 
    uppercase transition-all text-xs py-3 px-6 rounded-lg bg-yellow-900 text-white">
            <slot name="button" />
        </button>
    </div>
</template>
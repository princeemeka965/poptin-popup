<script setup>
const emit = defineEmits([''])

const props = defineProps({
  activeNode: Object,
  open: Boolean,
  position: Object
});

const componentDelete = () => {
  document.querySelector('[data-dropzone]').removeChild(props.activeNode.parentNode)
  emit('closeContext', true)
}

</script>

<template>
  <div
    id="context-menu"
    class="text-base"
    v-if="props.open"
    :style="`margin-top: ${props.position.value[0].y}px; margin-left: ${props.position.value[0].x + 790}px`"
  >
    <div class="item text-sm" @click="componentDelete">
      <img width="15" src="https://img.icons8.com/material-outlined/24/null/add-trash.png" />
    </div>
  </div>
</template>

<style scoped>
#context-menu {
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(37, 40, 42, 0.22);
  color: #1f194c;
  min-width: 1em;
  padding: 0.1em 0em;
  position: fixed;
  border-radius: 0.25rem;
}
.item {
  padding: 0.3em 0.3em;
}
.item:hover {
  cursor: pointer;
}
.close-context {
  position: absolute;
  top: -8px;
  left: 92%;
  z-index: 9;
  width: 19px;
  padding: 0.25rem;
  height: 19px;
  background: #fff;
  border-radius: 50%;
}
</style>

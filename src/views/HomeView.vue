<script>
import { ref } from 'vue'

export default {
  setup() {
    const showP = ref(false)
    return {
      showP
    }
  },

  mounted() {
    setTimeout(() => {
      this.showP = !this.showP
    }, 2000)
  }
}
</script>

<template>
  <div class="w-full flex flex-col">
    <header class="w-full p-5 flex">
      <img src="@/assets/poptin.png" width="100" />
    </header>

    <section class="w-full h-full flex justify-center">
      <div class="w-4/5 flex flex-col">
      </div>
      <transition>
        <p v-if="showP">Hello there</p>
      </transition>
    </section>
  </div>
</template>

<style>
.v-enter-from {
  opacity: 0
}
.v-enter-to {
  opacity: 1
}
.v-enter-active {
  transition: opacity 2s ease
}
</style>

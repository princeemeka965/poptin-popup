<script>
import { ref } from 'vue'
import ButtonComponent from '../components/ButtonComponent.vue'

export default {
  components: { ButtonComponent },
  setup() {
    const showP = ref(false)
    const listOne = ref(false)
    const listTwo = ref(false)
    const listThree = ref(false)
    const templateContainer = ref(false)
    const modalState = ref(false)

    const displayModalState = () => {
        modalState.value = true
    }

    const hideModalState = () => {
      modalState.value = false
    }

    return {
      showP,
      listOne,
      listTwo,
      listThree,
      modalState,
      templateContainer,
      displayModalState,
      hideModalState
    }
  },

  mounted() {
    setTimeout(() => {
      this.showP = !this.showP
    }, 2000)

    setTimeout(() => {
      this.listOne = !this.listOne
    }, 4000)

    setTimeout(() => {
      this.listTwo = !this.listTwo
    }, 6000)

    setTimeout(() => {
      this.listThree = !this.listThree
    }, 8000)

    setTimeout(() => {
      this.templateContainer = !this.templateContainer
    }, 10000)
  }
}
</script>

<template>
  <div class="w-full flex flex-col">
    <header class="w-full p-5 flex">
      <img src="@/assets/poptin.png" width="100" />
    </header>

    <section class="w-full h-full flex justify-center">
      <div class="w-4/5 flex flex-col my-5">
        <div class="w-full flex justify-center mb-5">
          <transition>
            <h1 v-if="showP" class="font-black text-4xl">Create exciting popup for your website</h1>
          </transition>
        </div>
        <div class="w-1/2" style="margin: 0 22%">
          <div class="w-full flex my-2">
            <transition>
              <h5 v-if="listOne" class="font-bold text-base">Select from our existing template</h5>
            </transition>
          </div>
          <div class="w-full flex my-2">
            <transition>
              <h5 v-if="listTwo" class="font-bold text-base">
                Customize your template with our rich editor
              </h5>
            </transition>
          </div>
          <div class="w-full flex my-2">
            <transition>
              <h5 v-if="listThree" class="font-bold text-base">Create and export your popup</h5>
            </transition>
          </div>
        </div>

        <transition>
          <div class="w-full flex flex-col mt-16" v-if="templateContainer">
            <div class="w-full flex justify-center">
              <h1 class="font-black text-3xl">Select Template</h1>
            </div>
            <div class="w-full flex justify-center mt-8">
              <!-- POPUP Template Box-->
              <div
                class="w-1/3 flex flex-col bgfadeWhite cursor-pointer rounded-md"
                @mouseenter="displayModalState"
                @mouseleave="hideModalState"
              >
                <img src="@/assets/fe-task.png" class="p-5" />
                <div class="w-full flex justify-center bg-white p-5">
                  <h1 class="font-black text-xl text-black">Round Modal Popup</h1>
                </div>
                <!--- Modal Overlay -->
                  <div class="modal w-full h-full flex flex-col justify-center" v-if="modalState">
                    <div class="w-full h-full flex flex-col justify-center my-10">
                      <div class="w-full flex justify-center">
                        <h3 class="font-black text-2xl my-5">Round Modal Popup</h3>
                      </div>
                      <button-component
                        :class-name="'w-1/2'"
                        @click="$router.push({ name: 'template' })"
                      >
                        <template v-slot:button> Select </template>
                      </button-component>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<style>
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: opacity 2s ease;
}
</style>

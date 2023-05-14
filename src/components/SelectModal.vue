<script setup>
import { reactive } from "vue";
const emit = defineEmits(['selectedElem'])

const props = defineProps({
    activeNode: Object,
    open: Boolean,
});

let optionsText = reactive([]);
const optionsArray = reactive([]);

const createOptions = (event) => {
   optionsText.push(event.data);
   if (event.data === " ") {
      const formattedOptionText = optionsText.join('');
      optionsArray.push({ id: formattedOptionText, name: formattedOptionText });
      optionsText = [];
   }
}

const closeModal = () => {
  emit('closeSelect', false);
}

const insertOptions = () => {
   const selectNode = props.activeNode;
   for (var i = 0; i < optionsArray.length; i++) {
      var option = document.createElement("option");
      option.value = optionsArray[i].name;
      option.text = optionsArray[i].name;
      selectNode.add(option);
   }
   closeModal();
}

</script>

<template>
<div class="modal fade" :class="props.open ? 'in' : ''" id="myModal--effect-pulse" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-body">
               <div class="w-full flex flex-col justify-center p-5">
                  <div class="w-full flex justify-center p-2 my-2">
                  <h4 class="modal-title font-black text-lg" id="myModalLabel">Add Select Options</h4>
                  </div>
                  <div class="w-full flex justify-center p-2 my-1">
                     <h1 class="font-bold text-sm">
                        Type in options for the select input, hit space key to create options
                     </h1>
                  </div>
                  <div class="w-full flex justify-center p-2 my-2">
                     <input class="p-3 w-full border rounded-md" placeholder="Enter Options" @input="createOptions($event)" />
                     </div>
                  <div class="w-full flex justify-center flex-wrap p-2">
                     <div class="w-auto flex p-2 bg-gray-200 rounded-md mx-2 my-3" v-for="(options, index) in optionsArray" :key="index">
                        {{ options.name }}
                        </div>
                     </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn p-2 rounded-md bg-gray-100 mx-2" @click="closeModal"><span class="font-semibold">Close</span></button>
               <button type="button" class="btn p-2 rounded-md bg-yellow-900 mx-3 text-white font-semibold" @click="insertOptions">Insert Options</button>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.modal {
   color: #000000 !important;
   z-index: 1050;
   background-color: #181818cc;
   opacity: 1 !important;
}
.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
}

.modal-header .close {
    margin-top: -2px;
}
button.close {
    -webkit-appearance: none;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
}
.close {
    float: right;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 1;
}
.modal-body {
    position: relative;
    padding: 15px;
}
.modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
}
.modal-content {
   background-color: #fff;
   -webkit-background-clip: padding-box;
   background-clip: padding-box;
   border: 1px solid #999;
   border: 1px solid rgba(0, 0, 0, .2);
   border-radius: 0;
   outline: 0;
   width: 40%;
   margin: auto;
   margin-top: 100px;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
#myModal--effect-pulse.modal.fade .modal-dialog {
   transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
   opacity: 0;
   -webkit-transition: all 0.3s;
   -moz-transition: all 0.3s;
   transition: all 0.3s;
}

#myModal--effect-pulse.modal.fade.in .modal-dialog {
   transform: perspective(400px) scale3d(.95, .95, .95);
   animation-timing-function: ease-in;
   opacity: 1;
}
</style>
<script setup>
import { RouterView } from 'vue-router'
import { kApp, kPage, kBlock } from 'konsta/vue';
</script>

<template>
  <k-app theme="material">
    <k-page>
      <k-block>
        <RouterView />
      </k-block>
    </k-page>
  </k-app>
</template>
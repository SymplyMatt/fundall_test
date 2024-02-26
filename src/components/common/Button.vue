<template>
    <Container :classes="[classes, !active && 'opacity-50']" class="cursor-pointer" @click="onClickFunction">
      {{ text }}
    </Container>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import Container from '../common/Container.vue'
  
  const props = defineProps({
    text: { type: String, required: true },
    classes: { type: String, required: true },
    onClickFunction: { type: Function, required: true },
    active: { type: Boolean, required: false, default: true },
  });
  
  </script>
  
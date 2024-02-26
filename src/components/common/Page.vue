<template>
    <Container :classes="classes">
        <slot />
    </Container>
</template>

<script setup>
    import Container from '../common/Container.vue'
    import { defineProps } from 'vue';

    const props = defineProps({
        classes: { type: String, required: true, default: '' },
    });
</script>
  

  
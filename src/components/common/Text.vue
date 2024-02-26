<template>
    <Container :classes="classes">
        <slot />
        {{ text }}
    </Container>
</template>

<script setup>
    import { defineProps } from 'vue';
    import Container from '../common/Container.vue'

    const props = defineProps({
        text: { type: String, required: true },
        classes: { type: String, required: false, default: '' },
    });
</script>
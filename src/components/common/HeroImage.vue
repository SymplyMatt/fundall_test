<template>
    <Container :classes="container">
        <img :src="imageUrl" :alt="alt" class="w-full">
    </Container>
</template>


<script setup>
    import { ref } from 'vue'
    import Container from '../common/Container.vue'
    import { defineProps } from 'vue';
    import { computed } from 'vue'

    const props = defineProps({
        imageSrc: { type: String, required: true },
        alt: { type: String, default: '' },
        container: { type: String, default: 'w-[60%] lg:w-[70%] xl:w-[80%] xxl:w-[90%]' },
    });
    const imageUrl = computed(
    () => new URL(`/src/assets/${props.imageSrc}.svg`, import.meta.url).href
    )
</script>
  

<template>
    <Container :classes="`page flex flex-col items-center gap-[40px] phone-big:gap-30 justify-center relative`">
        <slot />
    </Container>
</template>

<script setup>
    import Container from '../common/Container.vue'
</script>
  

  
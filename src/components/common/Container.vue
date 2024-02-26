<template>
    <div :class="classes">
        <slot />
    </div>
</template>
  
<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        classes: {
            type: String,
            required: true,
            default: '',
        },
    });
</script>

  
<template>
    <input type="text" class="w-full border border-solid border-[#CAD0C9] h-[32px] lg:h-[38px] p-10  text-14" :placeholder="placeholder">
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        placeholder: { type: String, required: true },
    });
</script>
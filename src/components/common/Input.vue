<template>
    <input :type="type" class="w-full border border-solid border-[#CAD0C9] h-[32px] lg:h-[38px] p-10  text-14" :class="extraclass" :placeholder="placeholder" v-model="inputValue">
</template>

<script setup>
    import { defineProps, defineEmits, watch, ref } from 'vue';

    const props = defineProps({
        placeholder: { type: String, required: true },
        extraclass: { type: String, default: '' },
        type: { type: String, default: 'text' },
        modelValue: { type: String }
    });

    const emit = defineEmits(['updateModel']);

    let inputValue = ref ('');

    watch(() => inputValue.value, (newValue) => {
        emit('updateModel', { key: props.modelValue, value: newValue });
    });
</script>

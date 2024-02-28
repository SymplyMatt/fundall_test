<template>
    <input :type="type" class="w-full border border-solid border-[#CAD0C9] h-[32px] lg:h-[38px] p-10  text-14" :class="extraclass" :placeholder="placeholder" v-model="inputValue">
</template>

<script setup>
    import { defineProps, defineEmits, watch, ref } from 'vue';

    const props = defineProps({
        placeholder: { type: String, required: true },
        extraclass: { type: String, default: '' },
        type: { type: String, default: 'text' },
        modelValue: { type: String } // For v-model binding
    });

    const emit = defineEmits(['updateModel']); // For v-model binding

    // Reactive variable to store input value
    let inputValue = ref (props.modelValue);

    // Watch for changes in inputValue and emit update event
    watch(() => inputValue.value, (newValue) => {
        console.log('......');
        emit('updateModel', newValue);
    });
</script>

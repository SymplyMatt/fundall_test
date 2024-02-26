<template>
    <Container :classes="`flex flex-col justify-center items-center gap-20`">
        <HeroImage :imageSrc="`welcome_man`" :alt="`welcome_fundall`"/>
        <Container :classes="`text-[25px] ex-sm-phone:text-[30px] flex flex-col justify-center items-center gap-5 text-center`">
            <Text :text="`Fundall Expense Tracker`" :classes="`font-bold`"/>
            <Text :text="`Mini Project Frontend`"/>
        </Container>
        <Text :text="`by Babatunde Fashola`" :classes="`text-[18px] text-center`" />
    </Container>
</template>

<script setup>
    import Container from '../common/Container.vue'
    import Text from '../common/Text.vue'
    import HeroImage from '../common/HeroImage.vue';
</script>
<template>
    <Container :classes="`flex flex-col justify-center items-center gap-20 w-full sm-tab:w-[80%]`">
        <HeroImage :imageSrc="`welcome_login`" :alt="`welcome_fundall`" :container="`w-[70%] lg:w-[80%] xl:w-[80%] xxl:w-[80%] flex items-center justify-center`"/>
        <Container :classes="`text-[22px] ex-sm-phone:text-[25px] flex flex-col justify-center font-bold`">
            <Text :text="`Welcome back!`" :classes="`font-bold text-center bigtab:text-left text-[#4DE897]`">
            </Text>
            <Text :text="`We miss you`" :classes="`font-bold text-[22px] ex-sm-phone:text-[25px] text-center bigtab:text-left`"/>
        </Container>
    </Container>
</template>

<script setup>
    import Container from '../common/Container.vue'
    import Text from '../common/Text.vue'
    import HeroImage from '../common/HeroImage.vue'
</script>
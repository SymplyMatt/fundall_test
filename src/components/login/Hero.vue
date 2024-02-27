<template>
    <Container :classes="`flex flex-col justify-center items-center gap-20 w-[80%]`">
        <HeroImage :imageSrc="`welcome_man`" :alt="`welcome_fundall`" :container="`w-[50%] lg:w-[60%] xl:w-[70%] xxl:w-[80%] flex items-center justify-center`"/>
        <Container :classes="`text-[22px] ex-sm-phone:text-[25px] flex flex-col justify-center  gap-10`">
            <Text :text="`Let's get to know you.`" :classes="`font-bold`">
                <span class="text-[#4DE897] font-bold">
                    Welcome! 
                </span>
            </Text>
            <Text :text="`Your first step toward a better financial lifestyle starts here.`" :classes="`font-semibold text-[18px]`"/>
        </Container>
    </Container>
</template>

<script setup>
    import Container from '../common/Container.vue'
    import Text from '../common/Text.vue'
    import HeroImage from '../common/HeroImage.vue'
</script>
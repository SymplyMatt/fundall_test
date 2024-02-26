<template>
    <Page :classes="`page grid grid-cols-2 gap-4 items-center gap-[40px] phone-big:gap-30 justify-center relative`">
        <Container :classes="`col-span-1 w-45 relative flex flex-col items-center justify-center h-full`">
            <Container :classes="`absolute top-0 left-0`">
                <Logo />
            </Container>
            <Container :classes="`flex items-center justify-center`">
                <Hero />
            </Container>
        </Container>
        <Container :classes="`col-span-1 w-55`">

        </Container>
    </Page>
</template>

<script setup>
    import Page from '../components/common/Page.vue'
    import Container from '@/components/common/Container.vue';
    import Logo from '@/components/common/Logo.vue';
    import Hero from '@/components/login/Hero.vue';
    import HeroImageVue from '@/components/common/HeroImage.vue';
</script>
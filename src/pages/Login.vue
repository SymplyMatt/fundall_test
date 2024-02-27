<template>
    <Page :classes="`page box-shadow_ grid grid-cols-1 grid-rows-[90%,10%] items-center  justify-center h-full overflow-hidden`">
        <Container :classes="`grid grid-cols-2 items-center justify-center px-20`">
            <Container :classes="`col-span-1 w-45 relative flex flex-col items-center justify-center h-full`">
                <Container :classes="`absolute top-10 left-0`">
                    <Logo />
                </Container>
                <Container :classes="`flex items-center justify-center h-full`">
                    <Hero />
                </Container>
            </Container>
            <Form />
        </Container>
        <Container :classes="`grid grid-cols-2 items-center justify-center`">
            <Container :classes="``">
            </Container>
            <Text :text="`Terms & Conditions and Privacy Policy`" :classes="`font-semibold text-[12px] lg:text-[14px] text-[#4CE895] flex justify-center items-center nunito`">
                <span :class="`text-black font-normal`">By clicking on Login, you agree to our &nbsp;</span>
            </Text>
        </Container>
    </Page>
</template>

<script setup>
    import Page from '../components/common/Page.vue'
    import Container from '@/components/common/Container.vue';
    import Logo from '@/components/common/Logo.vue';
    import Hero from '@/components/login/Hero.vue';
    import Form from '@/components/login/Form.vue';
    import Text from '@/components/common/Text.vue';
</script>
<style>
    .nunito{
        font-family: "Nunito Sans", sans-serif;
    }
</style>
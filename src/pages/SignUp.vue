<template>
    <Page :classes="`page box-shadow_ grid grid-cols-1 grid-rows-[90%,10%] items-center justify-center h-full overflow-hidden p-20 sm-tab:p-40 bigtab:p-0 gap-20 phone-big:gap-50 bigtab:gap-0`">
        <Container :classes="`grid grid-cols-1 bigtab:grid-cols-2 items-center justify-center phone:px-20  bigtab:gap-0`">
            <Container :classes="`col-span-1 w-45 relative flex flex-col items-center justify-center h-full py-60 bigtab:py-0`">
                <Container :classes="`absolute top-10 left-0`">
                    <Logo />
                </Container>
                <Container :classes="`flex items-center justify-center h-full`">
                    <SignUpHero />
                </Container>
            </Container>
            <SignUpForm />
        </Container>
        <Container :classes="`grid grid-cols-1 bigtab:grid-cols-2 items-center justify-center`">
            <Container :classes="`hidden bigtab:block`">
            </Container>
            <Container :classes="`text-center  text-[12px] lg:text-[16px] text-[#4CE895]`">
                <span :class="`text-black font-normal`">By clicking on Login, you agree to our &nbsp;</span>
                <span :class="`font-semibold`">Terms & Conditions and Privacy Policy</span>
            </Container>
        </Container>
    </Page>
</template>

<script setup>
    import Page from '../components/common/Page.vue'
    import Container from '@/components/common/Container.vue';
    import Logo from '@/components/common/Logo.vue';
    import SignUpHero from '@/components/auth/SignUpHero.vue';
    import SignUpForm from '@/components/auth/SignUpForm.vue';
</script>
<style>
    .nunito{
        font-family: "Nunito Sans", sans-serif;
    }
</style>
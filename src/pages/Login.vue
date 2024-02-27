<template>
    <Page :classes="`page box-shadow_ grid grid-cols-1 grid-rows-[90%,10%] items-center justify-center h-full overflow-hidden p-30 sm-tab:p-40 bigtab:p-0 gap-20 phone-big:gap-50 bigtab:gap-0`">
        <Container :classes="`grid grid-cols-1 bigtab:grid-cols-2 items-center justify-center phone:px-20  bigtab:gap-0`">
            <Container :classes="`col-span-1 w-45 relative flex flex-col items-center justify-center h-full py-60 bigtab:py-0`">
                <Container :classes="`absolute top-10 left-0`">
                    <Logo />
                </Container>
                <Container :classes="`flex items-center justify-center h-full`">
                    <LoginHero />
                </Container>
            </Container>
            <LoginForm />
        </Container>
    </Page>
</template>

<script setup>
    import Page from '../components/common/Page.vue'
    import Container from '@/components/common/Container.vue';
    import Logo from '@/components/common/Logo.vue';
    import LoginHero from '@/components/auth/LoginHero.vue';
    import LoginForm from '@/components/auth/LoginForm.vue';
</script>
<style>
    .nunito{
        font-family: "Nunito Sans", sans-serif;
    }
</style>
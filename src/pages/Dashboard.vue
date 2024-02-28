<template>
    <Page :classes="`page box-shadow_ flex flex-col bigtab:flex-row items-center justify-center h-full p-30 sm-tab:p-20 bigtab:p-20 gap-20 phone-big:gap-50 bigtab:gap-0`">

            
            <Container :classes="`col-span-1 w-45 relative flex flex-col justify-center  py-60 px-[20px] w-full big-tab:w-[90%]`">
                <Container :classes="`absolute top-50 left-20 w-[60px]`">
                    <Logo />
                </Container>
                <Container :classes="`flex`">
                    <DashboardHero />
                </Container>
            </Container>
            
            <DashboardForm />
    </Page>
</template>

<script setup>
    import Page from '../components/common/Page.vue'
    import Container from '@/components/common/Container.vue';
    import Logo from '@/components/common/Logo.vue';
    import DashboardForm from '@/components/dashboard/DashboardForm.vue';
    import DashboardHero from '@/components/dashboard/DashboardHero.vue';
</script>
<style>
    .nunito{
        font-family: "Nunito Sans", sans-serif;
    }
</style>
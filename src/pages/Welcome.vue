<template>
    <Page :classes="`page box-shadow_ flex flex-col items-center gap-[40px] phone-big:gap-30 justify-center relative h-screen`">
        <Nav />
        <Main />
    </Page>
</template>

<script setup>
    import Nav from '../components/welcome/Nav.vue'
    import Main from '../components/welcome/Main.vue'
    import Page from '../components/common/Page.vue'
</script>
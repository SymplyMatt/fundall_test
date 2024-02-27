<template>
    <Container :classes="`w-full flex justify-between items-center gap-20 absolute top-[20px] px-[20px]`">
        <Logo />
        <Container :classes="`flex justify-center items-center ex-sm-phone:text-[12px] text-[7px] sm-phone:text-[16px] phone-big:text-[18px] gap-5 phone-big:gap-10 font-bold`">
            <Button :text="`LOG IN`" :classes="`p-10 ex-sm-phone:p-10 bg-inherit rounded-10`" :onClickFunction="goToLogin"/>
            <Button :text='`SIGN UP`' :classes="`p-[8px] ex-sm-phone:p-10 bg-[#4CE895] rounded-10`" :onClickFunction="goToSignup"/>
        </Container>
    </Container>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import Logo from '../common/Logo.vue'
    import Button from '../common/Button.vue'
    import Container from '../common/Container.vue'

    const router = useRouter();

    const goToLogin = () => {
        router.push('/login')
    }

    const goToSignup = () => {
        router.push('/signup')
    }
</script>

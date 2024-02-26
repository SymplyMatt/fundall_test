<template>
    <Container :classes="`w-full flex justify-between items-center gap-20 absolute top-[20px] px-[20px]`">
        <Logo />
        <div class="flex justify-center items-center ex-sm-phone:text-[12px] text-[7px] sm-phone:text-[16px] phone-big:text-[18px] gap-5 phone-big:gap-10 font-bold">
            <Button :text="`LOG IN`" :classes="`p-10 ex-sm-phone:p-10 bg-inherit rounded-10`" :onClickFunction="handleClick"/>
            <Button :text='`SIGN UP`' :classes="`p-[8px] ex-sm-phone:p-10 bg-[#4CE895] rounded-10`" :onClickFunction="handleClick"/>
        </div>
    </Container>
</template>

<script setup>
    import Logo from '../common/Logo.vue'
    import Button from '../common/Button.vue'
    import Container from '../common/Container.vue'

    const handleClick = () => {
        console.log('I was logged');
    };
</script>
<template>
    <Container :classes="`bg-[#FFFFFF] box-shadow_ rounded-5 w-full grid grid-cols-1 gap-5 p-20 h-full items-center justify-center`">
        <Container :classes="`col-span-1 w-55  w-full flex flex-col justify-between h-full gap-10`">
            <Container :classes="`w-full flex flex-col gap-10`">
                <Container :classes="`h-full w-full flex flex-col gap-20`">
                    <Container :classes="`w-full flex flex-col sm-phone:flex-row gap-20`">
                        <Container :classes="`w-full flex flex-col gap-5`">
                            <Text :text="`First Name`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                            <Input :placeholder="`First Name`"/>
                        </Container>
                        <Container :classes="`w-full flex flex-col gap-5`">
                            <Text :text="`Last Name`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                            <Input :placeholder="`Last Name`"/>
                        </Container>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Email address`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Enter Email`"/>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Password`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Enter Password`"/>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Confirm Password`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Confirm Password`"/>
                    </Container>
                </Container>
                <Button :text='`SIGN UP`' :classes="`flex justify-center items-center p-[8px] ex-sm-phone:p-10 bg-[#4CE895] h-[45px] font-bold`" />
            </Container>
            <Container :classes="`font-semibold text-[12px] lg:text-[14px] text-center`">
                <span :class="`text-black font-normal`">Already have an account? &nbsp;</span>
                <span :class="`font-semibold text-[#4CE895] `">Login Here</span>
            </Container>
            
        </Container>
    </Container>
</template>

<script setup>
    import Container from '../common/Container.vue'
    import Text from '../common/Text.vue'
    import Button from '../common/Button.vue'
    import Input from '../common/Input.vue';
</script>
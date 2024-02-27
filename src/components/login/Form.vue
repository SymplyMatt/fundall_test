<template>
    <Container :classes="`bg-[#FFFFFF] box-shadow_ rounded-5 w-full grid grid-cols-1 gap-5 p-20 h-full items-center justify-center`">
        <Container :classes="`col-span-1 w-55  w-full flex flex-col justify-between h-full gap-10`">
            <Container :classes="`w-full flex flex-col gap-10`">
                <Container :classes="`h-full w-full flex flex-col gap-20`">
                    <Container :classes="`w-full flex gap-20`">
                        <Container :classes="`w-full flex flex-col gap-5`">
                            <Text :text="`First Name`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                            <input type="text" class="w-full border border-solid border-[#CAD0C9] h-[32px] lg:h-[38px] p-10 text-14" placeholder="First Name">
                        </Container>
                        <Container :classes="`w-full flex flex-col gap-5`">
                            <Text :text="`Last Name`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                            <input type="text" class="w-full border border-solid border-[#CAD0C9] h-[32px] lg:h-[38px] p-10 text-14" placeholder="Last Name">
                        </Container>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Email address`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <input type="text" class="w-full border border-solid border-[#CAD0C9] h-[32px] lg:h-[38px] p-10 text-14" placeholder="Enter Email">
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Password`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <input type="text" class="w-full border border-solid border-[#CAD0C9] h-[32px] lg:h-[38px] p-10 text-14" placeholder="Enter Password">
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Confirm Password`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <input type="text" class="w-full border border-solid border-[#CAD0C9] h-[32px] lg:h-[38px] p-10 text-14" placeholder="Confirm Password">
                    </Container>
                </Container>
                <Button :text='`SIGN UP`' :classes="`flex justify-center items-center p-[8px] ex-sm-phone:p-10 bg-[#4CE895] h-[45px] font-bold`" />
            </Container>
            <Text :text="`Login Here`" :classes="`font-semibold text-[12px] lg:text-[14px] text-[#4CE895] flex justify-center items-center`">
                <span :class="`text-black font-normal`">Already have an account? &nbsp;</span>
            </Text>
        </Container>
    </Container>
</template>

<script setup>
    import Container from '../common/Container.vue'
    import Text from '../common/Text.vue'
    import Button from '../common/Button.vue'
</script>
<template>
    <Container :classes="`bg-[#F2F3F7] box-shadow_ rounded-5 w-full grid grid-cols-1 gap-20 p-20 h-full items-center justify-center`">
        <Container :classes="`col-span-1 w-55  w-full flex flex-col justify-between h-full gap-30 bigtab:gap-10`">
            <Container :classes="`w-full sm:flex m-auto items-center justify-between bg-[#FFFFFF] sm:h-[60px] p-20 rounded-10`">
                <Container :classes="`flex flex-col  justify-center text-center sm:text-left`">
                    <Container :classes="`text-[18px] md:text-[20px] font-bold text-[#4CE895] gap-5`">
                        Welcome back, &nbsp;<span class="text-black">Babatunde</span>
                    </Container>
                    <Container :classes="`flex text-[12px] md:text-[14px] items-center justify-center sm:justify-start text-center`">
                        Now, let's get your expenses for this month
                    </Container>
                </Container>
                <Container :classes="`hidden sm:flex items-center justify-center relative bottom-10`">
                    <img src="../../assets/man_on_skat.svg" alt="" class="h-[60px]">
                </Container>
            </Container>

            <Container :classes="`w-full flex flex-col gap-10 phone-big:px-40`">
                <Container :classes="`h-full w-full flex flex-col gap-20 bigtab:gap-10`">
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Target Monthly Expenses`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Enter Amount`" :extraclass="`font-bold text-[#000000]`"/>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Date`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Select date`" :extraclass="`font-bold text-[#000000]`" :type="`date`"/>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Today's Expenses`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Container :classes="`w-full flex flex-col gap-10 bigtab:gap-5`">
                            <Container :classes="`w-full grid grid-cols-10 gap-10 sm:gap-20`">
                                <Container :classes="`flex gap-5 col-span-6`">
                                    <Input :placeholder="`Enter item`"/>
                                </Container>
                                <Container :classes="`flex gap-5 col-span-4`">
                                    <Input :placeholder="`Amount`"/>
                                </Container>
                            </Container>
                            <Container :classes="`w-full grid grid-cols-10 gap-10 sm:gap-20`">
                                <Container :classes="`flex gap-5 col-span-6`">
                                    <Input :placeholder="`Enter item`"/>
                                </Container>
                                <Container :classes="`flex gap-5 col-span-4`">
                                    <Input :placeholder="`Amount`"/>
                                </Container>
                            </Container>
                            <Container :classes="`w-full grid grid-cols-10 gap-10 sm:gap-20`">
                                <Container :classes="`flex gap-5 col-span-6`">
                                    <Input :placeholder="`Enter item`"/>
                                </Container>
                                <Container :classes="`flex gap-5 col-span-4`">
                                    <Input :placeholder="`Amount`"/>
                                </Container>
                            </Container>
                            <Container :classes="`w-full flex sm:grid sm:grid-cols-3 sp-tab:grid-cols-2 gap-5`">
                                <Container :classes="`flex gap-5 col-span-1`">
                                </Container>
                                <Container :classes="`flex gap-5 col-span-2 sp-tab:col-span-1 grid grid-cols-7 justify-center items-center`">
                                    <Text :text="`Total Actual Expenses: `" :classes="`font-bold text-[12px] lg:text-[14px] col-span-4`"/>
                                    <Container :classes="`flex gap-5 col-span-3 justify-center items-center`">
                                        <Text :text="`#`" :classes="`font-bold text-[20px]col-span-4`"/>
                                        <Input :placeholder="`0.00`"/>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                    <Container :classes="`inline-block flex justify-center items-center`">
                        <Button :text="`SAVE TODAY'S EXPENSES`" :classes="`span-0 flex justify-center items-center w-contain bg-[#4CE895]  font-bold p-10 h-[40px] rounded-[15px] text-[10px] ex-sm-phone:text-[12px] sm:text-[14px] text-center`" :onClickFunction="goToDashboard" />
                    </Container>
                </Container>
            </Container>
        </Container>
    </Container>
</template>

<script setup>
    import Container from '../common/Container.vue'
    import Text from '../common/Text.vue'
    import Button from '../common/Button.vue'
    import Input from '../common/Input.vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();

    const goToSignup = () => {
        router.push('/signup');
    }
    const goToDashboard = () => {
        router.push('/dashboard');
    }
</script>
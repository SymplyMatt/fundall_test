<template>
    <Container :classes="`bg-[#FFFFFF] box-shadow_ rounded-5 w-full grid grid-cols-1 gap-30 p-20 phone-big:px-60 h-full items-center justify-center`">
        <Container>
            <Text :text="`Holla`" :classes="`font-semibold text-[30px] lg:text-[14px]`"/>
            <Text :text="`Sign in to the vibe!`" :classes="`font-semibold text-[20px] lg:text-[14px]`"/>
        </Container>
        <Container :classes="`col-span-1 w-55  w-full flex flex-col justify-between h-full gap-10`">
            <Container :classes="`w-full flex flex-col gap-10`">
                <Container :classes="`h-full w-full flex flex-col gap-20`">
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Email address`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Enter Email`" :modelValue="`email`" @updateModel="updateModell"/>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Password`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Enter Password`" :modelValue="`password`" type="password"  @updateModel="updateModell"/>
                    </Container>
                </Container>
                <Button :text='`LOGIN`' :classes="`flex justify-center items-center p-[8px] ex-sm-phone:p-10 bg-[#4CE895] h-[45px] font-bold`"  :onClickFunction="goToDashboard" />
            </Container>
            <Container :classes="`flex flex-col gap-20`">
                <Container :classes="`font-semibold text-[12px] lg:text-[14px] text-center`">
                    <span :class="`text-black font-normal`">Don't have an account? &nbsp;</span>
                    <span :class="`font-semibold text-[#4CE895]  cursor-pointer`" @click="goToSignup">Register Here</span>
                </Container>
                <Container :classes="`text-center  text-[12px] lg:text-[16px] text-[#4CE895]`">
                    <span :class="`text-black font-normal`">By clicking on Login, you agree to our &nbsp;</span>
                    <span :class="`font-semibold cursor-pointer`">Terms & Conditions and Privacy Policy</span>
                </Container>
            </Container>
        </Container>
    </Container>
</template>

<script setup>
    import { ref, watch } from 'vue';
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

    const values = ref({});

    const updateModell = (newValue) =>{
        const {key, value} = newValue
        console.log(newValue.key);
        console.log(newValue.value);
        values.value = {...values.value, [key]: value}
    }

    watch(() => values.value, (email) => {
       console.log('values: ',email);
    });
</script>

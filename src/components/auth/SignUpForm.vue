<template>
    <Container :classes="`bg-[#FFFFFF] box-shadow_ rounded-5 w-full grid grid-cols-1 gap-5 p-20 phone-big:px-60 h-full items-center justify-center`">
        <Container :classes="`col-span-1 w-55  w-full flex flex-col justify-between h-full gap-10`">
            <Container :classes="`w-full flex flex-col gap-10`">
                <Container :classes="`h-full w-full flex flex-col gap-20`">
                    <Container :classes="`w-full flex flex-col sm-phone:flex-row gap-20`">
                        <Container :classes="`w-full flex flex-col gap-5`">
                            <Text :text="`First Name`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                            <Input :placeholder="`First Name`" :modelValue="`firstname`" @updateModel="update_model"/>
                        </Container>
                        <Container :classes="`w-full flex flex-col gap-5`">
                            <Text :text="`Last Name`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                            <Input :placeholder="`Last Name`" :modelValue="`lastname`" @updateModel="update_model"/>
                        </Container>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Email address`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Enter Email`" :modelValue="`email`" @updateModel="update_model"/>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Password`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Enter Password`" :modelValue="`password`" @updateModel="update_model"/>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Confirm Password`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Confirm Password`" :modelValue="`password_confirmation`" @updateModel="update_model"/>
                    </Container>
                </Container>
                <Button :text='`SIGN UP`' :classes="`flex justify-center items-center p-[8px] ex-sm-phone:p-10 bg-[#4CE895] h-[45px] font-bold`" :onClickFunction="authUser" :active="areInputsValid" :loading="loading" />
            </Container>
            <Container :classes="`font-semibold text-[12px] lg:text-[14px] text-center`">
                <span :class="`text-black font-normal`">Already have an account? &nbsp;</span>
                <span :class="`font-semibold text-[#4CE895]  cursor-pointer`" @click="goToLogin">Login Here</span>
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
    import sendRequest from '../../config/fetchData.js'
    import { ref, watch, computed } from 'vue';

    const router = useRouter();

    const goToLogin = () => {
        router.push('/login')
    }
    const goToDashboard = () => {
        router.push('/dashboard');
    }
    const values = ref({
        firstname : '',
        lastname : '',
        email : '',
        password : '',
        password_confirmation : '',
    });
    const loading = ref(false);

    const update_model = (newValue) =>{
        const {key, value} = newValue
        values.value = {...values.value, [key]: value}
    }

    const areInputsValid = computed(() => {
        const isValid = Boolean(values.value.firstname && values.value.lastname && isValidEmail(values.value.email || '') && values.value.password.length > 5 && values.value.password_confirmation.length > 5) ;
        return isValid;
    });
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    const authUser = async () =>{
        if(areInputsValid.value){
            try {
            loading.value = true;
            const response = await sendRequest('post', '/api/v1/register', values.value);
            if (response.status === 200) {
              loading.value = false;
              goToDashboard();
            } else {
              loading.value = false; 
            }
          } catch (error) {
            console.error('An error occurred while fetching data', error);
            loading.value = false;
          }
        }else{
            console.log('invalid form inputs');
        }
    }

    watch(() => values.value, (newValue) => {
        // console.log('values: ', newValue);
    });
</script>
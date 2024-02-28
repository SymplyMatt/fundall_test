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
                        <Text :text="`Email or Username`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Enter Email`" :modelValue="`email`" @updateModel="update_model"/>
                    </Container>
                    <Container :classes="`w-full flex flex-col gap-5`">
                        <Text :text="`Password`" :classes="`font-semibold text-[12px] lg:text-[14px]`"/>
                        <Input :placeholder="`Enter Password`" :modelValue="`password`" type="password"  @updateModel="update_model"/>
                    </Container>
                </Container>
                <Button :text='`LOGIN`' :classes="`flex justify-center items-center p-[8px] ex-sm-phone:p-10 bg-[#4CE895] h-[45px] font-bold`"  :onClickFunction="authUser" :active="areInputsValid" :loading="loading"/>
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
    import { ref, watch, computed } from 'vue';
    import Container from '../common/Container.vue'
    import Text from '../common/Text.vue'
    import Button from '../common/Button.vue'
    import Input from '../common/Input.vue';
    import { useRouter } from 'vue-router'
    import sendRequest from '../../config/fetchData.js'
    import { useStore } from 'vuex';

    const router = useRouter();
    const store = useStore();

    const goToSignup = () => {
        router.push('/signup');
    }
    const goToDashboard = () => {
        router.push('/dashboard');
    }

    const values = ref({
        email : '',
        password : ''
    });
    const loading = ref(false);
    const update_model = (newValue) =>{
        const {key, value} = newValue
        values.value = {...values.value, [key]: value}
    }
    const areInputsValid = computed(() => {
        const isValid = Boolean(values.value.email && values.value.password) ||  false;
        return isValid;
    });
    
    const authUser = async () =>{
        if(areInputsValid.value){
            try {
            loading.value = true;
            const response = await sendRequest('post', '/api/v1/login', values.value);
            if (response.status === 200) {
                loading.value = false;
                console.log('Monthly target: ', response.data.success);
                store.dispatch('updateUser', response.data.success);
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

</script>

<template>
    <Page :classes="`page box-shadow_ flex flex-col bigtab:flex-row items-center justify-center h-full p-30 sm-tab:p-20 bigtab:p-20 gap-20 phone-big:gap-50 bigtab:gap-0`">

            
            <Container :classes="`col-span-1 w-45 relative flex flex-col justify-center  py-60 px-[20px] w-full big-tab:w-[90%]`">
                <Container :classes="`absolute top-50 left-20 w-[60px]`">
                    <Logo />
                </Container>
                <Container :classes="`flex`">
                    <DashboardHero :user-info="userInfo"/>
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
    import { useRouter } from 'vue-router'
    import sendRequest from '../config/fetchData'
    import { ref, watch, computed, onMounted } from 'vue';
    import { useStore } from 'vuex';

    const router = useRouter();
    const store = useStore();
    const goToLogin = () => {
        router.push('/login')
    }
    onMounted(() => {
        const token = useStore().getters.getUser.user.access_token;
        if (!token) {
            goToLogin();
        } else {
            getData();
        }
    });
    onMounted(() => {
        const token = useStore().getters.getUser.user.access_token;
        if(!token){
            goToLogin();
        }
    });
    onMounted(() => {
        userInfo.value = useStore().getters.getUser.user
    });
    const userInfo= ref(useStore()?.getters?.getUser || {});
    const getData = async () =>{
            try {
                const token = useStore().getters.getUser.user.access_token;
                const monthly_target = useStore().getters.getUser.user.monthly_target;
                const response = await sendRequest('get', '/api/v1/base/profile', {}, token);
                if (response.status === 200) {
                    const newUserData = response.data.success.data;
                    newUserData.monthly_target = monthly_target;
                    newUserData.access_token = token;
                    userInfo.value = newUserData;
                    console.log('new data: ',newUserData);
                    store.dispatch('updateUser', newUserData);
                } else {
                }
            } catch (error) {
                console.error('An error occurred while fetching data', error);
            }
    }
</script>
<style>
    .nunito{
        font-family: "Nunito Sans", sans-serif;
    }
</style>
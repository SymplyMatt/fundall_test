<template>
    <Container :classes="`flex flex-col justify-between gap-20 w-full bigtab:w-[80%] mt-50`">
        <Container :classes="`flex items-center gap-20 py-10`">
            <Container :classes="`h-[40px] w-[40px] flex items-center justify-center p-20 bg-[#C4C4C4] rounded-5`"><i class="fa-solid fa-user"></i></Container>
            <Container :classes="`flex flex-col justify-center`">
                <Container :classes="`text-14 font-bold`">{{ userInfo.firstname || ''}} {{ userInfo.lastname || ''}}</Container>
                <Container :classes="`text-12`">{{ userInfo.email || ''}}</Container>
            </Container>
        </Container>
        <Container :classes="`flex flex-col gap-10`">
            <Container :classes="`flex flex-col`">
                <Container :classes="`text-[14px]`">Target Monthly Expenses</Container>
                <Container :classes="`text-18 font-bold`">{{ userInfo.monthly_target || ''}}</Container>
            </Container>
            <Container :classes="`w-full bg-[#F2F3F7]`">
                <Container :classes="`w-[30%] bg-[#4DE897] h-[7px]`"></Container>
            </Container>
        </Container>
        <Container :classes="`bg-white box-shadow_ w-full p-10 rounded-10 gap-10 flex flex-col bigtab:h-[200px] overflow-scroll flex flex-col items-center m-auto`">
            <Container :classes="`text-[14px] font-bold w-full`">Daily Expenses Summary</Container>
            <Container :classes="`w-full`">
                <div class="grid grid-cols-10 p-10 text-14">
                    <div class="col-span-6 flex items-center px-30 gap-20  nunito">
                        Date
                    </div>
                    <div class="col-span-4 flex items-center justify-center font-bold nunito">
                        Amount
                    </div>
                </div>
                <!-- <Container class="p-10 flex justify-center items-center">
                    <img src="../../assets/empty_box.svg" alt="" class="h-[100px]">
                </Container> -->
                <div class="flex flex-col my-10">
                    <div class="flex flex-col items-center gap-20 mb-20">
                        <div class="grid grid-cols-10 p-10 text-14 w-full ">
                            <div class="col-span-6 flex items-center gap-20  nunito">
                                <div class="h-10 w-10 bg-[#4CE895] rounded-50"></div>
                                30 Nov, 2018
                            </div>
                            <div class="col-span-4 flex items-center justify-center text-[#4CE895] font-bold nunito">
                                ₦30,000
                            </div>
                        </div>
                        <div class="h-[2px] w-full bg-[#E3ECE5]"></div>
                    </div>
                    <div class="flex flex-col items-center gap-20 mb-20">
                        <div class="grid grid-cols-10 p-10 text-14 w-full ">
                            <div class="col-span-6 flex items-center gap-20  nunito">
                                <div class="h-10 w-10 bg-[#4CE895] rounded-50"></div>
                                30 Nov, 2018
                            </div>
                            <div class="col-span-4 flex items-center justify-center text-[#4CE895] font-bold nunito">
                                ₦30,000
                            </div>
                        </div>
                        <div class="h-[2px] w-full bg-[#E3ECE5]"></div>
                    </div>
                    <div class="flex flex-col items-center gap-20 mb-20">
                        <div class="grid grid-cols-10 p-10 text-14 w-full ">
                            <div class="col-span-6 flex items-center gap-20  nunito">
                                <div class="h-10 w-10 bg-[#4CE895] rounded-50"></div>
                                30 Nov, 2018
                            </div>
                            <div class="col-span-4 flex items-center justify-center text-[#4CE895] font-bold nunito">
                                ₦30,000
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center items-center gap-20">
                        <div class="flex justify-center items-center gap-5">
                           <span class="flex justify-center items-center p-[3px] h-20 w-20 border border-1 border-[#A4B0A3] cursor-pointer">1</span>of <span class="">5</span>
                        </div>
                        <div class="flex gap-10 justify-center items-center text-white">
                            <div class="bg-[#4CE895] flex justify-center items-center p-[3px] rounded-50 h-20 w-20 rounded-50"><i class="fa-solid fa-angle-left cursor-pointer"></i></div>
                            <div class="bg-[#4CE895] flex justify-center items-center p-[3px] rounded-50 h-20 w-20"><i class="fa-solid fa-angle-right cursor-pointer"></i></div>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    </Container>
</template>

<script setup>
    import Container from '../common/Container.vue'
    import Text from '../common/Text.vue'
    import HeroImage from '../common/HeroImage.vue'
    import { defineProps } from 'vue';

    const props = defineProps({
        userInfo: {
            type: Object,
            default: {},
        },
    });
</script>
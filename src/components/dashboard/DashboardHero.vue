<template>
    <Container :classes="`flex flex-col justify-between gap-20 w-full sm-tab:w-[80%] mt-50`">
        <div class="flex items-center gap-20 py-10">
            <div class="h-[40px] w-[40px] flex items-center justify-center p-20 bg-[#C4C4C4] rounded-5">H</div>
            <div class="flex flex-col justify-center">
                <div class="text-14 font-bold">Babatunde Fashola</div>
                <div class="text-12">baba2@gmail.com</div>
            </div>
        </div>
        <div class="flex flex-col gap-10">
            <div class="flex flex-col">
                <div class="text-[14px]">Target Monthly Expenses</div>
                <div class="text-18 font-bold">596,000</div>
            </div>
            <div class="w-full bg-[#F2F3F7]">
                <div class="w-[30%] bg-[#4DE897] h-[7px]"></div>
            </div>
        </div>
        <div class="bg-white box-shadow_ w-full p-10 rounded-10 gap-10 flex flex-col">
            <div class="text-[14px] font-bold">Daily Expenses Summary</div>
            <div class="">
                <div class="px-30 flex justify-between items-center">
                    <div class="">Date</div>
                    <div class="">Amount</div>
                </div>
                <div class="p-10 flex justify-center items-center">
                    <img src="../../assets/empty_box.svg" alt="" class="h-[100px]">
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup>
    import Container from '../common/Container.vue'
    import Text from '../common/Text.vue'
    import HeroImage from '../common/HeroImage.vue'
</script>
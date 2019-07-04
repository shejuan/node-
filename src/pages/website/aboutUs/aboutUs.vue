<template>
    <div class="aboutUs">
        <div class="inner">
            <template>
            <el-carousel :interval="3000" type="card" height="475px">
                <el-carousel-item v-for="item in 6" :key="item">
                <img :src="require(`@/assets/${item}.jpg`)">
                </el-carousel-item>
            </el-carousel>
            </template>
        </div>

        <p><strong>公司简介：</strong></p>
        <div class="picInfo">
               
        </div>

        <p><strong>企业文化：</strong></p>
        <div class="picInfo">
               
        </div>

        <p><strong>公司愿景：</strong></p>
        <div class="picInfo">
               
        </div>

    </div>
</template>
<style src="./aboutUs.scss" lang="scss" scoped></style>

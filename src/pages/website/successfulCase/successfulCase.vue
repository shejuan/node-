<template>
    <div class="successfulCase">
        <div class="img1"><img src="@/assets/zhnyy.png"></div>
        <template v-for="(item,index) in anliList1">
            <div class="centDiv" :key="index">
                <div v-for="(item1,index1) in item" :key="index1" class="bigImg" >
                    <div @mouseover ="onMouseOver(index,index1)" @mouseout="onMouseOut(index,index1)">
                        <img :src="item1.url"/>
                    </div>
                    <div class="info" v-show="item1.show">
                        <h3>{{item1.msg}}</h3>  
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<style src="./successfulCase.scss" lang="scss" scoped></style>

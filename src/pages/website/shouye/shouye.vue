<template>
    <div class="box">
        <div>
            <el-carousel :interval="2000" type="card" height="475px">
                <el-carousel-item v-for="(item,index) in wheelImg" :key="index">
                    <img :src="item.pic_url">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="content">
            <div class="title size-large">智能抄表收费功能</div>
            <el-tabs v-model="activeName">
                <template v-for="(item,index) in zncbList">
                    <el-tab-pane :label="item.meter_no" :name="`no_${index}`" :key="index">
                        <img :src="item.pic_url"/>
                    </el-tab-pane>
                </template>
            </el-tabs>
        </div>
        <div class="content">
            <div class="title size-large">智能配电监控</div>
            <el-menu :default-active="pd_current" mode="horizontal" @select="pdjkSelect">
                <template v-for="(item,index) in pdjkList">
                    <template v-if="item.children&&item.children.length>0">
                        <el-submenu :key="index" :index="`${index+1}`">
                            <template slot="title">{{item.name}}</template>
                            <template v-for="(item1,index1) in item.children">
                                <el-menu-item
                                    :key="index1"
                                    :index="`${index+1}-${index1+1}`"
                                >{{item1.power_name}}</el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :key="index" :index="`${index+1}`">{{item.name}}</el-menu-item>
                    </template>
                </template>
            </el-menu>
            <div class="picAre">
                <img :src="pdjk">
            </div>
        </div>
        <div class="znsb">
            <div class="title size-large">智能设备</div>
            <div class="picAre">
                <img src="@/assets/37.png">
            </div>
        </div>
        <div class="ewm">
            <img src="@/assets/38.png">
        </div>
    </div>
</template>
<style src="./shouye.scss" lang="scss" scoped></style>

<template>
   <div class="smartDevice">
        <div class="leftDiv">
            <el-menu 
                :default-active="dataType"
                class="el-menu-vertical-demo">
                <el-submenu index="1">
                    <template slot="title">
                    <span>设备列表</span>
                    </template>
                    <el-menu-item-group>
                    <el-menu-item index="1-1">单相智能电表</el-menu-item>
                    <el-menu-item index="1-2">单相费控电表</el-menu-item>
                    <el-menu-item index="1-3">智能三相电表</el-menu-item>
                    <el-menu-item index="1-4">三相费控电表</el-menu-item>
                    <el-menu-item index="1-5">智能水表</el-menu-item>
                    <el-menu-item index="1-6">阀控水表</el-menu-item>
                    <el-menu-item index="1-7">智能气表</el-menu-item>
                    <el-menu-item index="1-8">配变终端</el-menu-item>
                    <el-menu-item index="1-9">专变终端</el-menu-item>
                    <el-menu-item index="1-10">电能量终端</el-menu-item>
                    <el-menu-item index="1-11">集中器</el-menu-item>
                    <el-menu-item index="1-12">采集器</el-menu-item>
                    <el-menu-item index="1-13">互感器</el-menu-item>
                    <el-menu-item index="1-14">智能开关</el-menu-item>
                    <el-menu-item index="1-15">温控仪</el-menu-item>
                    <el-menu-item index="1-16">火警报警器</el-menu-item>
                    <el-menu-item index="1-17">计量表箱</el-menu-item>
                    </el-menu-item-group>

                </el-submenu>
                </el-menu>
        </div>

         <div class="rightDiv">
            <div class="picInfo">
                 <img class="img1" src="@/assets/zndb1.png" @click="sbxx()">   
                 <img class="img2" src="@/assets/zndb2.png">
            </div>

            <p style="text-align:left;margin-left:50px"><strong>电易通app下载：</strong></p>
            <div class="ewm">
            <img src="@/assets/38.png">
            </div>
         </div>

   </div>
</template>
<style src="./smartDevice.scss" lang="scss" scoped></style>

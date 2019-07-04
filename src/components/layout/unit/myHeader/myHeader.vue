<template>
  <div class="myHeader">
    <div class="logo">
      <img src="static/images/cloulogo.png"/>
    </div>
    <div class="menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="runGoTo('shouye')">首页</el-menu-item>
      <el-menu-item index="2" @click="runGoTo('solution')">解决方案</el-menu-item>
      <el-menu-item index="3" @click="runGoTo('smartDevice')">智能装置</el-menu-item>
      <el-menu-item index="4" @click="runGoTo('cloudPlatform')">云平台</el-menu-item>
      <el-menu-item index="5" @click="runGoTo('aboutUs')">关于科中</el-menu-item>
      <el-menu-item index="6" @click="runGoTo('successfulCase')">成功案例</el-menu-item>
      <!-- <el-menu-item index="7" @click="runGoTo('mall')">商城</el-menu-item> -->
      <el-menu-item index="8" @click="runGoTo('contact')">联系我们</el-menu-item>
    </el-menu>
    </div>
    
  </div>
</template>
<style src="./myHeader.scss" lang="scss" scoped></style>

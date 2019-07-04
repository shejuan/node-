<template>
  <div class="solution">
    <div class="leftDiv">
      <el-menu :default-active="dataType" class="el-menu-vertical-demo" @select="handleSelect">
        <template v-for="(item, index) in list">
          <el-menu-item :key="index" :index="`${index+1}`">{{item.name}}</el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="rightDiv">
      <div class="topDiv">
        <img :src="myList.main_msg"/>
      </div>
      <div>
        <p>
          <strong>方案组成：</strong>
        </p>
        <div class="picInfo">
          <img :src="myList.program_composition_img"/>
        </div>

        <p>
          <strong>平台架构：</strong>
        </p>
        <div class="picInfo">
          <img :src="myList.plate_arch_img"/>
        </div>

        <p>
          <strong>管理端功能：</strong>
        </p>
        <div class="picInfo">
          <img :src="myList.manage_img"/>
        </div>

        <p>
          <strong>用户端功能：</strong>
        </p>
        <div class="picInfo">
          <img :src="myList.user_img"/>
        </div>

        <p>
          <strong>平台优势：</strong>
        </p>
        <div class="picInfo">
          <img :src="myList.plate_advan_img"/>
        </div>

        <p>
          <strong>主要产品选型：</strong>
        </p>
        <div class="picInfo">
          <img :src="myList.main_production_img"/>
        </div>

        <p>
          <strong>抄表方案选型：</strong>
        </p>
        <div class="picInfo">
          <img :src="myList.meter_production_msg"/>
        </div>

        <p>
          <strong>电易通app下载：</strong>
        </p>
        <div class="ewm">
          <img :src="myList.main_msg"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./solution.scss" lang="scss" scoped></style>

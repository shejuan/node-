<template>
  <el-menu :default-openeds="['1', '3']">
    <template v-for="(item, index) in data">
      <el-submenu :index="`${index+1}`" :key="index">
        <template slot="title"><i class="el-icon-message"></i>{{item.title}}</template>
        <el-menu-item-group  v-for="(val, valIndex) in item.list" :key="valIndex">
          <router-link :to="val.path || ''">
            <el-menu-item :index="index+1+'-'+valIndex+1">{{val.oneTitle}}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </el-menu>
</template>
<style src="./myAside.scss" lang="scss" scoped></style>

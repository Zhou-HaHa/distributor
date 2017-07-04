<template>
  <div class="container">
    <el-row class="header">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="grid-content bg-purple"></div>
        <div class="grid-content bg-purple"></div>
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="content">        
      <el-col :xs="15" :sm="10" :md="8" :lg="4" class="content-nav">
        <nav class="navigation">
          <el-menu default-active="2" class="el-menu-nav" @open="handleOpen" @close="handleClose" theme="dark" unique-opened router>
          <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
            <template slot="title"><i :class="item.iconCls"></i> 导航一</template>
            <el-submenu :index="index+''">
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{ child.name }}</el-menu-item>
            </el-submenu>
          </template>       
          </el-menu>
        </nav>
      </el-col>
      <el-col :xs="9" :sm="14" :md="16" :lg="20" class="content-info">
        <section class="info"><router-view></router-view></section></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  margin: 0px;
}

.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
.header {
  height: 65px;
  background: aliceblue;
  position: fixed;
  top: 0px;
  width: 100%;
}
.content {
  display: inline-block;
  position: absolute;
  top: 65px;
  bottom: 0;
  width: 100%;
}
.content-nav {
  height: 100%;
}
.navigation {
  background: aliceblue;
  height: 100%;
}
.el-menu-nav {
  height: 100%;
}
.content-info {
  overflow-y: visible;
  height: 100%;
}
.info {
  height: 100%;
  overflow-y: scroll;
}

</style>

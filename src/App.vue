
<template>
<!--  &lt;!&ndash;使用 router-link 组件进行导航 &ndash;&gt;-->
<!--  &lt;!&ndash;通过传递 `to` 来指定链接 &ndash;&gt;-->
<!--  &lt;!&ndash;`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签&ndash;&gt;-->
<!--  <router-link to="/">Go to Home</router-link>-->
<!--  |-->
<!--  <router-link to="/login">Go to About</router-link>-->
<!--  &lt;!&ndash; 路由出口 &ndash;&gt;-->
<!--  &lt;!&ndash; 路由匹配到的组件将渲染在这里 &ndash;&gt;-->
  <router-view></router-view>
</template>

<script setup lang="ts">

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

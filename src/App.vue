<template>
  <div id="app" :class="$deviceType">
    <img alt="Vue logo" src="./assets/logo.png">
    <Language />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1 style="font-size: 16px; text-align: center;">{{ $t("message.hello") }}</h1>
    <div>{{$t("home.title")}}</div>
    <h2>{{$t("about.title")}}</h2>
    <el-DatePicker></el-DatePicker>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Language from './components/common/languageBtn'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Language
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

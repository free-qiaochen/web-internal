<template>
  <div>
    <h2>{{$t('test.test1')}}</h2>
    <!-- <button type="button"
            class="btn btn-success"
            @click="changeLocale">中文/EN</button> -->
    <el-Button @click="changeLocale">中文/EN</el-Button>
    <div>
      <p>pc和mobile</p> 
      <div v-if="this.$deviceType==='pc'">pc组件</div>
      <div v-if="this.$deviceType==='mobile'">mobile组件</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  //静态
  props: {
  },
  computed: {
  },
  //监听
  watch: {
  },
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {
    changeLocale () {
      // this.$confirm(this.$t('layer.toggle'), this.$t('layer.tips'), {
      //   confirmButtonText: this.$t('button.ok'),
      //   cancelButtonText: this.$t('button.cancel'),
      //   type: 'warning'
      // }).then(() => {
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //   })
      // })
    },
  },
  created () {
  },
}
</script>

<style lang="scss" scoped>
</style>

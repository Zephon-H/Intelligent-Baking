<template>
  <div class="all">
    <div class="header-text">
      <div style="font-size: 1.1rem;">欢迎您，{{ userNname }} !</div>
    </div>
    <div class="selector-container">
      <div style="font-size: 1.1rem">时间选择：</div>
      <el-time-picker
          is-range
          v-model="timeValue"
          @change="timeValueChange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
      </el-time-picker>
    </div>
    <router-link to="/LoginPage" class="header-text-quit">退出</router-link>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: "index",
  data() {
    return {
      userNname: JSON.parse(localStorage.getItem('user')).nname,
      // timeValue: [new Date(2021, 10, 29, 8, 40), new Date(2021, 10, 29,9, 40)],

      timeValue: this.$store.state.homePageTimeValue,
    }
  },
  computed: {
    ...mapState(['homePageTimeValue', 'user']) //Vuex引入homePageTimeValue变量
  },
  methods: {
    ...mapMutations(['setTimeValue']), //Vuex引入homePageTimeValue变量更改方法
    timeValueChange() {
      this.setTimeValue(this.timeValue)
      this.$forceUpdate()
    },
    quit() {
      localStorage.removeItem('bdi_iot_token')
      localStorage.removeItem('bdi_iot_user')
      this.$router.push('/LoginPage')
    }
  }
}
</script>
<style scoped lang="less">

.header-text {
  margin: 0.2rem 0 0 2.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.all {
  display: flex;
  flex-direction: row;
}

.selector-container {
  display: flex;
  flex-direction: row;
  width: 76.6%;
  justify-content: flex-end;
  align-items: center;
  left: 92.8rem;
}

.header-text-quit {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.1rem;
  margin-left: 2rem;
  color: #1990ff;
  text-decoration: underline;
}


</style>
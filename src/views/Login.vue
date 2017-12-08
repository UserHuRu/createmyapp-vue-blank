<template>
  <div class="layout">
    <input type="text" v-model="form.username" placeholder="账号/手机/邮箱">
    <input type="password" v-model="form.password" placeholder="密码">
    <button type="button" @click="submit(form)">登 录</button>
    <button type="button" @click="reset">重 置</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Login',

  data () {
    return {
      form: {
        username: 'admin',
        password: '1234'
      }
    }
  },

  methods: {
    ...mapActions('user', [
      'login'
    ]),

    reset () {
      this.form.username = ''
      this.form.password = ''
    },

    submit ({username, password}) {
      this.login({
        username,
        password
      }).then(() => this.$router.push('/dashboard'))
    }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  padding: 20px;
}
</style>

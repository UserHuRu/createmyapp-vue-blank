<template>
  <div class="layout">
    <img :src="avatar" alt="avatar" >

    <h3>{{ username }}</h3>

    <button type="button" @click="$router.back()">Back</button>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Dashboard',

  computed: {
    ...mapState('user', [
      'username',
      'avatar'
    ])
  },

  mounted () {
    this.getDashboardData()
  },

  methods: {
    ...mapActions('user', [
      'getDashboardData'
    ]),

    back () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../scss/mixins";

.layout {
  padding: 20px;

  h3 {
    color: #DDD;
    font-weight: normal;
  }

  img {
    width: 145px;
    height: 145px;
    border-radius: 4px;
  }
}
</style>

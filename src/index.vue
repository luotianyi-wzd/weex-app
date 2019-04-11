<template>
  <div class="wrapper">
    <router-view/>
    <tab-bar @tabTo="onTabTo"></tab-bar>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  import tabBar from './components/TabBar.vue';
  export default {
    name: 'App',
    components: {
      tabBar
    },
    data () {
      return {
        logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
      }
    },
    methods: {
      onTabTo(data) {
        // modal.toast({message: data, duration: 1})
        this.$router.push('/' + data.data.type)
      }
    }
  }
</script>

<style scoped>

  .wrapper {
    height: auto;
  }

</style>

<template lang="pug">
  .flipper(:class="{'flip-container__active': isAuth}")
    .front
      user
    .back
      auth
</template>

<script>
  import User from '~/components/User.vue'
  import Auth from '~/components/Auth.vue'

  export default {
    name: 'flipper',
    props: {
      isAuth: Boolean
    },
    components: {
      User,
      Auth,
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/style/components/flipper.scss";
</style>

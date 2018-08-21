<template lang="pug">
  .wrapper
    parallax
    auth-button(:handleClick="handleAuthClick")
    .flip-container
      flipper(:isAuth="isAuth")
    footer.copyright-auth
      span.copyright-auth__text Шемяков Андрей | создано с любовью в LoftSchool | 2018
</template>

<script>
  import Parallax from '~/components/Parallax.vue'
  import AuthButton from '~/components/AuthButton.vue'
  import Flipper from '~/components/Flipper.vue'

  export default {
    layout: 'main',
    components: {
      Parallax,
      AuthButton,
      Flipper,
    },
    data() {
      return {
        isAuth: false,
      }
    },
    asyncData(context) {
      return {
        theme: 'mountains',
      }
    },
    methods: {
      handleAuthClick($event) {
        $event.preventDefault()
        this.isAuth = !this.isAuth
      },
    },
  }
</script>

<style lang="scss">
  @import "~/assets/style/pages/index.scss";
</style>


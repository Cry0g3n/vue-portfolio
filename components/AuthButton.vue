<template lang="pug">
  a(href="/" @click="handleClick").button.button__link="Авторизоваться"
</template>

<script>
  export default {
    name: 'auth-button',
    props: {
      handleClick: Function
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/style/components/auth-button.scss";
</style>

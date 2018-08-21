<template lang="pug">
  .user
    .user__photo
      img(src="~/assets/img/content/avatar.jpg" alt="Шемяков Андрей Веб разработчик").user__image
    p.user__name="Шемяков Андрей"
    p.user__description="Личный сайт веб разработчика"
    social
    ul.pages
      li.pages__item
        a(href="portfolio").pages__link="Мои работы"
      li.pages__item
        a(href="about").pages__link="Обо мне"
      li.pages__item
        a(href="blog").pages__link="Блог"
</template>

<script>
  import Social from '~/components/Social.vue'

  export default {
    name: 'user',
    components: {
      Social,
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/style/components/user.scss";
</style>

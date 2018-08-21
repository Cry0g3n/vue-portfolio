<template lang="pug">
  ul.social
    li(v-for="soc in socials").social__item
      a(:href="soc.link" target="_blank").social__link
        <!--svg.social__svg-->
          <!--use(xlink:href="~/assets/img/sprite/vk.svg")-->
        img(:src="soc.icon" alt="Горы Веб разработки").social__svg
</template>

<script>
  export default {
    name: 'Social',
    data() {
      return {
        socials: [
          { link: 'https://vk.com/shemyakov.andrey', icon: 'vk' },
          { link: 'https://github.com/Cry0g3n/', icon: 'github' },
          { link: '#', icon: 'in' },
        ].map(item => ({
          link: item.link,
          icon: require(`~/assets/img/sprite/${item.icon}.svg`)
        })),
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/style/components/social.scss";
</style>

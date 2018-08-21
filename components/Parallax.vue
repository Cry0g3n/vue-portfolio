<template lang="pug">
  .parallax(@mousemove="move" ref="parallax" :class="{'parallax__mobile': isMobile}")
    parallax-layer(
    v-if="!isMobile"
    v-for="image in imageList"
    :image="image.src"
    :key="image.id"
    :width="width"
    :height="height"
    :id="image.id"
    :clientHeight="clientHeight"
    )
</template>

<script>
  import ParallaxLayer from './ParallaxLayer'

  export default {
    name: 'parallax',
    components: {
      ParallaxLayer,
    },
    data() {
      return {
        imageList: [
          {
            id: 1,
            src: require('~/assets/img/bg/parallax/layer5.png'),
          },
          {
            id: 2,
            src: require('~/assets/img/bg/parallax/layer8.png'),
          },
          {
            id: 3,
            src: require('~/assets/img/bg/parallax/layer7.png'),
          },
          {
            id: 4,
            src: require('~/assets/img/bg/parallax/cloud65.png'),
          },
          {
            id: 5,
            src: require('~/assets/img/bg/parallax/layer6.png'),
          },
          {
            id: 6,
            src: require('~/assets/img/bg/parallax/layer4.png'),
          },
          {
            id: 7,
            src: require('~/assets/img/bg/parallax/sky3.png'),
          },
          {
            id: 8,
            src: require('~/assets/img/bg/parallax/layer2.png'),
          },
          {
            id: 9,
            src: require('~/assets/img/bg/parallax/layer1.png'),
          },
          {
            id: 10,
            src: require('~/assets/img/bg/parallax/cloud0.png'),
          },
        ],
        width: 0,
        height: 0,
        clientHeight: 0,
        isMobile: true
      }
    },
    methods: {
      move($event) {
        const { pageX, pageY } = $event
        const { clientWidth, clientHeight } = this.$refs.parallax
        this.width = (clientWidth / 2) - pageX
        this.height = (clientHeight / 2) - pageY
      },
    },
    mounted() {
      this.clientHeight = this.$refs.parallax.clientHeight
      const clientWidth = this.$refs.parallax.clientWidth
      this.isMobile = clientWidth < 1000
    },
    beforeMount() {

    }
  }
</script>

<style lang="scss">
  @import "~/assets/style/components/parallax.scss";
</style>

<template lang="pug">
  .parallax__layer(:style="position")
    img(:src="image" alt="Горы Веб разработки").parallax__image
</template>

<script>
  export default {
    name: 'parallax-layer',
    props: {
      image: String,
      width: Number,
      height: Number,
      id: Number,
      clientHeight: Number,
    },
    computed: {
      position() {
        const widthPosition = this.width * ((this.id + 1) / 100)
        const heightPosition = this.height * ((this.id + 1) / 100)
        const layerHeight = this.clientHeight
        const bottomPosition = ((layerHeight / 2) * ((this.id + 1) / 100))

        return {
          transform: `translate3d(${widthPosition}px, ${heightPosition}px, 0px)`,
          bottom: `-${bottomPosition}px`,
        }
      },
    },
  }
</script>

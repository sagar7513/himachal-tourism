<template>
  <section>
      <v-row class="full">
        <v-carousel v-model="model" class="full" height="100vh">
           <v-carousel-item
              v-for="(item,i) in images"
              :key="i"
              :src="item.src"
            >
            </v-carousel-item>
        </v-carousel>
      </v-row>
  </section>
</template>
<script>
export default {
  data: () => ({
      model: 0,
      images: [
        {src: require('@/assets/image1.jpeg')},
        {src: require('@/assets/image2.jpeg')},
        {src: require('@/assets/image5.jpeg')},
        {src: require('@/assets/image4.jpeg')},
        {src: require('@/assets/image3.jpeg')},
      ],
    }),
}
</script>

<style  scoped>
  section {
    height: 100%;
    width: 100%;
  }
  .v-btn {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 700 !important;
    font-size: 0.875rem;
    letter-spacing: 0.0892857143em;
    padding: 0px 20px !important;
    height: 36px !important;
    min-width: 0px !important;
    width: 155px !important;
  }
  .v-btn--text {
    font-weight: 600 !important;
    letter-spacing: 0.55px;
    font-size: 14px;
  }
  .text-decoration {
    text-decoration: none;
  }
  @media only screen and (min-width: 320px) and (max-width: 345px){
  .v-btn {
    font-family: "Montserrat", sans-serif !important;
    height: 32px !important;
    width: 138px !important;
  }
  }
  @media only screen and (min-width: 346px) and (max-width: 395px){
  .v-btn {
    height: 32px !important;
    width: 140px !important;
  }
  }
  @media only screen and (min-width: 396px) and (max-width: 430px){
  .v-btn {
    height: 32px !important;
    width: 140px !important;
  }
  }
</style>
<template>
  <div class="oneCar">
    <h1>{{car.make}}</h1>
    <h1>{{car.model}}</h1>
    <h2>{{car.year}}</h2>
    <h2>{{car.price}}</h2>
    <img :src="car.imgUrl" />
    <p>{{car.description}}</p>
  </div>
</template>


<script>
export default {
  name: "oneCar",
  data() {
    return {};
  },
  mounted() {
    let payload = {
      carId: this.$route.params.id
    };
    this.$store.dispatch("getCarById", payload);
  },
  computed: {
    car() {
      return this.$store.state.currentCar;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
img {
  width: 80%;
}
</style>
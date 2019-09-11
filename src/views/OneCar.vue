<template>
  <div class="oneCar container-fluid">
    <div class="row justify-content-center">
      <div class="col">
        <h1>{{car.make}} | {{car.model}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>{{car.year}}</h2>
        <h2>${{car.price}}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <img :src="car.imgUrl" />
    </div>
    <div class="row text-center justify-content-center">
      <p>{{car.description}}</p>
    </div>
    <div class="row justify-content-center">
      <button class="btn btn-danger" @click="deleteCar()">Delete</button>
    </div>
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
  methods: {
    deleteCar() {
      this.$store.dispatch("deleteCar", this.car._id);
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  width: 80%;
}
</style>
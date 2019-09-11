<template>
  <div class="cars container-fluid text-light">
    <div class="row d-flex justify-content-around">
      <JustCar v-for="car in cars" :carProp="car" :key="car._id" />
    </div>
    <div class="row">
      <button
        class="btn btn-primary col m-5"
        data-toggle="modal"
        data-target="#create-car"
      >Create Car</button>
      <CreateCar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JustCar from "../components/JustCar.vue";
import CreateCar from "../components/CreateCar.vue";

export default {
  name: "cars",
  components: {
    JustCar,
    CreateCar
  },
  mounted() {
    this.$store.dispatch("getCars");
  },
  computed: {
    cars() {
      return this.$store.state.cars;
    }
  },
  methods: {}
};
</script>

<template>
  <div class="justcar col-3 m-3" @click="viewCar()">
    <h1>{{carProp.make}}</h1>
    <h2>{{carProp.model}}</h2>
    <img :src="carProp.imgUrl" height="100px" />
    <h3>{{carProp.year}}</h3>
    <h3>{{carProp.price}}</h3>
  </div>
</template>


<script>
export default {
  name: "justcar",
  props: ["carProp"],
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    viewCar() {
      this.$router.push({ name: "justcar", params: { id: this.carProp._id } });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
<template>
  <div class="houses container-fluid text-light">
    <div class="row d-flex justify-content-center">
      <JustHouse v-for="house in houses" :houseProp="house" :key="house._id" />
    </div>
  </div>
</template>


<script>
import JustHouse from "../components/JustHouse.vue";
export default {
  name: "houses",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getHouses");
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  methods: {},
  components: { JustHouse }
};
</script>


<style scoped>
</style>
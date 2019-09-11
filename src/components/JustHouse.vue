<template>
  <div class="justhouse col-3 m-3">
    <h3>{{houseProp.levels}} Floors</h3>
    <h3>{{houseProp.bedrooms}} Bedrooms</h3>
    <h3>{{houseProp.bathrooms}} Bathrooms</h3>
  </div>
</template>


<script>
export default {
  name: "justhouse",
  props: ["houseProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewHouse() {
      this.$router.push({
        name: "justhouse",
        params: { id: this.houseProp._id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
<template>
  <div class="justjob col-4 m-3" @click="viewJob()">
    <h1>{{jobProp.jobTitle}}</h1>
    <h2>{{jobProp.company}}</h2>
  </div>
</template>


<script>
export default {
  name: "justjob",
  props: ["jobProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewJob() {
      this.$router.push({ name: "justjob", params: { id: this.jobProp._id } });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
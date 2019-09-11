<template>
  <div class="oneJob">
    <h1>{{job.jobTitle}} | {{job.company}}</h1>
    <h2>${{job.rate}} | {{job.hours}} hours</h2>
    <h3>{{job.description}}</h3>
    <button class="btn btn-danger" @click="deleteJob()">Delete</button>
  </div>
</template>


<script>
export default {
  name: "oneJob",
  data() {
    return {};
  },
  mounted() {
    let payload = {
      jobId: this.$route.params.id
    };
    this.$store.dispatch("getJobById", payload);
  },
  computed: {
    job() {
      return this.$store.state.currentJob;
    }
  },
  methods: {
    deleteJob() {
      this.$store.dispatch("deleteJob", this.job._id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
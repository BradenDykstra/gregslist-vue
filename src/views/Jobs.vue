<template>
  <div class="jobs container-fluid text-light">
    <div class="row d-flex justify-content-around">
      <JustJob v-for="job in jobs" :jobProp="job" :key="job._id" />
    </div>
    <div class="row">
      <button
        class="btn btn-primary col m-5"
        data-toggle="modal"
        data-target="#create-job"
      >Create Job</button>
      <CreateJob />
    </div>
  </div>
</template>


<script>
import JustJob from "../components/JustJob.vue";
import CreateJob from "../components/CreateJob.vue";
export default {
  name: "jobs",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getJobs");
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  methods: {},
  components: {
    JustJob,
    CreateJob
  }
};
</script>


<style scoped>
</style>
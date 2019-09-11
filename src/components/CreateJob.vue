<template>
  <div class="createJob text-dark">
    <div class="modal fade" tabindex="-1" role="dialog" id="create-job">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create A Job!</h5>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="makeJob()">
              <div class="input-group">
                <div>
                  <label for="jobTitle">Job Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Job Title"
                    id="jobTitle"
                    v-model="newJob.jobTitle"
                  />
                  <label for="company">Company</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company"
                    id="company"
                    v-model="newJob.company"
                  />
                  <label for="hours">Hours</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Hours"
                    id="hours"
                    v-model="newJob.hours"
                  />
                  <label for="rate">Rate</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Rate"
                    id="rate"
                    v-model="newJob.rate"
                  />
                  <label for="description">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Description"
                    id="description"
                    v-model="newJob.description"
                  />
                  <button type="submit" class="btn btn-primary">Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "createJob",
  data() {
    return {
      newJob: {}
    };
  },
  computed: {},
  methods: {
    makeJob() {
      this.$store.dispatch("makeJob", this.newJob);
      this.newJob = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
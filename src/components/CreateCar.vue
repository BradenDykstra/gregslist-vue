<template>
  <div class="createCar text-dark">
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" id="create-car">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create A Car!</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="makeCar()">
              <div class="input-group">
                <div class="row">
                  <div class="col-8 offset-2">
                    <label for="make">Make</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Make"
                      id="make"
                      v-model="newCar.make"
                    />
                    <label for="model">Model</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Model"
                      id="model"
                      v-model="newCar.model"
                    />
                    <label for="year">Year</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Year"
                      id="year"
                      v-model="newCar.year"
                    />
                    <label for="price">Price</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Price"
                      id="price"
                      v-model="newCar.price"
                    />
                    <label for="imgUrl">Image Url</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="imgUrl"
                      id="imgUrl"
                      v-model="newCar.imgUrl"
                    />
                    <label for="description">Description</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Description"
                      id="description"
                      v-model="newCar.description"
                    />
                    <button type="submit" class="btn btn-primary">Create</button>
                  </div>
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
  name: "createCar",
  data() {
    return {
      newCar: {}
    };
  },
  computed: {},
  methods: {
    makeCar() {
      this.$store.dispatch("makeCar", this.newCar);
      this.newCar = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
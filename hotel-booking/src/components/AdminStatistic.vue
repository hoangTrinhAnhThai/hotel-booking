<template>
  <div class="admin-statistic">
    <page-loader v-bind:isloaded="isloaded" />
    <div class="header"></div>
    <div class="container">
      <h2>List director non active</h2>
      <div class="statistic-table">
        <table>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </table>
        <tr v-for="user in listNonActiveDirector" v-bind:key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.userDetail.nameUserDetail }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button v-on:click="activeDirector(user.id)" type="submit">
              Active
            </button>
          </td>
        </tr>
      </div>
    </div>
  </div>
</template>
<script>
import PageLoader from "./PageLoader.vue";
export default {
  name: "admin-statistic",
  data() {
    return {
      listNonActiveDirector: null,
      isloaded: null,
    };
  },
  async created() {
    this.axios
      .get("admin/getDirector")
      .then((response) => {
        this.listNonActiveDirector = response.data;
        this.isloaded = false;
      })
      .catch((error) => {
        console.error(error);
        this.isloaded = false;
      });
  },
  components: {
    "page-loader": PageLoader,
  },
  methods: {
    activeDirector(idDirector) {
      this.isloaded = true;
      this.axios
        .put(`admin/getDirector/unlock/${idDirector}`)
        .then((response) => {
          console.warn(response.data);
          this.isloaded = false;
          this.$router.go();
        })
        .catch((error) => {
          this.isloaded = false;
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
.header {
  background-color: rgba(41, 46, 49, 0.9);
  height: 60px;
  width: 100%;
}
th {
  width: 400px;
}
td {
  width: 400px;
}
</style>
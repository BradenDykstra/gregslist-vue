<template>
  <div id="app" class="text-light">
    <div id="nav">
      <router-link to="/">Cars</router-link>|
      <router-link to="/houses">Houses</router-link>|
      <router-link to="/jobs">Jobs</router-link>
    </div>
    <img alt="Vue logo" src="./assets/logo.png" height="50px" />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #f8f9fa;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

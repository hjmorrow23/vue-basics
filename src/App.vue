<template> 
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Directory from './components/Directory.vue'
import people from "@/people.js";


export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    Header,
    Directory
  }, 
  methods: {
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.main {
  padding: 30px 40px;
  position: relative;
}

.sidebar {
        width: 225px;
        position: absolute;
        left: 40px;
    }
</style>

<template> 
    <div class="main">
      <Sidebar :users="users.people" :showUser="showUser"></Sidebar>
      <Content :users="users.people" :currentUserId="currentUserId"></Content>
      <!-- <section class="sidebar">
        <div v-for="user in users" class="person-container">
          <h1 class="person-name" :key="user.id" :data-id="user.id" @click.prevent="showUser">{{user.name}}</h1>
          <span v-if="user.inOffice">Green</span>
          <span v-if="!user.inOffice">Red</span>
      </div>
      </section>
      <div>{{users[currentUserId].name}}</div> -->
    </div>
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Sidebar from './Sidebar.vue'
import people from "@/people.js";


export default {
  name: 'app',
  data() {
    return {
      users: people,
      currentUserId: 0
    }
  },
  components: {
    Header,
    Sidebar,
    Content
  }, 
  methods: {
    showUser: function(e) {
      let userId = e.target.getAttribute("data-id");
      this.currentUserId = parseInt(userId);
    }
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
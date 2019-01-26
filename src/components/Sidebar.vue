<template>
    <section class="sidebar">
        <Person v-for="user in users" :user="user"></Person>
    </section>
</template>

<script>
    import Person from "./Person.vue";
    import people from "@/people.js";

    export default {
        name: "Sidebar",
        data() {
            return {
                users: people.people
            }
        },
        components: {
            Person
        },
        mounted() {
            console.log(this.users);
        }
    }
</script>

<style scoped>
    .sidebar {
        width: 225px;
        position: absolute;
        left: 40px;
    }
</style>
<template>
    <section class="sidebar">
        <Person v-for="user in users" :user="user" :showUser="showUser"></Person>
    </section>
</template>

<script>
    import Person from "./Person.vue";
    // import people from "@/people.js";

    export default {
        name: "Sidebar",
        props: {
            users: Array,
            showUser: Function
        },
        data() {
            return {
                // users: people.people
            }
        },
        components: {
            Person
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
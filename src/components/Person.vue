<template>
    <div class="person-container">
        <h1 class="person-name" :data-id="user.id" @click.prevent="showUser">{{user.name}}</h1>
        <span v-if="user.inOffice">Green</span>
        <span v-if="!user.inOffice">Red</span>
    </div>
</template>

<script>
    export default {
        name: "Person",
        props: {
            user: Object,
            showUser: Function
        },
        methods: {
            // showUser: function() {

            // }
        }
    }
</script>

<style scoped>
    h1 {
        cursor: pointer;
    }
</style>
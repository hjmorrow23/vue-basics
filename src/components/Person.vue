<template>
    <div class="person-container">
        <h1 class="person-name" :data-id="user.id" @click.prevent="showUser">{{user.name}}</h1>
        <span class="green" v-if="user.inOffice"></span>
        <span class="red" v-if="!user.inOffice"></span>
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

    .person-name {
        display: inline-block;
        font-size: 20px;
        margin-right: 20px;
        width: 70%;
    }

    span {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-block;
    }

    .green {
        background-color: green;
    }

    .red {
        background-color: red;
    }
</style>
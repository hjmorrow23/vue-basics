<template>
    <section class="content-wrapper">
        <div v-if="!editing">
            <h1 class="user-name">{{users[currentUserId].name}}</h1>
            <p class="user-description">{{users[currentUserId].description}}</p>
            <article class="likes user-details">
                <h2>Likes</h2>
                <ul>
                    <li v-for="like in users[currentUserId].likes">{{like}}</li>
                </ul>
            </article>
            <article class="dislikes user-details">
                <h2>Dislikes</h2>
                <ul>
                    <li v-for="dislike in users[currentUserId].dislikes">{{dislike}}</li>
                </ul>
            </article> 
        </div>
        <div v-else>
            <label>Name:</label>
            <input type="text" class="user-input" v-model="users[currentUserId].name" />
            <label>Description:</label>
            <input type="text" class="user-input" />
            <!-- <article class="likes user-details">
                <h2>Likes</h2>
                <ul>
                    <li v-for="like in users[currentUserId].likes">{{like}}</li>
                </ul>
            </article>
            <article class="dislikes user-details">
                <h2>Dislikes</h2>
                <ul>
                    <li v-for="dislike in users[currentUserId].dislikes">{{dislike}}</li>
                </ul>
            </article>  -->
        </div>
        <a href="" class="edit-button" @click.prevent="toggleEdit">Edit</a>
    </section>
</template>

<script>
    import people from '@/people.js'
    export default {
        props: {
            users: Array,
            currentUserId: Number
        },
        data() {
            return {
                editing: false
            }
        },
        methods: {
            toggleEdit: function() {
                this.editing = !this.editing;
            }
        }
    }
</script>

<style scoped>
    .content-wrapper {
        width: calc(100% - 360px);
        position: absolute;
        left: 300px;
        padding: 30px;
    }

    .user-description {
        width: 50%;
        margin: 0 auto 50px;
    }

    .user-details {
        width: 50%;
        display: inline-block;
        vertical-align: top;
    }

    .user-input {
        width: 200px;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        display: block;
        margin: 0 auto 50px;
    }

    ul {
        list-style: none;
        padding: 0;
    }
</style>
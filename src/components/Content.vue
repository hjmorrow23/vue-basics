<template>
    <section class="content-wrapper">
        <div v-if="!editing">
            <h1 class="user-name">{{users[currentUserId].name}}</h1>
            <div :class="users[currentUserId].person + ' user-image'"></div>
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
            <a href="" class="edit-button" @click.prevent="toggleEdit">Edit</a>
        </div>
        <div v-else>
            <label>Name:</label>
            <input type="text" class="user-input" v-model="users[currentUserId].name" />
            <label>Description:</label>
            <input type="text" class="user-input long-input" v-model="users[currentUserId].description" />
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
            <a href="" class="edit-button" @click.prevent="toggleEdit">Save</a>
        </div>
        
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

<style lang="scss" scoped>
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

    label {
        margin-bottom: 20px;
    }

    .user-input {
        width: 200px;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        display: block;
        margin: 20px auto 50px;
    }

    .long-input {
        width: 500px
    }

    .edit-button {
        text-decoration: none;
        border: 1px solid #000;
        padding: 10px 20px;
        color: #000;
        border-radius: 5px;
        background-color: transparent;
        transition: color .35s, background-color .35s;
        position: relative;
        top: 50px;

        &:hover {
            color: #fff;
            background-color: #000;
        }
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .user-image {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 30px auto;
    }

    .jon-snow {
        background: url('../assets/jon-snow.jpg') no-repeat;
        background-size: 300px;
        background-position: -50px 0;
    }
    .danny {
        background: url('../assets/danny-t.jpg') no-repeat;
        background-size: 400px;
        background-position: -80px 0;
    }
    .tyrion {
        background: url('../assets/tyrion.gif') no-repeat;
        background-size: 300px;
        background-position: -25px 0;
    }
    .arya {
        background: url('../assets/arya.jpg') no-repeat;
        background-size: 300px;
        background-position: -40px -10px;
    }
    .poddy {
        background: url('../assets/poddy.png') no-repeat;
        background-size: 400px;
        background-position: -104px 0px;
    }
</style>
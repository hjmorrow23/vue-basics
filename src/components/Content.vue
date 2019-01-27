<template>
    <section class="content-wrapper">
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
    </section>
</template>

<script>
    import people from '@/people.js'
    export default {
        props: {
            users: Array,
            currentUserId: Number
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
        margin: 0 auto;
    }

    .user-details {
        width: 50%;
        display: inline-block;
        vertical-align: top;
    }

    ul {
        list-style: none;
        padding: 0;
    }
</style>
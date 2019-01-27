<template>
    <div>
        <div>{{users[currentUserId].name}}</div>
    </div>
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

</style>
<template>
    <header class="main-header">
        <h1>Westeros Inc Office Directory</h1>
        <nav>
            <router-link to="/directory" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .main-header {
        height: 64px;
        background: #000;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.20);
        padding: 0 80px;
    }

    h1 {
        color: #fff;
        margin: 0;
        padding-top: 5px;
        display: inline-block;
        margin-right: 80px;
    }

    nav {
        display: inline-block;
    }

    .nav-link {
        color: #fff;
        text-decoration: none;
        margin-right: 20px;
        transition: color .35s;

        &:hover {
            color: darken(#fff, 40%);
        }
    }
</style>
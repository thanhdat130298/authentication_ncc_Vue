<template>
    <div>
        <h1>Login succesfuly</h1>
        <button @click="this.$router.go(-1)">BACK</button>
    </div>
</template>
<script>
export default {
    name: "success"
}
</script>
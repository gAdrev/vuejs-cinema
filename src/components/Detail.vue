<template>
    <div>Hello world detail</div>
</template>

<script>
export default {
    created: function created() {
        console.log(this.$route.params.id);
    }
}
</script>


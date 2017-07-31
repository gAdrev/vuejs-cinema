<template>
<div v-bind:class="{ 'check-filter': true, active: checked }"
    v-on:click="checkFilter">
    <span class="checkbox"></span>
    <span class="checkbox-filter-title">{{ title }}</span>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            checked: false
        };
    },
    props: ["title"],
    methods: {
        checkFilter: function() {
            this.checked = !this.checked;
            this.$emit("check-filter", "genre", this.title, this.checked);
        }
    }
}
</script>


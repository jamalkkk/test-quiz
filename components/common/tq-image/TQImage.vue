<style lang="scss" src="./tq-image.scss"></style>

<template>
    <div class="b-tq-image" v-html="html" />
</template>

<script>
export default {
    name: "TQImage",
    props: {
        name: {
            type: String,
            default: "close",
        },
    },
    computed: {
        html() {
            return require(`~/assets/img/${this.name}.svg?raw`);
        },
    },
};
</script>
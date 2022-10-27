<style lang="scss" src="./tq-image.scss"></style>

<template>
    <div v-if="isSVG" class="b-tq-image" v-html="html" />
    <img
        v-else
        class="lazyload"
        src="~/assets/img/landschaft.png?"
        alt="landschaft"
    />
</template>

<script>
export default {
    name: "TQImage",
    props: {
        isSVG: {
            type: Boolean,
            default: true,
        },
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
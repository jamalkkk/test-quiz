<style lang="scss" src="./tq-icon.scss"></style>

<template>
    <button class="b-tq-icon" v-html="html" type="button" @click="onClick" />
</template>

<script>
export default {
    name: "TQIcon",
    props: {
        name: {
            type: String,
            default: "close",
        },
        onClick: {
            type: Function,
            default() {
                return null;
            },
        },
    },
    data() {
        return {};
    },
    computed: {
        html() {
            return require(`~/assets/img/${this.name}.svg?raw`);
        },
    },
    methods: {},
};
</script>
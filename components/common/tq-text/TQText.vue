<style lang="scss" src="./tq-text.scss"></style>

<template>
    <p :class="`b-tq-text font-size-${fontSize}`">
        {{ text }}
    </p>
</template>

<script>
export default {
    name: "TQText",
    props: {
        text: {
            type: String,
            default: "",
        },
        fontSize: {
            type: Number,
            default: 4,
        },
    },
    data() {
        return {};
    },
};
</script>
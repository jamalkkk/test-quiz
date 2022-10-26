<style lang="scss" src="./slide.scss"></style>

<template>
    <div class="b-slide">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Slide",
    props: {
        name: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
};
</script>a
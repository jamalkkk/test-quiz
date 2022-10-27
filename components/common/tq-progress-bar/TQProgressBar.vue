<style lang="scss" src="./tq-progress-bar.scss"></style>

<template>
    <div class="b-tq-progress-bar">
        <div :class="`tq-progress-bar-track progress-${progress}`" />
    </div>
</template>

<script>
export default {
    name: "TQProgressBar",
    props: {
        progress: {
            type: Number,
            default: 0,
        },
    },
};
</script>
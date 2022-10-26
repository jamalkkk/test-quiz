<style lang="scss" src="./tq-progress-bar.scss"></style>

<template>
    <div class="b-tq-progress-bar">
        <div
            :class="`tq-progress-bar-track progress-${lastUnlockedQuestion}`"
        />
    </div>
</template>

<script>
export default {
    name: "TQProgressBar",
    computed: {
        lastUnlockedQuestion() {
            return this.$store.state.lastUnlockedQuestion;
        },
    },
};
</script>
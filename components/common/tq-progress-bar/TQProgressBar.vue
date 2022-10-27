<style lang="scss" src="./tq-progress-bar.scss"></style>

<template>
    <div class="b-tq-progress-bar">
        <div :class="`tq-progress-bar-track progress-${progress + increase}`" />
    </div>
</template>

<script>
export default {
    name: "TQProgressBar",
    props: {
        isCorrect: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            increase: 0,
        };
    },
    computed: {
        progress() {
            return this.$store.state.level - 1;
        },
        level() {
            return this.$store.state.level;
        },
        activeQuestion() {
            return this.$store.state.activeQuestion;
        },
    },
    watch: {
        isCorrect(value) {
            console.log("isCorrect: ", value);

            if (value && this.activeQuestion === this.level) {
                this.increase++;
            }
        },
    },
};
</script>
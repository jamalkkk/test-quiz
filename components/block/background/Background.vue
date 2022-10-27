<style lang="scss" src="./background.scss"></style>

<template>
    <div :class="`b-background is-weather-${color}`">
        <Snowflakes />
    </div>
</template>

<script>
import Snowflakes from "../snowflakes/Snowflakes.vue";
export default {
    components: { Snowflakes },
    name: "Background",

    data() {
        return {
            color: "other",
        };
    },
    computed: {
        weather() {
            this.color = this.$store.state.weather.toLowerCase();
            return this.$store.state.weather.toLowerCase();
        },
        activeSlide() {
            return this.$store.state.activeSlide;
        },
        isAnswerCorrect() {
            return this.$store.state.isAnswerCorrect;
        },
    },
    watch: {
        weather(value) {
            this.color = value.toLowerCase();
            // return this.$store.state.weather.toLowerCase();
        },
        activeSlide(value) {
            this.color =
                value === "result"
                    ? this.isAnswerCorrect
                        ? "green"
                        : "red"
                    : this.weather;
        },
    },
};
</script>
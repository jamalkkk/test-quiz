<style lang="scss" src="./background.scss"></style>

<template>
    <div :class="`b-background is-weather-${color}`">
        <div v-if="isGame" class="background-game">
            <TQImage class="game-image" name="landschaft" :isSVG="false" />
        </div>
        <Snowflakes />
    </div>
</template>

<script>
import Snowflakes from "../snowflakes/Snowflakes.vue";
import TQImage from "../../common/tq-image/TQImage.vue";

export default {
    components: { Snowflakes, TQImage },
    name: "Background",

    data() {
        return {
            isGame: false,
            color: "other",
        };
    },
    computed: {
        weather() {
            this.color = this.$store.state.weather.toLowerCase();
            return this.$store.state.weather.toLowerCase();
        },
        activeSlide() {
            this.isGame = this.$store.state.activeSlide === "game";
            return this.$store.state.activeSlide;
        },
        isAnswerCorrect() {
            return this.$store.state.isAnswerCorrect;
        },
    },
    watch: {
        weather(value) {
            this.color = value.toLowerCase();
        },
        activeSlide(value) {
            this.color =
                value === "result"
                    ? this.isAnswerCorrect
                        ? "green"
                        : "red"
                    : this.weather;
            this.isGame = value === "game";
        },
    },
};
</script>
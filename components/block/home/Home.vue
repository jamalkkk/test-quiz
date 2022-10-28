<style lang="scss" src="./home.scss"></style>

<template>
    <div class="b-home">
        <Background />
        <component :is="`slide-${activeSlide}`" />
    </div>
</template>


<script>
import Background from "../background/Background.vue";
import SlideMain from "../slideMain/SlideMain.vue";
import SlideQuestion from "../slideQuestion/SlideQuestion.vue";
import SlideResult from "../slideResult/SlideResult.vue";
import SlideGame from "../slideGame/SlideGame.vue";

const Slides = ["main", "question", "result", "game"];
const WeatherTypes = [
    "Clear",
    "Thunderstorm",
    "Drizzle",
    "rain",
    "Snow",
    "Clouds",
    "Others",
];

export default {
    components: {
        Background,
        SlideMain,
        SlideQuestion,
        SlideResult,
        SlideGame,
        Slides,
        WeatherTypes,
    },
    name: "Home",
    data() {
        return {
            currentSlide: Slides[0],
            slides: Slides,
        };
    },
    computed: {
        activeSlide() {
            return this.$store.state.activeSlide;
        },
    },
};
</script>
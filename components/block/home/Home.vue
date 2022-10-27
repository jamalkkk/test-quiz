<style lang="scss" src="./home.scss"></style>

<template>
    <div :class="`b-home is-weather-${weather}`">
        <Background />
        <component :is="`slide-${activeSlide}`" />
    </div>
</template>


<script>
import Background from "../background/Background.vue";
import SlideMain from "../slideMain/SlideMain.vue";
import SlideQuestion from "../slideQuestion/SlideQuestion.vue";
import SlideResult from "../slideResult/SlideResult.vue";

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
        SlideMain,
        SlideQuestion,
        SlideResult,
        Slides,
        WeatherTypes,
        Background,
    },
    name: "Home",
    data() {
        return {
            currentSlide: Slides[0],
            slides: Slides,
        };
    },
    computed: {
        weather() {
            return this.$store.state.weather.toLowerCase();
        },
        activeSlide() {
            return this.$store.state.activeSlide;
        },
    },
};
</script>
<style lang="scss" src="./home.scss"></style>

<template>
    <div class="b-home">
        <component :is="`slide-${activeSlide}`" />
    </div>
</template>


<script>
import SlideMain from "../slideMain/SlideMain.vue";
import SlideQuestion from "../slideQuestion/SlideQuestion.vue";
import SlideResult from "../slideResult/SlideResult.vue";

const Slides = ["main", "question", "result", "game"];

export default {
    components: { Slides, SlideMain, SlideQuestion, SlideResult },
    name: "Home",
    props: {
        name: {
            type: String,
            default: "",
        },
    },
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
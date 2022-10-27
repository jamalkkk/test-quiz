<style lang="scss" src="./slide-main.scss"></style>

<template>
    <slide
        :class="[
            'b-slide-main is-fading-from-left',
            {
                'is-fading-to-left': isFadingToLeft,
            },
        ]"
        name="main"
    >
        <div class="slide-main-content">
            <TQText text="Welcome" :fontSize="4" />
            <div class="slide-main-questions mt-5">
                <TQButton
                    v-for="i in 3"
                    :key="i"
                    class="slide-main-question"
                    :text="`${i}`"
                    :isWide="false"
                    :isActive="level >= i"
                    :onClick="() => goToQuestion(i)"
                />
            </div>
            <TQButton class="mt-5" text="Minigame" :onClick="goToGame" />
        </div>
    </slide>
</template>


<script>
import Slide from "../../common/slide/Slide.vue";
import TQButton from "../../common/tq-button/TQButton.vue";
import TQText from "../../common/tq-text/TQText.vue";

import { mapMutations } from "vuex";

export default {
    components: { Slide, TQText, TQButton },
    name: "SlideMain",
    props: {
        name: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            isFadingToLeft: false,
        };
    },
    computed: {
        level() {
            return this.$store.state.level;
        },
    },
    methods: {
        goToQuestion(questionNumber) {
            this.isFadingToLeft = true;

            setTimeout(() => {
                this.setActiveSlide("question");
                this.setActiveQuestion(questionNumber);
            }, 500);
        },
        goToGame() {
            this.isFadingToLeft = true;

            setTimeout(() => {
                this.setActiveSlide("game");
            }, 500);
        },
        ...mapMutations({
            setActiveSlide: "setActiveSlide",
            setActiveQuestion: "setActiveQuestion",
        }),
    },
};
</script>
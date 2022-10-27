<style lang="scss" src="./slide-result.scss"></style>

<template>
    <slide
        :class="[
            'b-slide-result is-fading-from-right',
            {
                'is-fading-to-right': isFadingToRight,
            },
        ]"
    >
        <div class="slide-result-content">
            <div class="content-top">
                <TQText
                    class="content-text"
                    :text="isAnswerCorrect ? 'Yay!' : 'No!'"
                    :fontSize="5"
                />
            </div>

            <div class="content-bottom">
                <TQButton
                    text="Back"
                    btnHight="medium"
                    :onClick="goToMainSlide"
                />
            </div>
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
    name: "SlideResult",
    data() {
        return {
            isFadingToRight: false,
        };
    },
    computed: {
        isAnswerCorrect() {
            return this.$store.state.isAnswerCorrect;
        },
        activeQuestion() {
            return this.$store.state.activeQuestion;
        },
        level() {
            return this.$store.state.level;
        },
    },
    methods: {
        goToMainSlide() {
            this.isFadingToRight = true;

            setTimeout(() => {
                this.setActiveSlide("main");
                this.setIsAnswerCorrect(false);
                this.setActiveQuestion(0);
            }, 500);
        },
        ...mapMutations({
            updateLevel: "updateLevel",
            setActiveSlide: "setActiveSlide",
            setIsAnswerCorrect: "setIsAnswerCorrect",
            setActiveQuestion: "setActiveQuestion",
        }),
    },
    mounted() {
        if (
            this.isAnswerCorrect &&
            this.level < 4 &&
            this.activeQuestion === this.level
        ) {
            this.updateLevel();
        }
    },
};
</script>
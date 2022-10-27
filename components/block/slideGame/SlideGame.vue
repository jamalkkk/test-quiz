<style lang="scss" src="./slide-game.scss"></style>

<template>
    <slide
        :class="[
            'b-slide-game is-fading-from-right',
            {
                'is-fading-to-right': isFadingToRight,
            },
        ]"
    >
        <div class="slide-game-content">
            <div class="content-top">
                <TQImage class="content-gift" name="gift" />
                <TQText :text="`Highscore 76`" :fontSize="1" />
                <TQText class="mt-1" :text="`26`" :fontSize="3" />
                <TQIcon
                    class="content-close"
                    name="close"
                    :onClick="goToMainSlide"
                />
            </div>

            <div class="content-bottom">
                <div class="content-props">
                    <div class="content-snow" />
                    <div class="content-gifts">
                        <div
                            v-for="i in 4"
                            :key="i"
                            class="gifts-gift"
                            :style="{
                                animationDelay: `${random(1, 30)}s`,
                            }"
                        >
                            <TQImage name="gift" />
                        </div>
                    </div>
                    <div class="content-obstacles">
                        <div
                            v-for="i in 6"
                            :key="i"
                            class="obstacles-obstacle"
                            :style="{
                                animationDelay: `${random(1, 30)}s`,
                            }"
                        >
                            <TQImage :name="`obstacle-${random(1, 2)}`" />
                        </div>
                    </div>
                    <div class="content-santa">
                        <Santa />
                        <!-- <TQImage :name="`santa-${santaState}`" /> -->
                    </div>
                </div>
                <TQButton
                    class="mt-5"
                    text="Jump"
                    bgColor="red"
                    btnHight="medium"
                    :onClick="jump"
                />
            </div>
        </div>
    </slide>
</template>

<script>
import Slide from "../../common/slide/Slide.vue";
import TQButton from "../../common/tq-button/TQButton.vue";
import TQText from "../../common/tq-text/TQText.vue";
import TQIcon from "../../common/tq-icon/TQIcon.vue";
import TQImage from "../../common/tq-image/TQImage.vue";
import { mapMutations } from "vuex";
import Santa from "./santa/Santa.vue";

export default {
    components: { Slide, TQText, TQButton, TQIcon, TQImage, Santa },
    name: "SlideGame",
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
        santaState() {
            return this.$store.state.santaState;
        },
    },
    methods: {
        goToMainSlide() {
            this.isFadingToRight = true;

            setTimeout(() => {
                this.setActiveSlide("main");
            }, 500);
        },
        random(min = 0, max = 2) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        jump() {
            this.setSantaState("jump");

            setTimeout(() => {
                this.setSantaState("ride");
            }, 1000);
        },
        ...mapMutations({
            setActiveSlide: "setActiveSlide",
            setSantaState: "setSantaState",
        }),
    },
};
</script>
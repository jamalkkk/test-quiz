<style lang="scss" src="./slide-question.scss"></style>

<template>
    <slide
        :class="[
            'b-slide-question is-fading-from-right',
            {
                'is-fading-to-right': isFadingToRight,
                'is-fading-to-left': isFadingToLeft,
            },
        ]"
        name="question"
    >
        <div class="slide-question-content">
            <div class="content-top">
                <TQText :text="currentQuestion.day" :fontSize="1" />
                <TQText
                    class="mt-2"
                    :text="currentQuestion.name"
                    :fontSize="3"
                />
                <TQIcon
                    class="content-close"
                    name="close"
                    :onClick="goToMainSlide"
                />
            </div>

            <div class="content-bottom">
                <TQImage
                    class="content-animal"
                    :name="currentQuestion.animal"
                />

                <TQText
                    class="mb-5"
                    :text="currentQuestion.text"
                    :fontSize="2"
                />
                <div class="content-answers">
                    <TQButton
                        v-for="(answer, i) in currentQuestion.answers"
                        :key="i"
                        :class="i && 'mt-3'"
                        :text="answer"
                        btnHight="short"
                        bgColor="white"
                        :onClick="(e) => chooseAnswer(e, i)"
                    />
                </div>
                <TQProgressBar
                    class="mt-5"
                    :isCorrect="isCorrect"
                    :level="level"
                />
            </div>
        </div>
    </slide>
</template>


<script>
import Slide from "../../common/slide/Slide.vue";
import TQButton from "../../common/tq-button/TQButton.vue";
import TQIcon from "../../common/tq-icon/TQIcon.vue";
import TQProgressBar from "../../common/tq-progress-bar/TQProgressBar.vue";
import TQText from "../../common/tq-text/TQText.vue";
import TQImage from "../../common/tq-image/TQImage.vue";

import { mapMutations } from "vuex";

/*
    Dynamic approcah: Usage of enpoint connected to the backend, to obtan a list of 
    all questions.
*/

const Questions = [
    {
        day: "Tag 7",
        name: "Bär",
        text: "The bear has a candy in his arms. Which color does it have?",
        answers: ["red and white", "red and green", "white and green"],
        correct: 0,
        animal: "bear",
    },
    {
        day: "Tag 6",
        name: "Rodulf",
        text: "Rudolf likes to have christmas balls on his antlers. How many are there?",
        answers: ["definitely two", "i guess three", "one, no wait, five"],
        correct: 1,
        animal: "deer",
    },
    {
        day: "Tag 8",
        name: "Uhu",
        text: "Uhu, the wise owl, likes to know how many letters her name contains?",
        answers: ["5000", "10", "3"],
        correct: 2,
        animal: "owl",
    },
];

/*
    --------------------------------------------------------------------------------
*/

export default {
    components: {
        Slide,
        TQText,
        TQButton,
        TQIcon,
        Questions,
        TQProgressBar,
        TQImage,
    },
    name: "SlideQuestion",
    data() {
        return {
            isSubmitted: false,
            isCorrect: false,
            isFadingToRight: false,
            isFadingToLeft: false,
            questions: Questions,
        };
    },
    computed: {
        level() {
            return this.$store.state.level;
        },
        currentQuestion() {
            return this.questions[this.$store.state.activeQuestion - 1];
        },
    },
    watch: {
        activeQuestion(value) {
            this.currentQuestion = this.questions[value];
        },
    },
    methods: {
        chooseAnswer({ target }, answer) {
            if (!this.isSubmitted) {
                this.isSubmitted = true;
                this.isCorrect = answer === this.currentQuestion.correct;

                target.classList.add(`is-${this.isCorrect ? "green" : "red"}`);

                setTimeout(() => {
                    this.isFadingToLeft = true;

                    setTimeout(() => {
                        this.goToResultSlide();
                    }, 500);
                }, 1000);
            }
        },
        goToResultSlide() {
            this.setIsAnswerCorrect(this.isCorrect);
            this.setActiveSlide("result");
        },
        goToMainSlide() {
            if (!this.isSubmitted) {
                this.isFadingToRight = true;

                setTimeout(() => {
                    this.setActiveSlide("main");
                    this.setActiveQuestion(0);
                }, 500);
            }
        },
        ...mapMutations({
            setActiveSlide: "setActiveSlide",
            setIsAnswerCorrect: "setIsAnswerCorrect",
            setActiveQuestion: "setActiveQuestion",
        }),
    },
};
</script>
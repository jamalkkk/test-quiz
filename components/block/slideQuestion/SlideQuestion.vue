<style lang="scss" src="./slide-question.scss"></style>

<template>
    <slide class="b-slide-question">
        <div class="slide-question-content">
            <div class="content-top">
                <TQText text="Tag 6" :fontSize="1" />
                <TQText class="mt-2" text="Rudolf" :fontSize="3" />
                <TQIcon class="content-close" name="close" />
            </div>

            <div class="content-bottom">
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
                        @click="chooseAnswer"
                    />
                </div>
                <TQProgressBar class="mt-5" />
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

const Questions = [
    {
        text: "The bear has a candy in his arms. Which color does it have?",
        answers: ["Blah Blah", "Blah Blah", "Blah Blah"],
        correctAnswer: 2,
    },
    {
        text: "Blah Blah 2",
        answers: ["Blah Blah", "Blah Blah", "Blah Blah"],
        correctAnswer: 2,
    },
    {
        text: "Blah Blah 3",
        answers: ["Blah Blah", "Blah Blah", "Blah Blah"],
        correctAnswer: 2,
    },
];
export default {
    components: { Slide, TQText, TQButton, TQIcon, Questions, TQProgressBar },
    name: "SlideQuestion",
    props: {
        name: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            questions: Questions,
            currentQuestion: Questions[0],
        };
    },
    computed: {
        lastUnlockedQuestion() {
            return this.$store.state.lastUnlockedQuestion;
        },
    },
    methods: {
        chooseAnswer() {},
    },
};
</script>
<style lang="scss" src="./slide-result.scss"></style>

<template>
    <slide class="b-slide-result">
        <div class="slide-result-content">
            <div class="content-top">
                <TQText
                    class="content-text"
                    :text="isRight ? 'Yay!' : 'No!'"
                    :fontSize="5"
                />
            </div>

            <div class="content-bottom">
                <TQButton text="Back" btnHight="medium" @click="chooseAnswer" />
            </div>
        </div>
    </slide>
</template>


<script>
import Slide from "../../common/slide/Slide.vue";
import TQButton from "../../common/tq-button/TQButton.vue";
import TQText from "../../common/tq-text/TQText.vue";

export default {
    components: { Slide, TQText, TQButton },
    name: "SlideResult",
    props: {
        isRight: {
            type: Boolean,
            default: true,
        },
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
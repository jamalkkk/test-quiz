<style lang="scss" src="./slide-main.scss"></style>

<template>
    <slide class="b-slide-main">
        <div class="slide-main-content">
            <TQText text="Welcome" :fontSize="4" />
            <div class="slide-main-questions mt-5">
                <TQButton
                    v-for="i in 3"
                    :key="i"
                    class="slide-main-question"
                    :text="`${i}`"
                    :isWide="false"
                    :isActive="i <= lastUnlockedQuestion"
                />
            </div>
            <TQButton class="mt-5" text="Minigame" />
        </div>
    </slide>
</template>


<script>
import Slide from "../../common/slide/Slide.vue";
import TQButton from "../../common/tq-button/TQButton.vue";
import TQText from "../../common/tq-text/TQText.vue";
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
        return {};
    },
    computed: {
        lastUnlockedQuestion() {
            return this.$store.state.lastUnlockedQuestion;
        },
    },
};
</script>
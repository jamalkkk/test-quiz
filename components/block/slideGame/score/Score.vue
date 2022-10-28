
<template>
    <TQText v-if="isHighscore" :text="`Highscore ${highscore}`" :fontSize="1" />
    <TQText v-else :text="`${score}`" :fontSize="3" />
</template>

<script>
import TQText from "../../../common/tq-text/TQText.vue";

export default {
    components: { TQText },
    name: "Score",
    props: {
        isHighscore: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        score() {
            return this.$store.state.score;
        },
        highscore() {
            return this.$store.state.highscore;
        },
    },
};
</script>
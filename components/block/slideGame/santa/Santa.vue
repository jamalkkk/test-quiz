<style lang="scss" src="./santa.scss"></style>

<template>
    <div
        :class="[
            'b-santa',
            {
                'is-jumping': santaState === 'jump',
                'is-crashing': santaState === 'crash',
            },
        ]"
    >
        <TQImage :name="`santa-${santaState}`" />
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import TQImage from "../../../common/tq-image/TQImage.vue";

export default {
    components: { TQImage },
    name: "Santa",
    data() {
        return {
            is: "ride",
        };
    },
    computed: {
        santaState() {
            return this.$store.state.santaState;
        },
    },
    methods: {
        ...mapMutations({
            setSantaState: "setSantaState",
        }),
    },
};
</script>
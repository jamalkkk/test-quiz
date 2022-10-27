<style lang="scss" src="./santa.scss"></style>

<template>
    <div class="content-santa">
        <TQImage :name="`santa-${santaState}`" />
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import TQImage from "../../../common/tq-image/TQImage.vue";

export default {
    components: { TQImage },
    name: "Santa",
    computed: {
        santaState() {
            return this.$store.state.santaState;
        },
    },
    methods: {
        jump() {
            this.setSantaState("jump");

            setTimeout(() => {
                this.setSantaState("ride");
            }, 1000);
        },
        ...mapMutations({
            setSantaState: "setSantaState",
        }),
    },
};
</script>
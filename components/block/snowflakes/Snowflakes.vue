<style lang="scss" src="./snowflakes.scss"></style>

<template>
    <div class="b-snowflakes">
        <div
            v-for="i in 40"
            :key="i"
            class="snowflakes-flake"
            :style="{
                left: `${random()}%`,
                animationDelay: `${random(20)}s`,
                opacity: `${random() * 0.01}`,
            }"
        >
            <TQImage :name="`snowflake-${(i % 3) + 1}`" />
        </div>
    </div>
</template>

<script>
import TQImage from "../../common/tq-image/TQImage.vue";
export default {
    components: { TQImage },
    name: "Snowflakes",
    methods: {
        position() {
            return {
                left: `${this.random()}%`,
            };
        },
        random(max = 100) {
            return Math.floor(Math.random() * max);
        },
    },
};
</script>
<style lang="scss" src="./slide.scss"></style>

<template>
    <div class="b-slide">
        <BackgroundImage v-if="name" :name="name" />
        <div
            :class="[
                'slide-content',
                {
                    'p-5': hasPadding,
                },
            ]"
        >
            <slot />
        </div>
    </div>
</template>

<script>
import Snowflakes from "../../block/snowflakes/Snowflakes.vue";
import BackgroundImage from "../background-image/BackgroundImage.vue";
export default {
    components: { BackgroundImage, Snowflakes },
    name: "Slide",
    props: {
        hasPadding: {
            type: Boolean,
            default: true,
        },
        name: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
};
</script>a
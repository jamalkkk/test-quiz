<style lang="scss" src="./background-image.scss"></style>

<template>
    <div class="b-background-image">
        <TQImage :name="name" />
    </div>
</template>


<script>
import TQImage from "../tq-image/TQImage.vue";

export default {
    components: { TQImage },
    name: "BackgroundImage",
    props: {
        name: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
};
</script>
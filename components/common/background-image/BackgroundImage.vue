<style lang="scss" src="./background-image.scss"></style>

<template>
    <div class="b-background-image">
        <TQImage :name="name" />
        <div v-if="name === 'main'" class="main-windmills">
            <TQImage
                v-for="i in 4"
                :key="i"
                :class="`main-windmill windmill-${i}`"
                name="windmill"
            />
        </div>
    </div>
</template>
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
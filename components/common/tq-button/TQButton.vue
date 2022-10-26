<style lang="scss" src="./tq-button.scss"></style>

<template>
    <button
        :class="[
            'b-tq-button',
            `is-${bgColor}`,
            `is-${btnHight}`,
            {
                'is-disabled': !isActive,
                'is-wide': isWide,
            },
        ]"
        type="button"
        :disabled="!isActive"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "TQButton",
    props: {
        isActive: {
            type: Boolean,
            default: true,
        },
        isWide: {
            type: Boolean,
            default: true,
        },
        btnHight: {
            type: String,
            default: "tall",
        },
        bgColor: {
            type: String,
            default: "red",
        },
        text: {
            type: String,
            default: "1",
        },
    },
    data() {
        return {};
    },
};
</script>
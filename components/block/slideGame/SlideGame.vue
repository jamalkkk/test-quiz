<style lang="scss" src="./slide-game.scss"></style>

<template>
    <slide
        :class="[
            'b-slide-game is-fading-from-right',
            {
                'is-fading-to-right': isFadingToRight,
            },
        ]"
    >
        <div class="slide-game-content">
            <div class="content-top">
                <TQImage class="content-gift" name="gift" />
                <Score :isHighscore="true" />
                <Score class="mt-1" />
                <TQIcon
                    class="content-close"
                    name="close"
                    :onClick="goToMainSlide"
                />
            </div>

            <div class="content-bottom">
                <div class="content-props">
                    <div class="content-snow" />
                    <div class="content-gifts">
                        <div
                            v-for="i in amount"
                            :key="i"
                            :id="`gift-${i}`"
                            class="gifts-gift"
                            :style="{
                                animationDelay: `${random(1, 15)}s`,
                            }"
                        >
                            <TQImage name="gift" />
                        </div>
                    </div>
                    <div class="content-obstacles">
                        <div
                            v-for="i in amount"
                            :key="i"
                            :id="`obstacle-${i}`"
                            class="obstacles-obstacle"
                            :style="{
                                animationDelay: `${random(1, 40)}s`,
                            }"
                        >
                            <TQImage :name="`obstacle-${random(1, 2)}`" />
                        </div>
                    </div>
                    <div class="content-santa">
                        <Santa id="santa" />
                    </div>
                    <div class="content-overlap">
                        <div ref="overlapJump" class="overlap-jump"></div>
                        <div ref="overlapCrash" class="overlap-crash"></div>
                    </div>
                </div>
                <TQButton
                    class="mt-5"
                    text="Jump"
                    bgColor="red"
                    btnHight="medium"
                    :onClick="jump"
                />
            </div>
        </div>
    </slide>
</template>

<script>
import Slide from "../../common/slide/Slide.vue";
import TQButton from "../../common/tq-button/TQButton.vue";
import TQText from "../../common/tq-text/TQText.vue";
import TQIcon from "../../common/tq-icon/TQIcon.vue";
import TQImage from "../../common/tq-image/TQImage.vue";
import Santa from "./santa/Santa.vue";
import Score from "./score/Score.vue";
import { mapMutations } from "vuex";

export default {
    components: { Slide, TQText, TQButton, TQIcon, TQImage, Santa, Score },
    name: "SlideGame",
    data() {
        return {
            isFadingToRight: false,
            isResettingGame: false,
            shouldShuffle: false,
            overlapJumpInterval: null,
            amount: 6,
        };
    },
    computed: {
        isAnswerCorrect() {
            return this.$store.state.isAnswerCorrect;
        },
        activeQuestion() {
            return this.$store.state.activeQuestion;
        },
        level() {
            return this.$store.state.level;
        },
        santaState() {
            return this.$store.state.santaState;
        },
        collidingGifts() {
            return this.$store.state.collidingGifts;
        },
        collidingObstacles() {
            return this.$store.state.collidingObstacles;
        },
        score() {
            return this.$store.state.score;
        },
        highscore() {
            return this.$store.state.highscore;
        },
    },
    watch: {
        santaState(value) {
            if (value === "jump" && this.collidingGifts.length) {
                this.setScore(this.score + this.collidingGifts.length);
            }
        },
        collidingObstacles(value) {
            if (this.santaState === "ride" && value.length) {
                this.setSantaState("crash");
                this.resetGame();
            }
        },
    },
    methods: {
        goToMainSlide() {
            this.isFadingToRight = true;

            setTimeout(() => {
                this.setActiveSlide("main");
            }, 500);
        },
        random(min = 0, max = 2) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        jump() {
            if (this.santaState === "ride") {
                this.setSantaState("jump");
                this.checkOverlapJump();

                setTimeout(() => {
                    clearInterval(this.overlapJumpInterval);
                    this.setSantaState("ride");
                }, 1200);
            }
        },
        checkOverlapJump() {
            this.overlapJumpInterval = setInterval(() => {
                const isOverlpaing = this.checkCollision(
                    document.getElementById("santa"),
                    "overlapJump"
                );
            }, 200);
        },
        checkPropsCollision() {
            for (let i = 1; i <= this.amount; i++) {
                setInterval(() => {
                    this.checkGiftCollision(i);
                    this.checkObstacleCollision(i);
                }, 200);
            }
        },
        checkGiftCollision(i) {
            const isGiftColliding = this.checkCollision(
                document.getElementById(`gift-${i}`),
                "overlapJump"
            );
            let updatedCollidingGifts = [...this.collidingGifts];
            const collidingGiftIndex = updatedCollidingGifts.indexOf(i);
            const collidingGiftIndexAdded = collidingGiftIndex !== -1;
            if (isGiftColliding) {
                if (!collidingGiftIndexAdded) updatedCollidingGifts.push(i);
            } else if (collidingGiftIndexAdded) {
                updatedCollidingGifts.splice(collidingGiftIndex, 1);
            }
            this.setCollidingGifts(updatedCollidingGifts);
        },
        checkObstacleCollision(i) {
            // This is a reptive code that code be optimised, due time constraints
            // I left it as is
            const isObstacleColliding = this.checkCollision(
                document.getElementById(`obstacle-${i}`),
                "overlapCrash"
            );

            let updatedCollidingObstacles = [...this.collidingObstacles];
            const collidingObstacleIndex = updatedCollidingObstacles.indexOf(i);
            const collidingObstacleIndexAdded = collidingObstacleIndex !== -1;

            if (isObstacleColliding) {
                if (!collidingObstacleIndexAdded)
                    updatedCollidingObstacles.push(i);
            } else if (collidingObstacleIndexAdded) {
                updatedCollidingObstacles.splice(collidingObstacleIndex, 1);
            }

            this.setCollidingObstacles(updatedCollidingObstacles);
        },
        checkCollision(el, overlap) {
            const overlapArea = this.$refs[overlap].getBoundingClientRect();
            const element = el.getBoundingClientRect();

            return !(
                overlapArea.top > element.bottom ||
                overlapArea.right < element.left ||
                overlapArea.bottom < element.top ||
                overlapArea.left > element.right
            );
        },
        resetGame() {
            if (!this.isResettingGame) {
                this.isResettingGame = true;

                this.setSantaState("crash");

                setTimeout(() => {
                    this.setSantaState("ride");
                    this.resetScore();
                    this.isResettingGame = false;
                }, 1000);
            }
        },
        resetScore() {
            this.setScore(0);
        },
        ...mapMutations({
            setActiveSlide: "setActiveSlide",
            setSantaState: "setSantaState",
            setCollidingGifts: "setCollidingGifts",
            setCollidingObstacles: "setCollidingObstacles",
            setScore: "setScore",
        }),
    },
    mounted() {
        this.resetScore();
        this.checkPropsCollision();
    },
};
</script>
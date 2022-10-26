export const state = () => ({
  lastUnlockedQuestion: 1,
  activeSlide: "result",
});

export const mutations = {
  setLastUnlockedQuestion(state, value) {
    state.lastUnlockedQuestion = value;
  },
  setActiveSlide(state, value) {
    state.activeSlide = value;
  },
};

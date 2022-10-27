export const state = () => ({
  level: 1,
  activeSlide: "main",
  activeQuestion: 0,
  isAnswerCorrect: false,
});

export const mutations = {
  updateLevel(state) {
    state.level++;
  },
  setActiveSlide(state, value) {
    state.activeSlide = value;
  },
  setActiveQuestion(state, value) {
    state.activeQuestion = value;
  },
  setIsAnswerCorrect(state, value) {
    state.isAnswerCorrect = value;
  },
};

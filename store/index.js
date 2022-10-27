export const state = () => ({
  isAnswerCorrect: false,
  activeSlide: "game",
  activeQuestion: 0,
  level: 1,
  weather: "others",
  santaState: "ride",
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
  setWeather(state, value) {
    state.weather = value;
  },
  setSantaState(state, value) {
    state.santaState = value;
  },
};

export const state = () => ({
  isAnswerCorrect: false,
  activeSlide: "main",
  activeQuestion: 0,
  level: 1,
  weather: "others",
  santaState: "ride",
  score: 0,
  highscore: 0,
  collidingGifts: [],
  collidingObstacles: [],
});

export const mutations = {
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
  setScore(state, value) {
    state.score = value;
    if (value > state.highscore) {
      state.highscore = value;
    }
  },
  setCollidingGifts(state, value) {
    state.collidingGifts = value;
  },
  setCollidingObstacles(state, value) {
    state.collidingObstacles = value;
  },
  updateLevel(state) {
    state.level++;
  },
};

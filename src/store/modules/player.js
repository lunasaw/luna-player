export default {
  namespaced: true,
  state() {
    return {
      options: {},
      playerRef: {},
      count: 0,
    };
  },
  mutations: {
    setOptions(state, options) {
      state.options = options;
    },
    setPlayer(state, player) {
      state.playerRef = player;
    },
    play(state) {
      state.playerRef.play();
    },
    pause(state) {
      state.playerRef.pause();
    },
    replay(state) {
      state.playerRef.replay();
    },
    getCurrentTime(state) {
      console.log(state.playerRef.getCurrentTime());
      return state.playerRef.getCurrentTime();
    },
  },
  actions: {
    play(context) {
      context.commit("play");
    },
    pause(context) {
      context.commit("pause");
    },
  },
  getters: {
    options: (state) => state.options,
    player: (state) => state.player,
    currentTime(state) {
      return state.playerRef.getCurrentTime();
    },
  },
};

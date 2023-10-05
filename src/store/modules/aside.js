export default {
  namespaced: true,
  state() {
    return {
      isCollapse: false,
    };
  },
  mutations: {
    collapseTab(state) {
      console.log("collapseTab");
      console.log(state.isCollapse);
      state.isCollapse = !state.isCollapse;
    },
  },
  actions: {
    collapseTab(context) {
      context.commit("collapseTab");
    },
  },
  getters: {
    isCollapse: (state) => state.isCollapse,
  },
};

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const types = {
  SET_USER: "SET_USER", // 用户信息
  SET_COURSEID: "SET_COURSEID" //课程id
};

const state = {
  // 需要维护的状态
  courseId: 'zh',
};

const getters = {
  user: state => state.userInfo,
  courseId: state => state.courseId
};

const mutations = {
  [types.SET_USER](state, userInfo) {
    if (userInfo) state.userInfo = userInfo;
    else state.userInfo = {};
  },
  [types.SET_COURSEID](state, courseId) {
      state.courseId = courseId;
  },
};

const actions = {
  //异步提交
  setUser: ({ commit }, userInfo) => {
    //this.$store.dispatch("setUser", value);
    commit(types.SET_USER, userInfo);
  },
  setCourseId: ({ commit }, courseId) => {
    commit(types.SET_COURSEID, courseId);
    //this.$store.dispatch("setCourseId", value);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

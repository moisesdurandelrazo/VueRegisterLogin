import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      isLoggedIn: false,
      email: '',
      password: ''
    };
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setPassword(state, payload) {
      state.password = payload;
    }
  },
  actions: {
    login({ commit }, { email, password }) {
      commit('setIsLoggedIn', true);
      commit('setEmail', email);
      commit('setPassword', password);
    },
    logout({ commit }) {
      commit('setIsLoggedIn', false);
      commit('setEmail', '');
      commit('setPassword', '');
    }
  },
  modules: {}
});

import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {
      user:{
        access_token: ''
      }
    },
  },
  mutations: {
    updateUser(state, newUser) { 
      state.user = newUser;
    },
  },
  actions: {
    updateUser({ commit }, newUser) { 
      commit('updateUser', newUser); 
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
});

export default store;

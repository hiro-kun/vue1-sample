import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    msg: 'Hello Vuex Store.',
    count: 'testdesu',
  },
  getters: {
    count() {
      return store.state.count;
    },
  },
  mutations: {
    updateMsg(state, newMsg) {
      state.msg = newMsg;
    },
  },
  actions: {
    apicall(context) {
      console.log("api-call");
    },
  }

});

export default store;

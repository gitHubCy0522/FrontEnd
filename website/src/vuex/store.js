import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state=sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
  count:0
}

const actions = {
  getUserName(context,n){
    context.commit('getUser',n);
  }
}

const mutations = {
  getUser(state,n){
      this.state.count =n

  }
}

const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// Vue.use( axios);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      this.state.token = token;
    }
  },
  actions: {
    // Could Login but how to be permission to change with other page
    // 
    login({ commit }, data) {
      return axios
        .post("http://localhost:3000/auth/login", {
          email: data.email,
          password: data.pass
        })
        .then(result => {
          commit("setToken", result.data.access_token);
          localStorage.setItem("token", result.data.access_token);
          this.token = localStorage.getItem(result.data.access_token);
          alert("Login ok!");
          alert("Token is: "+ this.state.token);
        })
    },
    check(state, email) { //if exist email, return false
      return axios
      .get("http://localhost:3000/auth/")
      .then(
        result => {
          let item =  result.data.find(user => {
            return email === user.email;
        })
        return item; //Promise js
      })
       //? how to return false for actions check?
        // check is always is empty.
    },
    register({ commit }, data) {
      axios
        .post("http://localhost:3000/auth/register", {
          email: data.email,
          password: data.pass
        })
        .then(result => {
          commit("setToken", result.data.access_token);
          alert("register ok");
        })
      }
    }
});

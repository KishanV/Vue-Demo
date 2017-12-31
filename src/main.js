// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './Login.vue'
import Singup from './Singup.vue'

Vue.config.productionTip = false;

var main = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

var getMain = function() {
  return main.$children[0]
}
Login.methods.getMain = getMain;
Singup.methods.getMain = getMain;

var login = new Vue({
  el: '#login',
  template: '<Login/>',
  components: { Login }
});

var singup = new Vue({
  el: '#singUp',
  template: '<Singup/>',
  components: { Singup }
});

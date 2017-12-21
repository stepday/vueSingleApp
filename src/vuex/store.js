import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	isLogin:false,//是否登录系统
	count:1
};

//状态改变
const mutations = {
	setName(state,_isLogin){
		state.isLogin = _isLogin;
	}
};

//外部可以引用
export default new Vuex.Store({
    state,
    mutations
});
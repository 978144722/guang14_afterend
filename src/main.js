import Vue from 'vue';
import AppComponent from './component/App.vue';
new Vue({
    el:"#app",
    render:function(createElement){
        return createElement(AppComponent);
    }
})
import Vue from '../node_modules/vue/dist/vue.js';
import App from 'local_vue/components/App.vue';

export const init = (selector) => {

    new Vue({
        el: '#'+selector,
        template:
        `
            <App />
        `,
        components:{
            App
        }
    });
};

export default {
    init
};

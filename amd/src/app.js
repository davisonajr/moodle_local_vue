import Vue from '../node_modules/vue/dist/vue.js';
import App from 'local_vue/components/App';

export const init = (selector) => {

    new Vue({
        el: '#'+selector,
        components:{
            App
        },
        template:
        `
            <App />
        `
    });
};

export default {
    init
};

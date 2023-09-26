import Vue from 'local_vue/Vue';
import App from 'local_vue/components/App.vue';

export const init = (selector) => {

    new Vue({
        el: selector,
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

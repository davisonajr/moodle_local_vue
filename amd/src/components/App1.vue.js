import Page from 'local_vue/components/Page.vue';

let component = 'App1';

export default {
    name: component,
    template: `#${component}-template`,
    data() {
        return {
            page: 1,
        };
    },
    components: {
        Page
    }
};
import Page from 'local_vue/components/Page.vue';

let component = 'App2';

export default {
    name: component,
    template: `#${component}-template`,
    data() {
        return {
            page: 2,
        };
    },
    components: {
        Page
    }
};
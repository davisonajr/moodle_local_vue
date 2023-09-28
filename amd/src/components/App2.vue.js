import Page from 'local_vue/components/Page.vue';

export default {
    name: 'App2',
    template:
    `
        <div class="d-block">
            <h1> Página 2 </h1>
            <Page page='2'/>
        </div>
    `,
    components: {
        Page
    }
};
import Page from 'local_vue/components/Page.vue';

export default {
    name: 'App1',
    template:
    `
        <div class="d-block">
            <h1> Página 1 </h1>
            <Page page='1'/>
        </div>
    `,
    components: {
        Page
    }
};
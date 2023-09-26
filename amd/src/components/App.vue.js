import HelloWorld from 'local_vue/components/HelloWorld.vue';

export default {
    name: 'App',
    template:
    `
        <div class="d-flex justify-content-center">
            <HelloWorld />
        </div>
    `,
    components: {
        HelloWorld
    }
};
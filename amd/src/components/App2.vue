<template>
    <div class="d-flex justify-content-center">
        <div class="d-block">
            <h1> Página 2 </h1>
            <Page :page='page' />
        </div>
    </div>
</template>

<script>
import Page from 'local_vue/components/Page.vue';

export default {
    name: 'App2',
    data() {
        return {
            page: 2,
        };
    },
    components: {
        Page
    }
};
</script>
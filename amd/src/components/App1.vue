<template>
    <div class="d-flex justify-content-center">
        <div class="d-block">
            <h1> Página 1 </h1>
            <Page :page='page' />
        </div>
    </div>
</template>

<script>
import Page from 'local_vue/components/Page.vue';

export default {
    name: 'App1',
    data() {
        return {
            page: 1,
        };
    },
    components: {
        Page
    }
};
</script>
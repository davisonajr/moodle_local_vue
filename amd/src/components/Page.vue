<template>
    <div class="d-flex justify-content-center">
        <h1>{{ text }} {{ page }}</h1>
    </div>
</template>

<script>
import * as Str from 'core/str';

export default {
    name: 'Page',
    data() {
        return {
            text: ''
        };
    },
    props: {
        page: Number
    },
    beforeCreate() {

        Str.get_string('using', 'local_vue')
            .then((string) => {
                this.text = string;
            });
    }
};
</script>
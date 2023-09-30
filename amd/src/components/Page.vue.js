import * as Str from 'core/str';

let component = 'Page';

export default {
    name: component,
    template: `#${component}-template`,
    data() {
        return {
            text: ''
        };
    },
    props: {
        page: Number
    },
    beforeCreate() {

        Str.get_string('using','local_vue')
        .then((string) => {
            this.text = string;
        });
    }
};
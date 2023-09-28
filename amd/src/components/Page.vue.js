import * as Str from 'core/str';

export default{
    name: 'HelloWorld',
    template:
    `
        <div class="d-flex justify-content-center">
            <h1>{{ text }} {{ page }}</h1>
        </div>
    `,
    data() {
        return {
            text: ''
        };
    },
    props: [
        'page'
    ],
    beforeCreate(props) {
        Str.get_string('using','local_vue')
        .then((string) => {
            this.text = string;
        });

        return true;
    }

};
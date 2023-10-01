# Default local plugin to Run Vue in Moodle

This plugin is an example on how to use Vue to deal with front-end in Moodle plugins.

It uses Vue 3.3.4 version and build files using Gulp to compile .vue files and Moodle _Gruntfile.js_ properties to compile JS AMD, standard of Moodle.

The app runs with the `/amd/build/app.min.js` file and the Vue components are declared in `/amd/src/components/`, 

More information on how to declare components of Vue you can find in [components-registration](https://br.vuejs.org/v2/guide/components-registration).

## Instalation

Before you install npm dependencies, it is necessary to install gulp-cli and grunt-cli globaly

```sh
npm install -g gulp-cli grunt-cli
``` 

Then, you run `npm install` on the root of plugin.

You maybe wants also to have Vue and Vue-router as AMD module compiled in an separate plugin. Then you should install the plugin https://github.com/davisonajr/moodle_tool_vue in `admin/tool/vue` folder. This example uses this Tool plugin to run Vue and Vue-router.

## Compiling .vue files and building AMD modules

> You find an example of implementation in local plugin at https://github.com/davisonajr/moodle_tool_vue.

Create your single-file components (SFC) in the `amd/src/components`.

To compile .vue files and build AMD modules, run at the plugin root:

```sh
gulp vue
```

- this compiles .vue files in `amd/src/components/` as `*.vue.js` files at the same folder and build AMD modules ad `amd/build/components` as `*.vue.min.js` files.

## Watching changes during development

You can also watch for saved changes to compile and build files using the command

```sh
gulp watch
```

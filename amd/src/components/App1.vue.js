define(["exports", "local_vue/components/Page.vue"], function (_exports, _Page) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Page = _interopRequireDefault(_Page);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  var _default = _exports.default = {
    template: "<div class=\"d-flex justify-content-center\"> <div class=\"d-block\"> <h1> Página 1 </h1> <Page :page='page' /> </div> </div>",
    name: 'App1',
    data() {
      return {
        page: 1
      };
    },
    components: {
      Page: _Page.default
    }
  };
});
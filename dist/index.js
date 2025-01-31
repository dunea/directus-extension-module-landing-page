import { defineModule } from '@directus/extensions-sdk';
import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, createTextVNode } from 'vue';

var _sfc_main = defineComponent({});

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_private_view = resolveComponent("private-view");
  return openBlock(), createBlock(_component_private_view, { title: "My Custom Module" }, {
    default: withCtx(() => [
      createTextVNode("Content goes here....")
    ]),
    _: 1
    /* STABLE */
  });
}
var ModuleComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "module.vue"]]);

var index = defineModule({
  id: "custom",
  name: "Custom",
  icon: "switch_access",
  routes: [
    {
      path: "",
      component: ModuleComponent
    }
  ]
});

export { index as default };

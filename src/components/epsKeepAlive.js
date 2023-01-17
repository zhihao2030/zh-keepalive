import { default as MyKeepAlive } from '/@/views/myKeepAlive';
export default defineComponent({
  name: 'epsKeepAlive',
  props: {
    is: {
      type: [String, Object],
    },
    keepAlive: Object,
    componentKey: [Number, String, Symbol],
    transition: Object,
  },
  setup(props, { attrs }) {
    const componentIs = ref(undefined);
    const key = ref(props.componentKey);
    const _attrs = ref(attrs);
    watch(
      () => props.is,
      async (is) => {
        if (is) {
          componentIs.value = is;
          key.value = props.componentKey;
          _attrs.value = attrs;
        }
      },
      { immediate: true },
    );

    return () => {
      const components = [];
      components.push(
        h(componentIs.value || 'div', {
          key: key.value,
          ..._attrs.value,
        }),
      );
      if (props.keepAlive) {
        const index = components.length - 1;
        components.push(h(MyKeepAlive, props.keepAlive, [components[index]]));
      }
      return components[components.length - 1];
    };
  },
});
/*
* setup
* 返回一个函数，该函数将会作为组件的 render 函数：
const Comp = { setup() { // setup 函数可以返回一个函数，该函数作为组件的渲染函数 return () => { return { type: ‘div’, children: ‘hello’ } } } }

返回一个对象，该对象中包含的数据将会暴露给模板使用：
const Comp = { setup() { const count = ref(0) // 返回一个对象，对象中的数据将暴露给模板使用 return { count } },

render() { // 通过 this 可以访问 setup 暴露出来的响应式数据 return { type: ‘div’, children: count is: ${this.count} } } }
*  */

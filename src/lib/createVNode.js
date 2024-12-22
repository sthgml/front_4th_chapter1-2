export function createVNode(type, props, ...children) {
  return {
    type,
    props,
    children: children.flat(Infinity).filter((child) => {
      if (child == null || child === false) return false;
      return true;
    }),
  };
}

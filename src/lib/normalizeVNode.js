export function normalizeVNode(vNode) {
  if (vNode == null || typeof vNode === "boolean") {
    return "";
  }

  if (typeof vNode === "string") {
    return vNode;
  }

  if (typeof vNode.type === "function") {
    if (vNode.children?.length > 0) {
      vNode.children = vNode.children
        .filter((child) => {
          return child != null && typeof child !== "boolean";
        })
        .map((child) => {
          return normalizeVNode(child);
        });
    }
    return normalizeVNode(vNode.type());
  }

  if (typeof vNode === "object") {
    vNode.children = vNode.children
      .filter((child) => {
        return child != null && typeof child !== "boolean";
      })
      .map((child) => {
        return normalizeVNode(child);
      });
    return vNode;
  }

  return String(vNode);
}

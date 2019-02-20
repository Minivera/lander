export default (children = [], node) => children.findIndex(vnode => JSON.stringify(vnode) === JSON.stringify(node));

export default function(type, node, meta) {
    return {
        type,
        node,
        ...meta,
    };
}

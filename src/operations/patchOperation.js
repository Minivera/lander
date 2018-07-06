export function patchOperationFactory(type, node, meta) {
    return {
        type,
        node,
        ...meta,
    };
}

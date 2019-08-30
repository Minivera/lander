export default tag => {
    if (typeof tag !== 'string') {
        return {};
    }
    // Always create a div by default
    const selector = {
        tagname: 'div',
        classes: [],
    };
    tag.split('.').forEach((string, index) => {
        if (string.indexOf('#') >= 0) {
            const split = string.split('#');
            if (index === 0) {
                [selector.tagname, selector.id] = split;
                return;
            }
            const [domClass, id] = split;
            selector.id = id;
            if (selector.classes) {
                selector.classes.push(domClass);
            }
            return;
        }
        if (index === 0) {
            selector.tagname = string;
            return;
        }

        if (selector.classes) {
            selector.classes.push(string);
        }
    });
    return selector;
};

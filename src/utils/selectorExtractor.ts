export interface ExtractedSelector {
    tagname?: string;
    classes?: string[];
    id?: string;
}

export default (tag: Lander.TagTypes): ExtractedSelector => {
    if (typeof tag !== 'string') {
        return {};
    }
    // Always create a div by default
    const selector: ExtractedSelector = {
        tagname: 'div',
        classes: [],
    };
    tag.split('.').forEach((string, index) => {
        if (string.indexOf('#') >= 0) {
            const split = string.split('#');
            if (index === 0) {
                selector.tagname = split[0];
                selector.id = split[1];
                return;
            }
            selector.id = split[1];
            selector.classes && selector.classes.push(split[0]);
            return;
        }
        if (index === 0) {
            selector.tagname = string;
            return;
        }
        selector.classes && selector.classes.push(string);
    });
    return selector;
};

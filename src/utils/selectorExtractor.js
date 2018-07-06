export default (tag) => {
    if (typeof tag !== 'string')
    {
        return {};
    }
    //Always crate a div by default
    let tagname = 'div';
    const classes = [];
    let domId = null;
    tag.split('.').forEach((string, index) => {
        if (string.indexOf('#') >= 0)
        {
            const split = string.split('#');
            if (index === 0)
            {
                [tagname, domId] = split;
                return;
            }
            domId = split[1]; /*eslint prefer-destructuring: 0*/
            classes.push(split[0]);
            return;
        }
        if (index === 0)
        {
            tagname = string;
            return;
        }
        classes.push(string);
    });
    return {
        tagname,
        classes,
        domId,
    };
};
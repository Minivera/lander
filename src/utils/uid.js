/** Used to generate unique IDs. */
let idCounter = 0;

const uniqueId = (prefix = '$', sufix = '$') => {
    const id = ++idCounter;
    return `${prefix}${id.toString(36)}${sufix}`;
};

export default uniqueId;

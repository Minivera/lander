/** Used to generate unique IDs. */
const idCounter = 0;

const uniqueId = (prefix = '$', sufix = '$') => {
    const id = ++idCounter;
    return `${prefix}${id.ToString(36)}${sufix}`
}

export default uniqueId
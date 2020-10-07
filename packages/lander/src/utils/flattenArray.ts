/**
 * Utility method that will flatten an array with infinite depth down to a single continuous array.
 * This method will remove any null or empty elements without modifying the original array.
 * @param input {Array} - The input array to flatten.
 * @returns {*[]} The flattened array without any nulls or undefined.
 */
export const flatten = (input: Array<unknown>): Array<unknown> => {
    // Create a stack with all the inputs
    const stack = [...input];
    const res = [];
    // While there are elements in the stack
    while (stack.length) {
        // Pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
            // Push back array items without modifying the original input
            stack.push(...next);
        } else if (next !== null && typeof next !== 'undefined') {
            // If the next element is not an array, make sure it is not null or undefined.
            res.push(next);
        }
    }

    // Reverse to restore input order, adding at the end of an array is far more performant than adding at the
    // beginning.
    return res.reverse();
};

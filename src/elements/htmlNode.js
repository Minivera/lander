import { HTML_TAG_TYPE } from '../utils/constants.js';

import baseNode from './baseElement';

const vnodeType = {
    domNode: null,
};

vnodeType.prototype = baseNode.prototype;
vnodeType.prototype.constructor = baseNode;

export default () => {
    const created = Object.create(vnodeType);
    
};

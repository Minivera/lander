import { UNKNOWN_TAG_TYPE } from '../utils/constants';
import uniqueId from '../utils/uid';

export default {
    id: null,
    type: UNKNOWN_TAG_TYPE,
    attributes: [],
    children: [],
    parent: null,
    nextSibling: null,
    prevSibling: null,
    
    create(tree, parent, creator = () => {}) {
        this.id = uniqueId();
        const { attributes, children } = creator();
        
        this.attributes = attributes;
        this.children = children;
        
        tree.position(this, parent);
    }
    
    get parentNode() {
        
    }
};

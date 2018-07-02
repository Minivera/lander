import domUtils from 'domUtils';
import {
    UNKNOWN_TAG_TYPE,
    HTML_TAG_TYPE,
    FUNC_TAG_TYPE,
    TEXT_TAG_TYPE,
} from '../utils/constants';

export default {
    mount(root, virtualTree) {
        if (root.hasChildNodes())
        {
            return this.mountToDom(root, virtualTree);
        }
        return this.mountToNew(root, virtualTree);
    },

    mountToDom(root, vTree) {
        //TODO
    },

    mountToNew(domNode, vNode) {
        let madeNode = domNode;
        if (vNode.type === HTML_TAG_TYPE)
        {
            madeNode = vNode.createTag();
            domNode.appendChild(madeNode);
        }
        else if (vNode.type === TEXT_TAG_TYPE)
        {
            domNode.appendChild(vNode.createText());
        }
        vNode.mount(madeNode);
        vNode.children.forEach(child => this.mountToNew(madeNode, child));
    },

    compareVNodes(vnode1, vnode2) {
        if (JSON.stringify(vnode1.attributes) !== JSON.stringify(vnode2.attributes))
        {
            return false;
        }
        if (vnode1.children.length !== vnode2.children.length)
        {
            return false;
        }
        if (vnode1.type === vnode2)
        {
            switch (vnode1.type)
            {
                //Compare the types of vnodes for equality
                case UNKNOWN_TAG_TYPE:
                    //Unknown nodes are not comparable
                    return false;
                case HTML_TAG_TYPE:
                    //HTML vnodes are equal if their tags are the same
                    return vnode1.tagname === vnode2.tagname;
                case FUNC_TAG_TYPE:
                    //Func vnodes are never equal
                    return false;
                case TEXT_TAG_TYPE:
                    //Text vnodes are equal if their text is equal
                    return vnode1.text === vnode2.text;
                default:
                    return false;
            }
        }
        return false;
    },

    diff(domNode, oldNode, newNode) {
        let madeNode;
        //If the old node exists and they are not similar
        if (!this.compareVNodes(oldNode, newNode))
        {
            //Update the old tree with the new tree's data
            oldNode.update({
                attributes: newNode.attributes,
                children: newNode.children,
            });
            madeNode = oldNode;
        }
        else
        {
            //Otherwise, we may simply want to create a new node and replace the old node
            newNode.create({
                attributes: newNode.attributes,
                children: newNode.children,
                nodeId: oldNode ? oldNode.id : undefined,
            });
            madeNode = newNode;
        }
        diffedNode.children = diffedNode.children.map(
            (child, index) => this.diff(
                diffedNode.type === HTML_TAG_TYPE ? domNode.childNodes[index] : domNode,
                oldNode && oldNode.children[index],
                child,
            ),
        );
        /*if (created)
        {
            oldNode.remove();
            //Also remove it from the dom if a HTML tag
            if (oldNode.type === HTML_TAG_TYPE)
            {
                domNode.parentNode.removeChild(oldNode.domNode);
            }
            diffedNode.mount(domNode);
            //Replace that node in the tree
            if (diffedNode.type === HTML_TAG_TYPE)
            {
                domNode.parentNode.appendChild(diffedNode.domNode);
            }
            else if (diffedNode.type === TEXT_TAG_TYPE)
            {
                domNode.parentNode.appendChild(diffedNode.createText());
            }
        }*/
    },
};

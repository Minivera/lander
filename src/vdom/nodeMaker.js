export default {
    $window: typeof window !== 'undefined' ? window : {},

    init($window) {
        this.$window = $window;
    },

    createElement(tagname) {
        return this.$window.document.createElement(tagname);
    },

    createTextNode(text) {
        return this.$window.document.createTextNode(text);
    },
};

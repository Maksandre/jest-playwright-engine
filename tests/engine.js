exports.createTagNameEngine = () => ({
  create(root, target) {
    return root.querySelector(target.tagName) === target ? target.tagName : undefined;
  },

  query(root, selector) {
    return root.querySelector(selector);
  },

  queryAll(root, selector) {
    return Array.from(root.querySelectorAll(selector));
  }
});


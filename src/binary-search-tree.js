const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root = null

  constructor() {
    this.root = null
  }
  // public methods
  _createObject(data) {
    return {
      data,
      left: null,
      right: null
    }
  }
  _isObject(data) {
    if (typeof data !== 'object') return false
    const trueKeys = new Set(Object.keys(data))
    
    return trueKeys.has('data') && trueKeys.has('left') && trueKeys.has('right')
  }
  _addElement(node = this.root, data) {
    if (!node) return new Node(data)
    if (node.data === data) return node

    data < node.data
      ? node.left = this._addElement(node.left, data)
      : node.right = this._addElement(node.right, data)
        
    return node
  }

  root() {
    return this.root
  }

  add(data) {
    this.root = this._addElement(this.root, data)
  }

  has(data) {
    
  }

  find(data) {
    
  }

  remove(data) {
    
  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};
const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

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
      right: null,
    }
  }
  _isObject(data) {
    if (typeof data !== 'object') return false
    const trueKeys = new Set(Object.keys(data))

    return trueKeys.has('data') && trueKeys.has('left') && trueKeys.has('right')
  }
  _addElement(node, data) {
    if (!node) return new Node(data)
    if (node.data === data) return node

    data < node.data
      ? (node.left = this._addElement(node.left, data))
      : (node.right = this._addElement(node.right, data))

    return node
  }
  _hasElementInside(node, data) {
    if (!node) return false
    if (node.data === data) return true

    return data < node.data
      ? this._hasElementInside(node.left, data)
      : this._hasElementInside(node.right, data)
  }
  _findElement(node, data) {
    if (!node) return null
    if (node.data === data) return node

    return data < node.data
      ? _findElement(node.left, data)
      : _findElement(node.right, data)
  }

  root() {
    return this.root
  }
  add(data) {
    this.root = this._addElement(this.root, data)
  }

  has(data) {
    return this._hasElementInside(this.root, data)
  }

  find(data) {
    return this._findElement(this.root, data)
  }

  remove(data) {}

  min() {
    if (!this._root) return

    let node = this._root

    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this._root) return

    let node = this._root

    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree,
}

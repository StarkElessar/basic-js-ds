const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  // public methods:
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
      ? this._findElement(node.left, data)
      : this._findElement(node.right, data)
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

  remove(data) {
    this.root = removeNode(this.root, data)

    function removeNode(node, data) {
      if (!node) return null

      if (data < node.data) {
        node.left = removeNode(node.left, data)

        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)

        return node
      } else {
        if (!node.left && !node.right) return null

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }

        node.data = minFromRight.data
        node.right = removeNode(node.right, minFromRight.data)

        return node
      }
    }
  }

  min() {
    if (!this.root) return

    let node = this.root

    while (node.left) {
      node = node.left
    }

    return node.data
  }
  max() {
    if (!this.root) return

    let node = this.root

    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree,
}

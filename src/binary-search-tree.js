const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  ROOT = null
  constructor() {
    this.ROOT = null
  }
  // public methods:
  root() {
    return this.ROOT !== null ? this.ROOT : null
  }
  add(data) {
    this.ROOT = addElement(this.ROOT, data)

    function addElement(node, data) {
      if (!node) return new Node(data)
      if (node.data === data) return node
  
      data < node.data
        ? (node.left = addElement(node.left, data))
        : (node.right = addElement(node.right, data))
  
      return node
    }
  }
  has(data) {
    return searchElementInside(this.ROOT, data)

    function searchElementInside(node, data) {
      if (!node) return false
      if (node.data === data) return true
  
      return data < node.data
        ? searchElementInside(node.left, data)
        : searchElementInside(node.right, data)
    }
  }
  find(data) {
    return findElement(this.ROOT, data)

    function findElement(node, data) {
      if (!node) return null
      if (node.data === data) return node
  
      return data < node.data
        ? findElement(node.left, data)
        : findElement(node.right, data)
    }
  }
  remove(data) {
    this.ROOT = removeNode(this.ROOT, data)

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
    if (!this.ROOT) return

    let node = this.ROOT

    while (node.left) {
      node = node.left
    }

    return node.data
  }
  max() {
    if (!this.ROOT) return

    let node = this.ROOT

    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree,
}

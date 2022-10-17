const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root = null

  constructor() {
    this.root = null
  }

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

  root() {
    return this.root !== null ? this.root : null
  }

  add(data) {
    if (this.root === null) {
      this.root = this._isObject(data) ? data : this._createObject(data)
    } else {
      const value = this._isObject(data) ? data.data : data
      let currentHeadValue = this.root
      let tempValue = null

      while (currentHeadValue !== null) {
        tempValue = currentHeadValue

        if (value > currentHeadValue.data) {
          currentHeadValue = currentHeadValue.right
        } else if (value < currentHeadValue.data) {
          currentHeadValue = currentHeadValue.left
        } else {
          return
        }
      }

      if (value === data) {
        value >= tempValue.data
          ? tempValue.right = this._createObject(data)
          : tempValue.left = this._createObject(data)
      } else {
        value >= tempValue.data
          ? tempValue.right = data
          : tempValue.left = data
      }
    }
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
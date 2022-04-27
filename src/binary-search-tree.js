const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/  
class BinarySearchTree {

  constructor() {
      this.firstElement = null;
  }

  root() {
    return this.firstElement;
  }

  add(data) {
    if (this.firstElement == null) {
      this.firstElement = new Node(data);
    }
    else {
      let element = this.firstElement;
        while (true) {
          if (element.data > data) {
            if (element.left != null) {
              element = element.left;
            } else { 
              element.left = new Node(data);
              break;
            }
          } else {
            if (element.right != null) {
              element = element.right;
            } else { 
              element.right = new Node(data);
              break;
          }
        }
      }
    }
  }

  has(data) {
    let element = this.firstElement;
    while (true) {
      console.log(element.data);
      if (element.data == data) return true;
      element = element.data > data ? element.left : element.right; 
      if (element == null) return false;
    }
  }

  find(data) {
    let element = this.firstElement;
    while (true) {
      if (element.data == data) return { data: element.data };
      element = element.data > data ? element.left : element.right; 
      if (element == null) return null;
    }
  }

  remove(data) {
    let element = this.firstElement;
    let prevElement = null;
    while (true) {
      if (element.data == data) {
        if (element == this.firstElement) {
          let right = element.right;
          this.firstElement = element.left;
          this.firstElement.right = right;
          break;
        } else {
          console.log('prevElement', prevElement);
          if (prevElement.left != null && prevElement.left.data == data) prevElement.left = element.left;
          else prevElement.right = element.right;
          break;
        }
      }
      prevElement = element;
      element = element.data > data ? element.left : element.right; 
      if (element == null) break;
    }
  }

  min() {
    let element = this.firstElement;
    while (element.left != null) element = element.left;
    return element.data;
  }

  max() {
    let element = this.firstElement;
    while (element.right != null) element = element.right;
    return element.data;
  }

}

module.exports = {
  BinarySearchTree
};
'use strict';

function LinkedList() {
  this.length = 0;
  this.head = null;
}

LinkedList.prototype = {

  push: function (val) {
    let node = {
      value: val,
      next: null
    };

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  },

  remove: function (val) {

  }

}


var sll = new LinkedList();

console.log(sll);
console.log(sll.length);

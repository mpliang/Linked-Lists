'use strict';

export function LinkedList() {
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
    let current = this.head;

    //Value you want to remove is at the head, replace with next node
    if (current.value === val) this.head = current.next;
    //Value you want to remove is in the middle
    else {
      let previous = current;
      while (current.next) {
        if (current.value === val) {
          previous.next = current.next;
          break;
        }
        previous = current;
        current = current.next;
        // console.log(previous, current);
      }
      //Value you want to replace is at the end, remove and set next value to null
      if (current.value === val) previous.next = null;
    }
    this.length--;
    // console.log(this.head);
  },

  detectLoop: function () {
    var slowPointer = this.head,
      fastPointer = this.head;

    while (slowPointer && fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if (slowPointer == fastPointer) {
        return true;
      }
    }
    return false;
  }

}

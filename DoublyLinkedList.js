'use strict';

export function DoublyLinkedList() {
  this.length = 0;
  this.head = null;
}

DoublyLinkedList.prototype = {
  push: function (val) {
    var head = this.head,
      current = head,
      previous = head;
    if (!head) {
      this.head = {
        value: val,
        previous: null,
        next: null
      };
    } else {
      while (current && current.next) {
        previous = current;
        current = current.next;
      }
      current.next = {
        value: val,
        previous: current,
        next: null
      }
    }
    this.length++;
  }
}

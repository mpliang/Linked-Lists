'use strict';

import {expect} from 'chai';
import {DoublyLinkedList} from '../DoublyLinkedList';


describe('Doubly Linked List', () => {


  describe('Constructor', () => {
    let x = new DoublyLinkedList();
    it('Should should create a new linked list with length of 0', () => {
      expect(x).to.have.ownProperty('length');
      expect(x).to.have.lengthOf(0);
    });
    it('Should have no value at head', () => {
      expect(x).to.have.property('head');
      expect(x.head).to.equal(null);
    });
  });


  describe('Add', () => {
    let x = new DoublyLinkedList();
    it('Should add new values to list', () => {
      x.push(1);
      x.push(2);
      x.push(3);
      expect(x).to.have.lengthOf(3);
      expect(x.head.value).to.equal(1);
      expect(x.head.next.value).to.equal(2);
      expect(x.head.next.next.value).to.equal(3);
    });
  });

  describe('Remove', () => {

  });


});

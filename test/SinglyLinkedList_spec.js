'use strict';

import {expect} from 'chai';
import {LinkedList} from '../SinglyLinkedList';


describe('Singly Linked List', () => {


  describe('Constructor', () => {
    let x = new LinkedList();
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
    let x = new LinkedList();
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

  // describe('Remove', () => {
  //   let x = new LinkedList();
  //   x.push(1);
  //   x.push(2);
  //   x.push(3);
  //   it('Should remove values from list', () => {
  //     x.remove(1);
  //     expect(x).to.have.lengthOf(2);
  //     expect(x.head.value).to.equal(2);
  //     expect(x.head.next.value).to.equal(3);
  //     x.push(4);
  //     x.remove(3);
  //     // console.log(x.head);
  //     expect(x).to.have.lengthOf(2);
  //     expect(x.head.value).to.equal(2);
  //     expect(x.head.next.value).to.equal(4);
  //   });
  // });

  describe('Loop detection', () => {
    let x = new LinkedList();
    x.push(1);
    x.push(2);
    x.push(3);
    x.push(4);
    x.push(5);
    it('Should be false', () => {
      expect(x.detectLoop()).to.be.false;

    })
    it('Should be true', () => {
      x.head.next.next.next.next.next = x.head.next.next;
      expect(x.detectLoop()).to.be.true;

    })
  })

});

import { Node } from "./node";

class LinkedList {
  constructor() {
    this.head = null;
  }

  // adds a new node containing value to the end of the list.
  append(value) {
    // Create a new node
    let newNode = new Node(value);
    // If the list is empty (linked list head is null) then we make this the first node
    if (!this.head) {
      this.head = newNode;
      // Done
      return;
    }

    // If the list is not empty
    // Traverse through the list to the last node
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    // We are now at the end of the list
    // Add the new node
    current.nextNode = newNode;
  }

  // adds a new node containing value to the start of the list.
  prepend(value) {
    // If the list is empty (linked list head is null) then we make this the first node
    if (!this.head) {
      this.append(value);
      return;
    }

    // Else - if the list is not empty we create a new node
    let newNode = new Node(value);
    // And do a switcheroo
    newNode.nextNode = this.head; // newNode and head point to the original first node
    this.head = newNode; // head now points to newNode: head -> newNode -> former head node
  }
}

export { LinkedList };

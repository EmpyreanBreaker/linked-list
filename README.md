# Linked Lists

A JavaScript implementation of a linked list data structure based on [The Odin Project's Linked Lists lesson](https://www.theodinproject.com/lessons/javascript-linked-lists).

## Introduction

In Computer Science, one of the most basic and fundamental data structures is the **linked list**, which functions similarly to an array. The principal benefit of a linked list over a conventional array is that the list elements can easily be inserted or removed without reallocation of any other elements.

While JavaScript arrays aren't limited to a certain size and support trivial insertion and deletion, linked lists provide a solid foundation for understanding more complex data structures like graphs and binary trees.

## Structure of a Linked List

A linked list is a linear collection of data elements called **nodes** that "point" to the next node by means of a pointer.

- Each **node** holds a single element of data and a link (pointer) to the next node
- The **head node** is the first node in the list
- The **tail node** is the last node in the list
- The final node's pointer is set to `null`

Visual representation:

```
[ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null
```

## Implementation

### Node Class

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
```

A node contains:

- `value`: The data stored in the node
- `nextNode`: Reference to the next node in the list (or `null` if it's the last node)

### LinkedList Class

The LinkedList class manages the collection of nodes with the following methods:

#### Core Methods

1. **`append(value)`** - Adds a new node containing `value` to the end of the list

2. **`prepend(value)`** - Adds a new node containing `value` to the start of the list

3. **`size()`** - Returns the total number of nodes in the list

4. **`head()`** - Returns the value of the first node in the list
   - Returns `undefined` if the list is empty

5. **`tail()`** - Returns the value of the final node in the list
   - Returns `undefined` if the list is empty

6. **`at(index)`** - Returns the value of the node at the given index
   - Returns `undefined` if there's no node at the given index or if the list is empty
   - Returns `undefined` for negative indices

7. **`pop()`** - Removes the head node from the list and returns its value
   - Returns `undefined` if used on an empty list

8. **`contains(value)`** - Returns `true` if the passed in value is in the list
   - Returns `false` otherwise

9. **`findIndex(value)`** - Returns the index of the node containing the given value
   - Returns `-1` if the value can't be found in the list
   - Returns the index of the first occurrence if more than one node has the matching value

10. **`toString()`** - Represents the LinkedList object as a string for preview in the console
    - Returns an empty string if the list is empty
    - Format: `( value ) -> ( value ) -> ( value ) -> null`

#### Extra Credit Methods

1. **`insertAt(index, ...values)`** - Inserts new nodes with the given values at the given index

   ```javascript
   const list = new LinkedList();
   list.append(1);
   list.append(2);
   list.append(3);

   list.insertAt(1, 10, 11);
   console.log(list.toString());
   // Output: ( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null
   ```

   - Throws `RangeError` if index is out of bounds (below 0 or above the list's size)
   - Throws `RangeError` if index is not an integer

2. **`removeAt(index)`** - Removes the node at the given index
   - Throws `RangeError` if the given index is out of bounds (below 0 or greater than or equal to the list's size)

## Usage

```javascript
import { LinkedList } from "./linked-list.js";

// Create a new linked list
const list = new LinkedList();

// Add elements
list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("bird");

// Check the list
console.log(list.toString());
// Output: ( bird ) -> ( dog ) -> ( cat ) -> ( parrot ) -> null

// Access elements
console.log(list.head()); // "bird"
console.log(list.tail()); // "parrot"
console.log(list.at(2)); // "cat"
console.log(list.size()); // 4

// Search operations
console.log(list.contains("cat")); // true
console.log(list.findIndex("dog")); // 1

// Modify the list
list.pop(); // Removes "bird", returns "bird"
list.insertAt(1, "fish", "hamster");
list.removeAt(2);

console.log(list.toString());
// Output: ( dog ) -> ( fish ) -> ( cat ) -> ( parrot ) -> null
```

## Testing

The project includes comprehensive tests using Jest:

```bash
npm test
```

Tests cover:

- Node creation and chaining
- All LinkedList methods (append, prepend, head, tail, at, contains, findIndex, pop, size, toString)
- insertAt functionality with various scenarios
- removeAt functionality with various scenarios
- Error handling and edge cases
- Integration tests for complex operations

**Test Results:** 71 tests passing ✅

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Code

To run the linked list implementation with ES6 modules in Node:

```bash
node linked-list.js
```

Make sure you're using Node v22 or later for ES6 module support.

## References

- [The Odin Project - Linked Lists](https://www.theodinproject.com/lessons/javascript-linked-lists)
- [Linked Lists in Plain English (YouTube)](https://www.youtube.com/watch?v=oiW79L8VYXk)
- [What's a Linked List, Anyway? (Dev.to)](https://dev.to/vaidehijoshi/whats-a-linked-list-anyway)
- [CMU Lecture on Linked Lists](https://web.archive.org/web/20200217010131/http://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html)

## File Structure

```
.
├── node.js                  # Node class definition
├── node.test.js            # Node tests
├── linked-list.js          # LinkedList class implementation
├── linked-list.test.js     # LinkedList tests
├── package.json            # Project dependencies and scripts
├── babel.config.js         # Babel configuration
└── README.md              # This file
```

## License

This project is part of The Odin Project curriculum.

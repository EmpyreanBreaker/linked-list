import { LinkedList } from "./linked-list";

describe("LinkedList", () => {
  describe("append", () => {
    test("adds a value to an empty list", () => {
      const list = new LinkedList();
      list.append(5);
      expect(list.head()).toBe(5);
    });

    test("adds multiple values to the list", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      list.append(15);
      expect(list.at(0)).toBe(5);
      expect(list.at(1)).toBe(10);
      expect(list.at(2)).toBe(15);
    });

    test("appends to the end of the list", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.tail()).toBe(3);
    });
  });

  describe("prepend", () => {
    test("adds a value to an empty list", () => {
      const list = new LinkedList();
      list.prepend(5);
      expect(list.head()).toBe(5);
    });

    test("adds a value to the start of the list", () => {
      const list = new LinkedList();
      list.append(10);
      list.prepend(5);
      expect(list.head()).toBe(5);
      expect(list.at(1)).toBe(10);
    });

    test("prepends multiple values", () => {
      const list = new LinkedList();
      list.append(3);
      list.prepend(2);
      list.prepend(1);
      expect(list.at(0)).toBe(1);
      expect(list.at(1)).toBe(2);
      expect(list.at(2)).toBe(3);
    });
  });

  describe("head", () => {
    test("returns the value of the first node", () => {
      const list = new LinkedList();
      list.append(5);
      expect(list.head()).toBe(5);
    });

    test("returns undefined for an empty list", () => {
      const list = new LinkedList();
      expect(list.head()).toBe(undefined);
    });

    test("returns the first value even if multiple values exist", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.head()).toBe(1);
    });
  });

  describe("tail", () => {
    test("returns the value of the last node", () => {
      const list = new LinkedList();
      list.append(5);
      expect(list.tail()).toBe(5);
    });

    test("returns undefined for an empty list", () => {
      const list = new LinkedList();
      expect(list.tail()).toBe(undefined);
    });

    test("returns the last value when multiple values exist", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.tail()).toBe(3);
    });
  });

  describe("at", () => {
    test("returns the value at index 0", () => {
      const list = new LinkedList();
      list.append(5);
      expect(list.at(0)).toBe(5);
    });

    test("returns the value at a specific index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.at(1)).toBe(2);
      expect(list.at(2)).toBe(3);
    });

    test("returns undefined for an out of bounds index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      expect(list.at(5)).toBe(undefined);
    });

    test("returns undefined for a negative index", () => {
      const list = new LinkedList();
      list.append(1);
      expect(list.at(-1)).toBe(undefined);
    });

    test("returns undefined for an empty list", () => {
      const list = new LinkedList();
      expect(list.at(0)).toBe(undefined);
    });
  });

  describe("contains", () => {
    test("returns true if value is in the list", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      list.append(15);
      expect(list.contains(10)).toBe(true);
    });

    test("returns false if value is not in the list", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      expect(list.contains(20)).toBe(false);
    });

    test("returns false for an empty list", () => {
      const list = new LinkedList();
      expect(list.contains(5)).toBe(false);
    });

    test("returns true for the first element", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      expect(list.contains(5)).toBe(true);
    });

    test("returns true for the last element", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      expect(list.contains(10)).toBe(true);
    });

    test("works with different data types", () => {
      const list = new LinkedList();
      list.append("hello");
      list.append(42);
      list.append(null);
      expect(list.contains("hello")).toBe(true);
      expect(list.contains(42)).toBe(true);
      expect(list.contains(null)).toBe(true);
    });
  });

  describe("findIndex", () => {
    test("returns the index of a value in the list", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      list.append(15);
      expect(list.findIndex(10)).toBe(1);
    });

    test("returns 0 for the first element", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      expect(list.findIndex(5)).toBe(0);
    });

    test("returns the index of the last element", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      list.append(15);
      expect(list.findIndex(15)).toBe(2);
    });

    test("returns -1 if value is not found", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      expect(list.findIndex(20)).toBe(-1);
    });

    test("returns -1 for an empty list", () => {
      const list = new LinkedList();
      expect(list.findIndex(5)).toBe(-1);
    });

    test("returns the index of the first occurrence of a duplicate value", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      list.append(5);
      expect(list.findIndex(5)).toBe(0);
    });
  });

  describe("pop", () => {
    test("removes and returns the first node value", () => {
      const list = new LinkedList();
      list.append(5);
      list.append(10);
      const popped = list.pop();
      expect(popped).toBe(5);
      expect(list.head()).toBe(10);
    });

    test("removes the head node from the list", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.pop();
      expect(list.size()).toBe(2);
      expect(list.at(0)).toBe(2);
    });

    test("returns undefined for an empty list", () => {
      const list = new LinkedList();
      expect(list.pop()).toBe(undefined);
    });

    test("can pop all elements from the list", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.pop()).toBe(1);
      expect(list.pop()).toBe(2);
      expect(list.pop()).toBe(3);
      expect(list.pop()).toBe(undefined);
    });

    test("updates the head correctly after pop", () => {
      const list = new LinkedList();
      list.append(5);
      list.pop();
      expect(list.head()).toBe(undefined);
    });
  });

  describe("size", () => {
    test("returns 0 for an empty list", () => {
      const list = new LinkedList();
      expect(list.size()).toBe(0);
    });

    test("returns the correct size after appending", () => {
      const list = new LinkedList();
      list.append(1);
      expect(list.size()).toBe(1);
      list.append(2);
      expect(list.size()).toBe(2);
      list.append(3);
      expect(list.size()).toBe(3);
    });

    test("returns the correct size after prepending", () => {
      const list = new LinkedList();
      list.prepend(1);
      expect(list.size()).toBe(1);
      list.prepend(2);
      expect(list.size()).toBe(2);
    });

    test("decreases size after popping", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.size()).toBe(3);
      list.pop();
      expect(list.size()).toBe(2);
    });
  });

  describe("insertAt", () => {
    test("inserts a single value at index 0", () => {
      const list = new LinkedList();
      list.append(2);
      list.append(3);
      list.insertAt(0, 1);
      expect(list.at(0)).toBe(1);
      expect(list.at(1)).toBe(2);
      expect(list.at(2)).toBe(3);
      expect(list.size()).toBe(3);
    });

    test("inserts a single value at the middle of the list", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(3);
      list.insertAt(1, 2);
      expect(list.at(0)).toBe(1);
      expect(list.at(1)).toBe(2);
      expect(list.at(2)).toBe(3);
      expect(list.size()).toBe(3);
    });

    test("inserts a single value at the end of the list", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.insertAt(2, 3);
      expect(list.at(0)).toBe(1);
      expect(list.at(1)).toBe(2);
      expect(list.at(2)).toBe(3);
      expect(list.size()).toBe(3);
    });

    test("inserts multiple values at once", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(5);
      list.insertAt(1, 2, 3, 4);
      expect(list.at(0)).toBe(1);
      expect(list.at(1)).toBe(2);
      expect(list.at(2)).toBe(3);
      expect(list.at(3)).toBe(4);
      expect(list.at(4)).toBe(5);
      expect(list.size()).toBe(5);
    });

    test("inserts into an empty list at index 0", () => {
      const list = new LinkedList();
      list.insertAt(0, 5);
      expect(list.head()).toBe(5);
      expect(list.size()).toBe(1);
    });

    test("inserts multiple values into an empty list", () => {
      const list = new LinkedList();
      list.insertAt(0, 1, 2, 3);
      expect(list.at(0)).toBe(1);
      expect(list.at(1)).toBe(2);
      expect(list.at(2)).toBe(3);
      expect(list.size()).toBe(3);
    });

    test("throws RangeError when index is negative", () => {
      const list = new LinkedList();
      list.append(1);
      expect(() => list.insertAt(-1, 5)).toThrow(RangeError);
      expect(() => list.insertAt(-1, 5)).toThrow("Index is Out of Bounds");
    });

    test("throws RangeError when index is greater than list size", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      expect(() => list.insertAt(5, 10)).toThrow(RangeError);
      expect(() => list.insertAt(5, 10)).toThrow("Index is Out of Bounds");
    });

    test("throws RangeError when index is not an integer", () => {
      const list = new LinkedList();
      list.append(1);
      expect(() => list.insertAt(1.5, 5)).toThrow(RangeError);
      expect(() => list.insertAt("1", 5)).toThrow(RangeError);
    });

    test("does nothing when no values are provided", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.insertAt(1);
      expect(list.size()).toBe(2);
      expect(list.at(0)).toBe(1);
      expect(list.at(1)).toBe(2);
    });

    test("maintains list integrity after multiple insertions", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(4);
      list.insertAt(1, 2);
      list.insertAt(2, 3);
      expect(list.toString()).toBe("(1) -> (2) -> (3) -> (4) -> null");
    });
  });

  describe("removeAt", () => {
    test("removes a node at index 0", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.removeAt(0);
      expect(list.head()).toBe(2);
      expect(list.size()).toBe(2);
      expect(list.at(0)).toBe(2);
      expect(list.at(1)).toBe(3);
    });

    test("removes a node at the middle of the list", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.removeAt(1);
      expect(list.at(0)).toBe(1);
      expect(list.at(1)).toBe(3);
      expect(list.size()).toBe(2);
    });

    test("removes a node at the end of the list", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.removeAt(2);
      expect(list.at(0)).toBe(1);
      expect(list.at(1)).toBe(2);
      expect(list.at(2)).toBe(undefined);
      expect(list.size()).toBe(2);
    });

    test("removes the only element in the list", () => {
      const list = new LinkedList();
      list.append(5);
      list.removeAt(0);
      expect(list.head()).toBe(undefined);
      expect(list.size()).toBe(0);
    });

    test("throws RangeError when index is negative", () => {
      const list = new LinkedList();
      list.append(1);
      expect(() => list.removeAt(-1)).toThrow(RangeError);
      expect(() => list.removeAt(-1)).toThrow("Index is Out of Bounds");
    });

    test("throws RangeError when index is greater than or equal to list size", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      expect(() => list.removeAt(2)).toThrow(RangeError);
      expect(() => list.removeAt(5)).toThrow(RangeError);
    });

    test("throws RangeError when removing from an empty list", () => {
      const list = new LinkedList();
      expect(() => list.removeAt(0)).toThrow(RangeError);
    });

    test("maintains list integrity after multiple removals", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
      list.append(5);
      list.removeAt(2);
      expect(list.toString()).toBe("(1) -> (2) -> (4) -> (5) -> null");
      list.removeAt(0);
      expect(list.toString()).toBe("(2) -> (4) -> (5) -> null");
    });

    test("can remove all elements one by one from the end", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.removeAt(2);
      expect(list.size()).toBe(2);
      list.removeAt(1);
      expect(list.size()).toBe(1);
      list.removeAt(0);
      expect(list.size()).toBe(0);
    });
  });

  describe("toString", () => {
    test("returns an empty string for an empty list", () => {
      const list = new LinkedList();
      expect(list.toString()).toBe("");
    });

    test("returns the correct string representation for a single element", () => {
      const list = new LinkedList();
      list.append(5);
      expect(list.toString()).toBe("(5) -> null");
    });

    test("returns the correct string representation for multiple elements", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.toString()).toBe("(1) -> (2) -> (3) -> null");
    });

    test("works with different data types", () => {
      const list = new LinkedList();
      list.append("hello");
      list.append(42);
      expect(list.toString()).toBe("(hello) -> (42) -> null");
    });
  });

  describe("integration tests", () => {
    test("can build a list with append and prepend", () => {
      const list = new LinkedList();
      list.append(2);
      list.append(3);
      list.prepend(1);
      list.append(4);
      expect(list.size()).toBe(4);
      expect(list.head()).toBe(1);
      expect(list.tail()).toBe(4);
    });

    test("can pop elements and verify the list", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.pop();
      expect(list.contains(1)).toBe(false);
      expect(list.contains(2)).toBe(true);
      expect(list.findIndex(2)).toBe(0);
    });

    test("complex operations work correctly", () => {
      const list = new LinkedList();
      list.append(10);
      list.prepend(5);
      list.append(15);
      list.prepend(1);
      expect(list.at(0)).toBe(1);
      expect(list.at(1)).toBe(5);
      expect(list.at(2)).toBe(10);
      expect(list.at(3)).toBe(15);
      expect(list.size()).toBe(4);
      expect(list.toString()).toBe("(1) -> (5) -> (10) -> (15) -> null");
    });
  });
});

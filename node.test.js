import { Node } from "./node";

describe("Node", () => {
  test("creates a node with a value", () => {
    const node = new Node(5);
    expect(node.value).toBe(5);
  });

  test("creates a node with null nextNode initially", () => {
    const node = new Node(10);
    expect(node.nextNode).toBe(null);
  });

  test("can store string values", () => {
    const node = new Node("hello");
    expect(node.value).toBe("hello");
  });

  test("can store object values", () => {
    const obj = { key: "value" };
    const node = new Node(obj);
    expect(node.value).toBe(obj);
  });

  test("nextNode can be set to another node", () => {
    const node1 = new Node(5);
    const node2 = new Node(10);
    node1.nextNode = node2;
    expect(node1.nextNode).toBe(node2);
    expect(node1.nextNode.value).toBe(10);
  });

  test("can be chained with other nodes", () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.nextNode = node2;
    node2.nextNode = node3;

    expect(node1.nextNode).toBe(node2);
    expect(node1.nextNode.nextNode).toBe(node3);
    expect(node1.nextNode.nextNode.value).toBe(3);
  });
});

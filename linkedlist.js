var head;

class Node {
  constructor(d) {
    this.data = d
    this.next = null
  }
}

function printList() {
  var n = head
  while (n != null) {
    console.log(n.data, 'hwgdyheff')
    n = n.next
  }
}
// add at the front of a list
function pushFront(new_data) {
  var new_node = new Node(new_data)
  new_node.next = head
  head = new_node
}

function insertAfterANode(prev_node, new_data) {
  if (prev_node == null) {
    return
  }
  var new_node = new Node(new_data)
  new_node.next = prev_node.next
  prev_node.next = new_node
}

var head = new Node(1)
var second = new Node(2)
var third = new Node(3)

head.next = second
second.next = third
pushFront(45)
console.log(head.next.data, 'head')
printList()
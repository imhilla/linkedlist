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

var head = new Node(1)
var second = new Node(2)
var third = new Node(3)

head.next = second
second.next = third
console.log(head.next.data, 'head')
printList()
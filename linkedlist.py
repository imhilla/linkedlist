# a simple python program to introduce linkedlist
class Node:
  # function to initialize the node object
  def __init__(self, data):
    self.data = data
    self.next = None

class LinkedList:
  # function to initialize head
  def __init__(self):
    self.head = None

if __name__ == '__main__':
  llist = LinkedList()
  llist.head = Node(1)
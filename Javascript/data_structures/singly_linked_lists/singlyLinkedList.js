function Node(value) {
    this.val = value;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = new Node("head");
}

SinglyLinkedList.prototype.find = function(value) {
    var curr = this.head;
    while (curr !== null && curr.val !== value) {
        curr = curr.next;
    }
    return curr;
}

SinglyLinkedList.prototype.insert = function(newValue, value) {
    var newNode = new Node(newValue);
    var current = this.find(value);
    if (current != null) {
        newNode.next = current.next
        current.next = newNode;
        return true;
    }
    return false;
}

SinglyLinkedList.prototype.display = function() {
    var curr = this.head.next;
    while (curr != null) {
        console.log(curr.val);
        curr = curr.next;
    }
}

SinglyLinkedList.prototype.findPrevious = function(value) {
    var curr = this.head;
    while (curr.next.val !== value && curr.next !== null) {
        curr = curr.next;
    }
    return curr;
}

SinglyLinkedList.prototype.remove = function(value) {
    var current = this.findPrevious(value);
    if (current != null) {
        current.next = current.next.next;
        return true;
    }
    return false;
}

var cities = new SinglyLinkedList();
cities.insert("Los Angeles", "head");
cities.insert("San Francisco", "Los Angeles");
cities.insert("Seattle", "San Francisco");
cities.display()

var basketballTeams = new SinglyLinkedList();
basketballTeams.insert("Lakers", "head");
basketballTeams.insert("Blazers", "Lakers");
basketballTeams.insert("Celtics", "Blazers");
basketballTeams.insert("Kings", "Celtics");
basketballTeams.display();
console.log("Removing celtics");
basketballTeams.remove("Celtics");
basketballTeams.display();
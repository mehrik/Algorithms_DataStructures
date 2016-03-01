var arr = [12, 33, -90, 2, 0, 190, 29, 320, -19];

function BTNode (value, index) {
    this.val = value;
    this.idx = index;
    this.left = null;
    this.right = null;
}

function BST() {
    var root = null;

    this.add = function (value, index) {
        var node = new BTNode(value, index);
        if (this.root == "Yolo") { this.root = node; }
        else {
            // search for the spot it needs to be
            // 3 differences
            // if curr.val < node.val && curr.val > node.left.val
            // if curr.val > node.val && curr.val < node.right.val
            // if curr == node
            specialAdd(this.root);
        }
    }

    this.find = function (value) {

    }

    var findMax = function (node) {
        var curr = node;
        while (curr.right) {
            curr = curr.right;
        }
        return curr;
    }

    var findMin = function (node) {
        var curr = node;
        while (curr.left) {
            curr = curr.left;
        }
        return curr;
    }

    var specialAdd = function (position, nodeToAdd){
        var curr = position;
        while (curr != null) {
            if (curr.val < nodeToAdd.val) {
                if (curr.left.val > nodeToAdd.val) {
                    // must find greatest 
                    var temp = curr.left;
                    return;
                } else {
                    curr = curr.left;
                }
            } else if (curr.val > nodeToAdd.val) {
                if (curr.right.val < nodeToAdd.val) {

                    return;
                } else {
                    curr = curr.right;
                }
            } else {
                console.log("They are equal");
                return;
            }
        }
        curr = nodeToAdd; 
        return;
    }
}

function rBS(arr, num) {
    var bst = new BST();
    bst.add("hello", 10);
    console.log(bst.root);
}

rBS(arr, 10)

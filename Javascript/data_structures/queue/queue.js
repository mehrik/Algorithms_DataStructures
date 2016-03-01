
var Queue = (function(){
    function Queue() {
        this.dataStore = [];
        this.back = 0;
    }
    Queue.prototype.enqueue = function(item) {
        // add item to the back
        this.dataStore[this.back] = item;
        this.back++;
    }
    Queue.prototype.dequeue = function() {
        var output = this.dataStore[0];
        for (var i = 0; i < this.dataStore.length - 1; i++) {
            this.dataStore[i] = this.dataStore[i + 1];
        }
        this.dataStore.length--;
        this.back--;
        return output;

    }
    Queue.prototype.display = function() { 
        for (index in this.dataStore) {
            console.log(this.dataStore[index]);
        }
    }
    return Queue;
})();
module.exports = Queue;
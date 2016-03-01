var Stack = (function() {
    function Stack() {
        this.dataStore = [];
        this.top = 0;
    }

    Stack.prototype.push = function (item) {
        this.dataStore[this.top] = item;
        this.top++;
    }

    Stack.prototype.pop = function () {
        this.top--;
        return this.dataStore.pop();
    }

    Stack.prototype.display = function () {
        for (var i = 0; i < this.dataStore.length; i++) {
            console.log(this.dataStore[i]);
        }
    }

    return Stack;
})();

module.exports = Stack
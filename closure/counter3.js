/*Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, respectively. 
Note: now the counter needs to return an object rather than a function.*/
function counter(n) {
    this.count = n;
    this.increment = function() {
        this.count ++;
        return this.count;
    };
    this.decrement = function() {
        this.count --;
        return this.count;
    };
}
var counter1 = new counter(2);
var counter2 = new counter(10);
console.log(counter1.increment());
console.log(counter2.increment());
console.log(counter1.increment());
console.log(counter1.decrement());
console.log(counter2.decrement());
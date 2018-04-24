//Allow the caller of counter to initialize the count to the first argument that's passed in.
function counter(n) {
    var count = n;
    function innerCount() {
        count ++;
        return count;
    }
    return innerCount;
}
var counter1 = counter(2);
var counter2 = counter(10);
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter1());
console.log(counter2());
function counter() {
    var count = 0;
    function innerCount() {
        count ++;
        return count;
    }
    return innerCount;
}
var counter1 = counter();
var counter2 = counter();
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter1());
console.log(counter2());
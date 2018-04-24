function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}
Card.prototype.getImageUrl = function () {
    return `images/${this.point}_of_${this.suit}.png`;
}
var myCard = new Card(5, 'diamonds');
console.log(myCard.point);

console.log(myCard.suit);
console.log(myCard.getImageUrl());

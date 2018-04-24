function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}
Card.prototype.getImageUrl = function () {
    return `images/${this.point}_of_${this.suit}.png`;
}
function Hand () {
    this.hand = [];
    this.handPoints = 0;
    this.addCard = function(card) {
        this.hand.push(card);
    };
    this.getPoints = function () {
        var totalPoints = 0;
        this.hand.forEach(function(card) {
            totalPoints += card.point;
        });
        this.handPoints = totalPoints;
        return this.handPoints;
    };
}

// var myCard = new Card(5, 'diamonds');
// console.log(myCard.point);

// console.log(myCard.suit);
// console.log(myCard.getImageUrl());

var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));
console.log(myHand.hand);

console.log(myHand.getPoints());



function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}
Card.prototype.getImageUrl = function () {
    return `images/${this.point}_of_${this.suit}.png`;
};
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
class Deck {
    constructor () {
        this.deck = Deck.makeDeck();    
    }
    
    numCardsLeft () {
        return this.deck.length;
    }
    
    shuffle() {
        var newDeck = [];
        while (this.numCardsLeft()) {
            let dice = Math.floor(Math.random() * this.numCardsLeft());
            newDeck.push(this.deck[dice]);
            this.deck.splice(dice, 1);
        }
        this.deck = newDeck.slice();
    }
    
    draw () {
        return this.deck.shift();
    }
    
    
    static makeDeck() {
        var deck = [];
        var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
        var points = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
        for (let i = 0; i < 4 ; i ++) {
            for (let j = 0; j < 13; j ++) {
                deck.push(new Card(points[j], suits[i]));
            }
        }
        return deck;
    }
}
var myDeck = new Deck();
myDeck.shuffle();
console.log(myDeck.numCardsLeft());
console.log(myDeck.draw());
myDeck.shuffle();
console.log(myDeck.draw());

console.log(myDeck.numCardsLeft());
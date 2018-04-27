/* rewrite it to class
function Person(name) {
  this.name = name;
  this.friends = [];
}

Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
};

Person.prototype.createGreeting = function(other) {
  return 'Yo ' + other.name + '! from ' + this.name + '.';
};

Person.prototype.greet = function(other) {
  console.log(this.createGreeting(other));
}; */

class Person {
    constructor (name) {
        this.name = name;
        this.friends = [];
    }
    
    addFriend (friend) {
       this.friends.push(friend); 
    }
    
    createGreeting (other) {
        return 'Yo ' + other.name + '! from ' + this.name + '.';
    }
    
    greet (other) {
        console.log(this.createGreeting(other));
    }
    
    lazyGreet (other){
        setTimeout(() => {
            this.greet(other);
            }, 2000);
        }
    createGreetingsForFriends() {
        console.log(this.friends.map(friend => {
            return this.createGreeting (friend);
            }));

        }
    
}

var tom = new Person('Tom');
var jerry = new Person('Jerry');

// tom.addFriend(jerry);
// jerry.addFriend(tom);
// // tom.greet(jerry);
// // jerry.greet(tom);
// tom.lazyGreet(jerry);
// jerry.lazyGreet(tom);
var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);
alfie.createGreetingsForFriends();
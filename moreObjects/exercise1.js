var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: function() {
      console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
  }
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

daughter.__proto__ = mom;

mom.showInfo();
daughter.showInfo();
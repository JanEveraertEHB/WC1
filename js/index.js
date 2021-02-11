"use strict";

const player = {
  position: {
    col: 5,
    row: 5
  },
  movesLeft: 12,
  isAlive: true,
  checkVitals: function() {
  }
};

const colors = {
  character: "#ffffff",
  ground: "#166e7a",
  wall: "#254d70",
  door: "#52c33f",
  hole: "#201533"
}

const game = {
  render: function() {
    // fill in the color of each cell
    // if the type of the cell is empty, make it the ground color

    // display the amount of steps left

    // create the character element
    // If the character is alive, give it the "alive" class, otherwise give it the "dead" class
    
  },

  displayStepsLeft() {
    // insert the amount of steps left in the steps counter up to
  },


  buttonPressed: function(direction) {
    // subtract one from the movesLeft of the player
    // check the direction, and change the rows or columns accordingly

    // check the player vitals
    
    this.render();
  },

  // function to initialise the controller buttons
  // search for all the buttons, and assign the buttonPressed action, with the ID as the direction
  initButtons: function(){
  }
}

game.render();
game.initButtons();
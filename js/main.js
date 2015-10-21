// var Game = {
//   started: false,
  
  
//   images: [
//     'img/luxe1.jpg', 
//     'img/luxe2.jpg',
//     'img/luxe3.jpg',
//     'img/luxe4.jpg',
//     'img/luxe5.jpg',
//     'img/luxe6.jpg',
//     'img/luxe7.jpg',
//     'img/luxe8.jpg',
//   ],

//   cards: [],
  
//   choices : [],
  
 
//   init: function() {
//     $startButton.on('click', function() {
//       Game.start();
//     });

//     this.$board = $('#board');
//     for (var i = 0; i < this.images.length; i++) {
//       var firstCard = new Card(this.images[i]);
//       var secondCard = new Card(this.images[i]);
//       this.cards.push(firstCard);
//       this.cards.push(secondCard);
//     }
   
//   },
  

//   start : function() {
//     $startButton.hide();
//     this.started = true;
//     this.renderCards();
//     // Set started to true
//     // Render cards grid
//   },

//   renderBoard: function() {
//     this.$board.empty();

//     // loop through array of cards {
//       // set card instance in var
//       // call renderCard and pass in card
//       // append to $board
//     //}



//   }, 

//   renderCard: function(cardInstance) {

//   },

//   decide : function() {
//     // compaire choices[0] and choices[1]
//     if (Game.choices[0].imageUrl === Game.choices[1].imageUrl) {
//       Game.choices[0].matched = true;
//       Game.choices[1].matched = true;
//     } else {
//       Game.choices[0].matched = false;
//       Game.choices[1].matched = false;
//     }

//     Game.renderCards();

//   }

// }; //Game



// //CARD CONSTRUCTOR
// function Card(img) {
//   this.imageUrl = img;
//   this.matched = false;
// }



// //START BUTTON
// $startButton = $('<button>');
// $startButton.attr('type', 'button');
// $startButton.addClass('btn btn-default startButton');
// $startButton.text("Start");
// $('h1').append($startButton);



// Game.init();

//----------------------------------
//      NEW VERSION
//----------------------------------

var Game = {
  started: false,
  
 
   images: [
    'img/luxe1.jpg', 
    'img/luxe2.jpg',
    'img/luxe3.jpg',
    'img/luxe4.jpg',
    'img/luxe5.jpg',
    'img/luxe6.jpg',
    'img/luxe7.jpg',
    'img/luxe8.jpg',
  ],
  
  cards: [],
  
  choices : [],
  
 
  init: function() {
    //start button
    this.$startButton = $('.startButton');
    Game.$startButton.on('click', Game.start);
    //board
    this.$board = $('#board');
    //cards[]
    for (var j = 0; j < Game.images.length; j++) {
      var img = Game.images[j];
      var card1 = new Card(img);
      var card2 = new Card(img);
      var indexNum = Math.floor(Math.random() * 8) + 1;
      Game.cards.splice(indexNum, 0, card1);
      Game.cards.splice(indexNum, 0, card2);
    }
  },
  
  start : function() {
    Game.started = true;
    Game.$startButton.hide();
    Game.renderBoard();
    
  },

  renderBoard: function() {
    Game.$board.empty();
    for (var i = 0; i < Game.cards.length; i++) {
      var cardModel = Game.cards[i];
      var $card = Game.renderCard(cardModel);
      Game.$board.append($card);
    }

  },

  renderCard: function(cardModel) {
    var $cardDiv = $('<div>');
    $cardDiv.addClass('card');
    if (cardModel.matched == true) {
      $cardDiv.addClass('flipped');
    }
    var $cardImgTag = $('<img>');
    var cardImg = cardModel.imageUrl;
    $cardImgTag.attr('src', cardImg);
    $cardDiv.append($cardImgTag);
    

    $cardDiv.on('click', function(){
      $(this).addClass('flipped');
      Game.choices.push(cardModel);
      if (Game.choices.length == 2) {
        Game.decide(cardModel);
        setTimeout(function() {Game.renderBoard()}, 1500);
        Game.choices = [];
      }
    });

    return $cardDiv;

  },

  decide: function(cardModel) {
    if (Game.choices[0].imageUrl == Game.choices[1].imageUrl) {
          Game.choices[0].matched = true;
          Game.choices[1].matched = true;
    }
  } 
  
};


function Card(img) {
  this.imageUrl = img;
  this.matched = false;
}

Game.init();

//----------------------
//   PERSONAL NOTES
//----------------------

// images = []
  // Links to all your images used
  // loop through this and build TWO cards for each image

// init()
  // Bind $startButton
  // populate cards array 
   // loop through images {
      // create two instances of Card constructor
      // append both to cards array
    //}

// Start Button
  // when start button is clicked call Game.start() 

// start()
  // set started to true
  // hide start butotn
  // render cards
    
// renderBoard()
  // empty $board
  // loop through cards array 
  // and build a <div class="card"></div>
  // set the css background img to card.imageUrl
  // append to $board


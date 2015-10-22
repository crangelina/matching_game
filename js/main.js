
var Game = {
  started: false,
  preventClick: false,
  counter: 0,

  
 
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
    //restart button
    this.$restartButton = $('.restartButton');
    Game.$restartButton.on('click', function() {
        location.reload();
    });
    //you won text
    this.$winnerText = $('h2');
    //board
    this.$board = $('#board');
    //shuffle function
    function shuffle(array) {
      var m = array.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    }
    //cards[]
    for (var j = 0; j < Game.images.length; j++) {
      var img = Game.images[j];
      var card1 = new Card(img);
      var card2 = new Card(img);
      Game.cards.push(card1);
      Game.cards.push(card2);
    }
    shuffle(Game.cards);
  },
  
  start : function() {
    Game.started = true;
    Game.$startButton.hide();
    Game.renderBoard();
    
  },

  renderBoard: function() {
    Game.$board.empty();

    if (Game.counter == 8){
      Game.$board.hide();
      Game.$winnerText.show();
      Game.$restartButton.show();
    }
     

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
      if (Game.preventClick == true) {
        return;
      }
      $(this).addClass('flipped');
      Game.choices.push(cardModel);
      if (Game.choices.length == 2) {
        Game.decide(cardModel);
        Game.preventClick = true;
        setTimeout(function() {Game.renderBoard(); Game.preventClick = false}, 1500);
        Game.choices = [];
      } 
    });

    return $cardDiv;

  },

  decide: function(cardModel) {
    if (Game.choices[0].imageUrl == Game.choices[1].imageUrl) {
          Game.choices[0].matched = true;
          Game.choices[1].matched = true;
          Game.counter += 1;
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

// preventClick
  //set a flag to true saying timer is started (prevent click)
  //preventClick=true
  //in on click check preventClick
  //if true then return
  //after time and rerender board set it back to false
  //disabling clicks in that 2 second period

  //line before set time out
  //preventClick=true
  //after two seconds set it back to false
  //in on click handler the first thing is if statement so if true
  //then return. can return from function without doing anything


    // for (var j = 0; j < this.cards.length; j++) {
    //   var card = this.cards[j];

    //   var $cardDiv = $('<div>');
    //   $cardDiv.addClass('card');
    //   if (card.matched == true) {
    //     $cardDiv.addClass('flipped');
    //   }
      

    //   var $cardImgTag = $('<img>');
    //   $cardImgTag.attr('src', card.imageUrl);
    //   $cardDiv.append($cardImgTag);

    //   bindClick($cardDiv, card);    

    //   this.$board.append($cardDiv);


    // }

    // function bindClick($cardDiv, card) {
    //   $cardDiv.on('click', function() {
    //     $(this).addClass('flipped');
        
    //     if (Game.choices.length == 2) {
    //       Game.decide();
    //     } else {
    //       Game.choices.push(card);
    //     }
    //   }) //on click()
    // } // bindClick()
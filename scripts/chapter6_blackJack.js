//create a reusable object of card via constructor
function card(name, suit, value){
    this.name = name;
    this.suit = suit;
    this.value = value;

}
var suit = ['spades', 'clubs', 'diamonds', 'hearts'];
var name = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
var value = [11,2,3,4,5,6,7,8,9,10,10,10,10];

// function deck(){
//      this.cards = [];
//      for (var i = 0; i < suit.length; i++) {
//          for(var nameIdx = 0; nameIdx < name.length; nameIdx++){
//             this.cards.Add(card(name[nameIdx],suit[i],value[nameIdx]));
//         }
//      }
// }
var deck = [
    new card('ace','Spades',11),
    new card('two','Spades',2),
    new card('three', 'Spades', 3),
    new card('four', 'Spades', 4),
    new card('five','Spades', 5),
    new card('six','Spades',6),
    new card('seven','Spades', 7),
    new card('eight', 'Spades', 8),
    new card('nine', 'Spades', 9),
    new card('ten', 'Spades',10),
    new card('jack', 'Spades', 10),
    new card('queen', 'Spades', 10),
    new card('king', 'Spades', 10),

    new card('ace','Clubs',11),
    new card('two','Clubs',2),
    new card('three', 'Clubs', 3),
    new card('four', 'Clubs', 4),
    new card('five','Clubs', 5),
    new card('six','Clubs',6),
    new card('seven','Clubs', 7),
    new card('eight', 'Clubs', 8),
    new card('nine', 'Clubs', 9),
    new card('ten', 'Clubs',10),
    new card('jack', 'Clubs', 10),
    new card('queen', 'Clubs', 10),
    new card('king', 'Clubs', 10),
    new card('ace','Clubs',11),

    new card('two','Diamonds',2),
    new card('three', 'Diamonds', 3),
    new card('four', 'Diamonds', 4),
    new card('five','Diamonds', 5),
    new card('six','Diamonds',6),
    new card('seven','Diamonds', 7),
    new card('eight', 'Diamonds', 8),
    new card('nine', 'Diamonds', 9),
    new card('ten', 'Diamonds',10),
    new card('jack', 'Diamonds', 10),
    new card('queen', 'Diamonds', 10),
    new card('king', 'Diamonds', 10),
    new card('ace','Diamonds',11),

    new card('two','Hearts',2),
    new card('three', 'Hearts', 3),
    new card('four', 'Hearts', 4),
    new card('five','Hearts', 5),
    new card('six','Hearts',6),
    new card('seven','Hearts', 7),
    new card('eight', 'Hearts', 8),
    new card('nine', 'Hearts', 9),
    new card('ten', 'Hearts',10),
    new card('jack', 'Hearts', 10),
    new card('queen', 'Hearts', 10),
    new card('king', 'Hearts', 10)
];
var used_cards = [];
var cardsinHand = [];
function deal(){
    $('#btnDeal').empty().append('<img src="images/deck_small.jpg">');
    $('#my_hand').empty();
    $('#hdrResult').empty();
    
    for(var i = 0; i< 2; i++){
        hit();
    }
    //add stick/stand feature
    $('#controls').append('<div id="btnStick"><img src="images/stick_small.jpg"></div>');
    $('#btnStick').css({
        position: 'absolute',
        top: '380px',
        left:'340px'
    });
    $('#btnStick').click(function(event) {
        /* Act on the event */
        $('#hdrResult').empty().append('Stick!').css({
            color: 'green'});
        $('#my_hand').append('<img id="resultImage" src="images/check.png">');
        
        resetGame();
    });
}
function getRandom(num){
    return Math.floor(Math.random()*num);
}
function hit(){
    var usedIdx, newcardIdx;
    //get a new card from deck
    do{
        newcardIdx = getRandom(51);
        usedIdx = $.inArray(newcardIdx, used_cards);
        if(usedIdx < 0)
            used_cards[used_cards.length] = newcardIdx;
    }while(usedIdx>=0);
    
    //dispaly the new card to #my_hand
    displayCardsinHand(newcardIdx);
    //store the new card in cardsinHand array
    cardsinHand[cardsinHand.length] = deck[newcardIdx];    


}
function displayCardsinHand(newcardIdx){
    var imageName = "/" + deck[newcardIdx].name + ".jpg";

    var imageFolder = "/cards/"+deck[newcardIdx].suit;
    var imageFath = "images" + imageFolder + imageName;
    $("#my_hand").append('<img src='+imageFath+'>');
}
function checkRule(){
    var totalValue = 0;
    for(card in cardsinHand){
        totalValue += cardsinHand[card].value;
    }
    //display totalValue
    $("#hdrTotal").empty().append('Total: ' + totalValue);
    if(totalValue > 21){
        //bust, game over
        console.log("bust! game over");
        //show bust event to player
        $('#hdrResult').empty().append('BUST!').css('color', 'red');
        $('#my_hand').append('<img id="resultImage" src="images/x2.png">');
        resetGame();
    }
    else if(totalValue == 21){
        //black jack !
        console.log("black jack !");
        $('#hdrResult').empty().append('BlackJack!').css({
            color: 'green'});
        $('#my_hand').append('<img id="resultImage" src="images/check.png">');
        resetGame();

    }  
    else if((totalValue < 21)&&(cardsinHand.length == 5)){
        //wins! game over
        console.log('you wins! dealt 5 cards but total is less than 21');
        $('#hdrResult').empty().append('You win!').css({
            color: 'green'});
        $('#my_hand').append('<img id="resultImage" src="images/check.png">');
        resetGame();
    }
    else{
        //no conditions above is met, player can ask for another card.
        $("#btnDeal").unbind('click');
        $("#btnDeal").click(function(event) {
            /* Act on the event */
            hit();
            checkRule();
        });
        console.log('Total is:' + totalValue + ', continue to deal');
    }
    

}
function resetGame(){
    //update btndeal img
        $('#btnDeal').empty().append('<img src="images/restart_small.jpg">');
        //$('#x2').animate({height:200}, 'fast');
        //restart game, clear all storage
        used_cards.length = 0;
        cardsinHand.length = 0;
        $('#btnStick').remove();
        $("#btnDeal").unbind('click');
        $("#btnDeal").click(function(event) {
            /* Act on the event */
            deal();
            checkRule();
        });
}
$(document).ready(function() {
    $("#btnDeal").click(function(event) {
        /* Act on the event */
        deal();
        checkRule();
    });
});


$(document).ready(function() {
    $(".guess_box").click(checkForCode);
    hideCode();
    $(".guess_box").hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).addClass('my_hover');


    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).removeClass('my_hover');
    });
});

function checkForCode(){
    /* Act on the event */
    //alert("you clicked me!");
    //
    var discount_msg;
    if($.contains(this, document.getElementById("has_discount"))){
        var discount = getRandom(100);
        discount_msg = "<p>Your Code : CODE" + discount + "</p>";

    }else{
        discount_msg = "<p>Sorry, no discount this time!</p>"; 
    }
    $(".guess_box").each(function(index, el) {
        if($.contains(this, document.getElementById("has_discount"))){
            $(this).addClass('discount');
        }
        else{
            $(this).addClass('no_discount');
        }
    });
    
    //$(".guess_box p").remove();
    $("#main").append(discount_msg);
    //$(".guess_box").unbind('click');
    $(".guess_box").each(function(){
        $(this).unbind('click');
    });

    
}
function getRandom(num){
    return Math.floor(Math.random()*num);
}
var hideCode = function(){
    var numRand = getRandom(4);
    $(".guess_box").each(function(index, value){
        if(numRand == index){
            $(this).append("<span id='has_discount'></span>");
            return true;
        }
    });
};

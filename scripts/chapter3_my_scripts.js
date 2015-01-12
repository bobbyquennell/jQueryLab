$(document).ready(function() {
    $(".guess_box").click(checkForCode);
    hideCode();
});

function checkForCode(){
    /* Act on the event */
    //alert("you clicked me!");
    //
    var discount_msg;
    if($.contains(this, document.getElementById("has_discount"))){
        var discount = getRandom(5);
        discount_msg = "<p>Your discount is: " + discount + "%</p>";
    }else{
        discount_msg = "<p>Sorry, no discount this time!</p>"; 
    }
    
    //$(".guess_box p").remove();
    $(this).append(discount_msg);
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

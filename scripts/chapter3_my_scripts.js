$(document).ready(function() {
    $(".guess_box").click(function(event) {
        /* Act on the event */
        //alert("you clicked me!");
        var discount = Math.floor((Math.random()*5)+5);
        var discount_msg = "<p>Your discount is: " + discount + "%</p>";
        $(".guess_box p").remove();
        $(this).append(discount_msg);
        //$(".guess_box").unbind('click');
        $(".guess_box").each(function(){
            $(this).unbind('click');
        });
    });
});
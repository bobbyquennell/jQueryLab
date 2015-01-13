$(document).ready(function() {
    var v=false;
    $("#vegOn").click(function(event) {
        /* Act on the event */
        if(v==false){
            v = true;
        }
    });
    $("#restoreMe").click(function(event) {
        /* Act on the event */
        if(v == true){
            v = false;
        }
    });
});
$(document).ready(function() {
    var v=false;
    $("#vegOn").click(function(event) {
        /* Act on the event */
        if(v==false){
            v = true;           
        }
        $f = $(".fish").parent().parent().detach();
        $ham = $(".hamburger").replaceWith('<li class="protobello"><em>protobello mushrooms</em></li>');
        $(".meat").after('<li class="tofu"><em>tofu</em></li>');
        $meat = $(".meat").detach();
    });
    $("#restoreMe").click(function(event) {
        /* Act on the event */
        if(v == true){
            v = false;
        }
        $(".menu_entrees").children().first().before($f);
        $(".protobello").replaceWith('<li class="hamburger">Hamburger</li>');
        // for (var i = 0;i< $meat.length;i++) {
        //     $(".tofu")[i].before($meat[i]);
        // };
        //  $(".tofu").remove();
        $(".tofu").each(function(index, el) {
            $(this).replaceWith($meat[index]);
        });

        
    });
});
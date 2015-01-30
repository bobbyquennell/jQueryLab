$(document).ready(function() {
    $("#datepicker").datepicker({changeMonth:true, changeYear:true});
    $("#type_select").buttonset();
    ///// two type of selectors to location the submit button below
    //$("button[type='submit']").button();//version1.
    $("button:submit").button();//version 2
    /*$("#radio1").button();
    $("#radio2").button();
    $("#radio3").button();*/
    $( "#slider_dist" ).slider({
      //range: "min",
      min: 0,
      max: 500,
      value: 0,
      step:10,
      slide: function( event, ui ) {
        $( "#distance" ).val(ui.value +" ft.");
      }
    });

    $( "#slider_weight" ).slider({
      //range: "min",
      min: 0,
      max: 5000,
      value: 0,
      step:5,
      slide: function( event, ui ) {
        $( "#weight" ).val(ui.value +" lbs.");
      }
    });

    $( "#slider_height" ).slider({
      //range: "min",
      min: 0,
      max: 20,
      value: 0,
      step:1,
      slide: function( event, ui ) {
        $( "#height" ).val(ui.value +" ft.");
      }
    });

    $( "#slider_latitude" ).slider({
      //range: "min",
      min: -90,
      max: 90,
      value: 0,
      step:0.00001,
      slide: function( event, ui ) {
        $( "#latitude" ).val(ui.value);
      }
    });

    $( "#slider_longitude" ).slider({
      //range: "min",
      min: -180,
      max: 180,
      value: 0,
      step:0.00001,
      slide: function( event, ui ) {
        $( "#longitude" ).val(ui.value);
      }
    });
    
    // $( "#slider_colorR" ).slider({
    //   range: "min",
    //   min: 0,
    //   max: 255,
    //   value: 0,
    //   step:1,
    //   slide: function( event, ui ) {
    //     $( "#creatureColorR" ).val(ui.value);
    //   }
    // });
    // $( "#slider_colorG" ).slider({
    //   //range: "min",
    //   min: 0,
    //   max: 255,
    //   value: 0,
    //   step:1,
    //   slide: function( event, ui ) {
    //     $( "#creatureColorG" ).val(ui.value);
    //   }
    // });
    // $( "#slider_colorB" ).slider({
    //   //range: "min",
    //   min: 0,
    //   max: 255,
    //   value: 0,
    //   step:1,
    //   slide: function( event, ui ) {
    //     $( "#creatureColorB" ).val(ui.value);
    //   }
    // });
    $( "#slider_colorR, #slider_colorG, #slider_colorB" ).slider({
      orientation:"horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $("#distance").val($("#slider_dist").slider("value")+" ft.");
    $("#weight").val($("#slider_weight").slider("value")+" lbs.");
    $("#height").val($("#slider_height").slider("value")+" ft.");
    $("#latitude").val($("#slider_latitude").slider("value"));
    $("#longitude").val($("#slider_longitude").slider("value"));
    $("#creatureColorR").val($("#slider_colorR").slider("value"));
    $("#creatureColorG").val($("#slider_colorG").slider("value"));
    $("#creatureColorB").val($("#slider_colorB").slider("value"));
    $("#slider_colorR").slider("value",127);

});

function refreshSwatch(){
    var red = $("#slider_colorR").slider("value");
    var green = $("#slider_colorG").slider("value");
    var blue = $("#slider_colorB").slider("value");
    var my_rgb = d2h(red).toString() + d2h(green).toString()+d2h(blue).toString();
    my_rgb = my_rgb.toUpperCase();
    $("#creatureColorR").val(red);
    $("#creatureColorG").val(green);
    $("#creatureColorB").val(blue);
    $("#color_val").val("#"+my_rgb);
    $("#swatch").css('background-color', "#"+my_rgb);
}
function d2h(number){
    return number.toString(16);
}
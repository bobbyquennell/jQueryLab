$(document).ready(function() {
    $("#datepicker").datepicker({changeMonth:true, changeYear:true});
    $("#type_select").buttonset();
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
    $("#distance").val($("#slider_dist").slider("value")+" ft.");
    $("#weight").val($("#slider_weight").slider("value")+" lbs.");
    $("#height").val($("#slider_height").slider("value")+" ft.");
    $("#latitude").val($("#slider_latitude").slider("value"));
    $("#longitude").val($("#slider_longitude").slider("value"));

});
var FREQ = 10;
var isFreshStop =false;
$(document).ready(function() {
    
    //var intervalID = setInterval(getXMLRacers, 5000); 
    /* be careful with setInterval function
    digest from Head First jQuery p310
    setInterval will run even if the function it is
    calling isn’t finished yet.
    If you’re waiting on information from another server, or
    waiting on user interaction, setInterval could call your
    function again before you’re ready. Your functions may not always
    return in the order that you called them.*/
    $("#btnStopFresh").click(function(event) {
            isFreshStop = true;
            $("#freq").html('Updates paused');
    });
    $("#btnStartFresh").click(function(event) {
        if(isFreshStop === true){
            isFreshStop = false;
            setTimeout(startAJAXCalls, FREQ*1000);
            showFrequency();
        }

    });
    $("#btnSave").click(function(event) {
        /* serialize the data collect from form */
        var serializeResult = $("#addRunner").serializeArray();
        /* $.post to server */
        $.post('chapter9_service.php?action=addRunner', serializeResult, function(json) {
            if (json.statusCode == "fail") {
                alert(json.message);
            }
            if(json.statusCode == "success"){
                alert(json.message);
                clearInputs();
            }
        }, "json");
    });
    $("#addRunner").submit(function(event) {
        return false;
    });
    getDBRacers();
    startAJAXCalls();
    showFrequency();
});

function clearInputs(){
    $("#addRunner:input").each(function(index, el) {
        $(this).val('');
    });
}
function showFrequency(){
    $("#freq").html('Page refreshes every ' + FREQ + " second(s).");
}
function getTimeAjax(){
    $("#updatedTime").load('chapter8_time.php');
    
}
function startAJAXCalls(){
    // $.ajax({
    //     url:'finishers.xml',
    //     cache:false,
    //     dataType:'xml',
    //     success:function(xml){
    //          getXMLRacers(xml);
    //          if(isFreshStop === false){
    //             setTimeout(startAJAXCalls, FREQ*1000);
    //         }
    //     }
    // });
    
    //self-referencing function to avoid setInterval issue if the network is slow.
    if(isFreshStop === false){
        setTimeout(function(){
            getDBRacers();
            startAJAXCalls();
        }, 
        FREQ*1000);
    }    
}
function getTime(){
    var a_p = "";
    var d = new Date();
    var curr_hour = d.getHours();

    (curr_hour < 12) ? a_p = "AM" : a_p = "PM";
    (curr_hour === 0) ? curr_hour = 12 : curr_hour = curr_hour;
    (curr_hour > 12) ? curr_hour -= 12 : curr_hour = curr_hour;

    var curr_min = d.getMinutes().toString();
    var curr_sec = d.getSeconds().toString();

    if(curr_min.length == 1){ curr_min = "0" + curr_min;}
    if(curr_sec.length == 1){curr_sec = "0" + curr_sec;}

    $('#updatedTime').html(curr_hour+ ":"+curr_min+":"+curr_sec+" "+ a_p);

}

function getXMLRacers(xml){

    $('#finishers_m').empty();
    $('#finishers_f').empty();
    $('#finishers_all').empty();
            
    var result;
    console.log("I got xml: ");
    var runners = $(xml).find("runner");
    runners.each(function(index, el) {
        var result = $(this).find('fname').text() + ' ' + $(this).find('lname').text()+ ' ' + 
        $(this).find('gender').text() + ' ' + $(this).find('time').text();
        console.log(result);
        var info = "<li>"+result+"</li>";
        $("#finishers_all").append(info);
        if($(this).find('gender').text() == 'm'){
            $(info).appendTo('#finishers_m');
        }
        else{
            $(info).appendTo('#finishers_f');
        }
    });
        
    getTimeAjax();
}
function getDBRacers(){
    /*   version 1: using standard ajax method */
    /*$.ajax({
        url: "chapter9_service.php",// the url must be quoted by "" not ''
        type: 'GET',
        dataType: 'json',
        success: function(json){
            if(json.length > 0){
                $('#finishers_m').empty();
                $('#finishers_f').empty();
                $('#finishers_all').empty();
                $.each(json, function(index, val) {
                    /* iterate through array or object *
                    var result = this.first_name + ' ' + this.last_name + ' ' + this.gender + ' ' + this.finish_time;
                    console.log(result);
                    var info = "<li>"+result+"</li>";
                    $("#finishers_all").append(info);
                    if(this.gender == 'm'){
                        $(info).appendTo('#finishers_m');
                    }
                    else{
                        $(info).appendTo('#finishers_f');
                    }
                });
        }           
    }
  });*/
    /*   version 2: using shorthand ajax method: $.getJSON()
    note: $.each() is used for non-jQuery collection, and .each() is used for jQuery collection--elements mathced with your selectors
    for more information about these two method, please refer to: http://learn.jquery.com/using-jquery-core/iterating/
    or https://www.evernote.com/l/AD5tsgIvgOdPZb38XV-IBiKGG2BcY_cnZ_g
     */
    $.getJSON("chapter9_service.php?action=getRunners", function(json) {
        if(json.length > 0){
            $('#finishers_m').empty();
            $('#finishers_f').empty();
            $('#finishers_all').empty();
            $.each(json, function(index, val) {
                /* iterate through array or object */
                var result = this.first_name + ' ' + this.last_name + ' ' + this.gender + ' ' + this.finish_time;
                console.log(result);
                var info = "<li>"+result+"</li>";
                $("#finishers_all").append(info);
                if(this.gender == 'm'){
                    $(info).appendTo('#finishers_m');
                }
                else{
                    $(info).appendTo('#finishers_f');
                }

            });

        }
    });
    getTimeAjax();
    
}
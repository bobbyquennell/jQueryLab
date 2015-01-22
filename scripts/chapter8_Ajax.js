$(document).ready(function() {
    
    var intervalID = setInterval(getXMLRacers, 5000); 

});

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

function getXMLRacers(){
    $.ajax({
        url: 'finishers.xml',
        type: 'GET',
        dataType: 'xml',
        success: function(xml){
            $('#finishers_m').empty();
            $('#finishers_f').empty();
            $('#finishers_all').empty();
            // $(xml).find('runner').each(function(index, el) {
            //     var info = '<li>Name: ' + $(this).find('fname')
            // });
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
        getTime();
        }
    });
}
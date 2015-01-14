var headClickCnt = 0;
var eyesClickCnt = 0;
var noseClickCnt = 0;
var mouthClickCnt = 0;

$(document).ready(function() {
    $("#head").click(headClickHandler);
    $("#eyes").click(eyeClickHandler);
    $("#nose").click(noseClickHandler);
    $("#mouth").click(mouthClickHandler);
});
function headClickHandler(){
   headClickCnt += 1;
   if(headClickCnt == 9){
     console.log("nineth click head, rewind back");
     headClickCnt = 0;
   }
   else{ console.log("click head "+ headClickCnt + " times");}
}
function eyeClickHandler(){
   eyesClickCnt += 1;
   if(eyesClickCnt == 9){
     console.log("nineth click eyes, rewind back");
     eyesClickCnt = 0;
   }
   else{ console.log("click eyes "+ eyesClickCnt + " times");}
}
function noseClickHandler(){
    noseClickCnt += 1;
   if(noseClickCnt == 9){
     console.log("nineth click nose, rewind back");
     noseClickCnt = 0;
   }
   else{ console.log("click nose "+ noseClickCnt + " times");}

}
function mouthClickHandler(){
    mouthClickCnt += 1;
   if(mouthClickCnt == 9){
     console.log("nineth click mouth, rewind back");
     mouthClickCnt = 0;
   }
   else{ console.log("click mouth "+ mouthClickCnt + " times");}

}


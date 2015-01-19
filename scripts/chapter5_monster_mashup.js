var headClickCnt = 0;
var eyesClickCnt = 0;
var noseClickCnt = 0;
var mouthClickCnt = 0;
var lightningOnetimerID,lightningTwotimerID,lightningThreetimerID;
$(document).ready(function() {
    $("#head").click(faceClickHandler);
    $("#eyes").click(faceClickHandler);
    $("#nose").click(faceClickHandler);
    $("#mouth").click(faceClickHandler);

    ////add new features for chapter 7 19-Jan-2015--begin
    $("#btnRandm").click(randomizeFace);
    $("#btnRst").click(resetFace);
    ////////add new features for chapter 7 19-Jan-2015--end
    
    //setInterval
    //var intervalID = setInterval(lightning, 10000);
    lightning_one();
    lightning_two();
    lightning_three();
});
function getRandom(num){//return [1, num]
  return Math.floor(Math.random()*num + 1);
}
function randomizeFace(){
      //random head
      var idx,i;
      idx = getRandom(9);
      for(i = 0; i < idx; i++){
        $("#head").trigger('click');
      }
      idx = getRandom(9);
      for(i = 0; i < idx; i++){
        $("#eyes").trigger('click');
      }
      idx = getRandom(9);
      for(i = 0; i < idx; i++){
        $("#nose").trigger('click');
      }
      idx = getRandom(9);
      for(i = 0; i < idx; i++){
        $("#mouth").trigger('click');
      }
}
function resetFace(){
  $(".face").animate({left:0}, 200);
  
  for(part in facePartArr){
    facePartArr[part].partClickCnt = 0;
  }
}
/////////chapter 7 solve the lightning issue by using window.onfocus/.onblur properties
window.onfocus = onfocusResponse;
window.onblur = onblurResponse;
function onfocusResponse(){
    // lightning_one();
    // lightning_two();
    // lightning_three();
    lightningOnetimerID = setTimeout(lightning_one, 4000);
    lightningTwotimerID = setTimeout(lightning_two, 5000);
    lightningThreetimerID = setTimeout(lightning_three, 7000);

}
function onblurResponse(){
  clearTimeout(lightningOnetimerID);
  clearTimeout(lightningTwotimerID);
  clearTimeout(lightningThreetimerID);
}
////////chapter 7 solve the lightning issue by using window.onfocus/.onblur properties
var facePartArr = [{partName:'head', partClickCnt:0},{partName:'eyes', partClickCnt:0},{partName:'nose', partClickCnt:0},{partName:'mouth', partClickCnt:0}];
function faceClickHandler(e){
  //var objId = $(this).attr('id');///option1: important!!! how to get JQuery get element id from event.target
  //var objId = e.target.id;//option2:it return the img element , not div#head
  var objId = e.currentTarget.id;// option3, it also works as option 1;
  /////for more information about above issue, see evernote studylog:
  ///  Difference between $(this) and event.target Part 1/2
  var logInfo,facePartIdx;
  switch(objId){
    case "head":
        facePartIdx = 0;
        break;
    case "eyes":
        facePartIdx = 1;
        break;
    case "nose":
        facePartIdx = 2;
        break;
    case "mouth": 
        facePartIdx = 3;
        break;
    default:
      break;

  }
  facePartArr[facePartIdx].partClickCnt += 1;
  if( facePartArr[facePartIdx].partClickCnt >= 9){
     console.log("nineth click " + objId + " , rewind back");
     facePartArr[facePartIdx].partClickCnt = 0;
     $(this).animate({left:"+=2936px"}, 400);
   }
   else{ 
     console.log("click "+ objId + " "+ facePartArr[facePartIdx].partClickCnt + " times");
     $(this).animate({left:"-=367px"},400);
  }

}

function headClickHandler(){
   headClickCnt += 1;
   if(headClickCnt >= 9){
     console.log("nineth click head, rewind back");
     headClickCnt = 0;
     $("#head").animate({left:"+=2936px"}, 400);
   }
   else{ 
     console.log("click head "+ headClickCnt + " times");
     $("#head").animate({left:"-=367px"},400);
  }
}
function eyeClickHandler(){
   eyesClickCnt += 1;
   if(eyesClickCnt >= 9){
     console.log("nineth click eyes, rewind back");
     eyesClickCnt = 0;
     $("#eyes").animate({left:"+=2936px"}, 400);
   }
   else{ 
     console.log("click eyes "+ eyesClickCnt + " times");
     $("#eyes").animate({left:"-=367px"},400);
   }
}
function noseClickHandler(){
    noseClickCnt += 1;
   if(noseClickCnt >=9){
     console.log("nineth click nose, rewind back");
     noseClickCnt = 0;
     $("#nose").animate({left:"+=2936px"}, 400);
   }
   else{ 
      console.log("click nose "+ noseClickCnt + " times");
      $("#nose").animate({left:"-=367px"},400);
   }

}
function mouthClickHandler(){
    mouthClickCnt += 1;
    if(mouthClickCnt >= 9){
      console.log("nineth click mouth, rewind back");
      mouthClickCnt = 0;
      $("#mouth").animate({left:"+=2936px"}, 400);
    }
    else{ 
      console.log("click mouth "+ mouthClickCnt + " times");
      $("#mouth").animate({left:"-=367px"},400);
    }

}
function lightning_one(){
    $("#lightning1").fadeIn("250",function(){
        console.log("lighting1 fadeIn!");
    }).fadeOut("250",function(){
        console.log("lighting1 fadeOut!");
    });
    lightningOnetimerID = setTimeout(lightning_one, 4000);
}
function lightning_two(){
    $("#lightning2").fadeIn("fast", function() {
        console.log("lightning2 fadeIn!");
    }).fadeOut("fast", function() {
        console.log("lightning2 fadeOut!");
    });
    lightningTwotimerID = setTimeout(lightning_two, 5000);
}
function lightning_three(){
    $("#lightning3").fadeIn("fast", function() {
        console.log("lightning3 fadeIn!");
    }).fadeOut("fast", function() {
        console.log("lightning3 fadeOut!");
    });
    lightningThreetimerID = setTimeout(lightning_three, 7000);
}


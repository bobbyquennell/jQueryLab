console.log("begin with a.js:");
window.onload = function hello(){
    var scoops = 5;
    var pObj = document.getElementById("scoop");
 while(scoops >0){
    console.log("start to document.write");
    //document.write("Another scoop!<br>");
    pObj.innerHTML += "Another scoop!<br>";
    scoops -= 1;
 }
    pObj.innerHTML += "Life without ice cream isn't the same";
 //document.write("life without ice cream isn't the same");
 //var h1 = document.getElementById("header");
 //alert("hello");
};
console.log("end of a.js");
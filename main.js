
function stopWatch() {


var date = new Date();
var minutes =date.getMinutes();
var seconds = date.getSeconds();
var millseconds = date.getMilliseconds();
 

minutes =(minutes < 10)? "0" + minutes : minutes;
seconds =(seconds < 10)? "0" + seconds : seconds;
millseconds =(millseconds < 10)? "0" +millseconds :millseconds;
   

var time = minutes + ":" +seconds +"." +millseconds;
  

document.getElementById("stopwatch").innerHTML = time;
setTimeout( stopWatch , 1);

    
}

stopWatch();
 



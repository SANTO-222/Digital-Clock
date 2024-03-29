const clock = document.querySelector(".clock")

function runclock(){
var time = new Date();
console.log(time)
var hrs  = time.getHours()
var min  = time.getMinutes()
var sec  = time.getSeconds()
vartxt = "AM"
if(hrs>12){
    hrs  = hrs-12;
    txt = "PM"
}
else if(hrs==0){
    hrs = 12
    txt  ="AM"
}
hrs=hrs<10?'0'+hrs:hrs;
min=min<10?'0'+min:min;
sec=sec<10?'0'+sec:sec;
// console.log(`${hrs} : ${min} : ${sec}`)
clock.innerHTML = (`${hrs} : ${min} : ${sec}: ${txt}`)
}


setInterval(runclock,1000);
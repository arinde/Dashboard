// variable for time values
var countDownDate = new Date("December 2, 2023 00:00:00").getTime();

function timer(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var hours =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;
    
    if(distance < 0){
        clearInterval(x);
        document.getElementById("hours").innerHTML =  "00";
        document.getElementById("mins").innerHTML =  "00";
        document.getElementById("secs").innerHTML =  "00";
    }
}
var x = setInterval(timer, 1000)
function startTimer(duration, display) {
    let timer = duration
    let interval = 
        setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.innerHTML = `${minutes}:${seconds}`;
        if (--timer < 0) {
            clearInterval(interval);
        }
        animatedTimer(timer,duration)
    }, 1000);
    
}
function animatedTimer(timer,duration){
    console.log(timer)
    if(timer == duration - (duration / 10) * 1){
        document.getElementById('t10').setAttribute("style", "background-color:white")
    }else if(timer == duration - (duration / 10) * 2){
        document.getElementById('t9').setAttribute("style", "background-color:white")
    }else if(timer == duration - (duration / 10) * 3){
        document.getElementById('t8').setAttribute("style", "background-color:white")
    }else if(timer == duration - (duration / 10) * 4){
        document.getElementById('t7').setAttribute("style", "background-color:white")
    }else if(timer == duration - (duration / 10) * 5){
        document.getElementById('t6').setAttribute("style", "background-color:white")
    }else if(timer == duration - (duration / 10) * 6){
        document.getElementById('t5').setAttribute("style", "background-color:white")
    }else if(timer == duration - (duration / 10) * 7){
        document.getElementById('t4').setAttribute("style", "background-color:white")
    }else if(timer == duration - (duration / 10) * 8){
        document.getElementById('t3').setAttribute("style", "background-color:white")
    }else if(timer == duration - (duration / 10) * 9){
        document.getElementById('t2').setAttribute("style", "background-color:white")
    }else if(timer == duration - (duration / 10) * 10){
        document.getElementById('t1').setAttribute("style", "background-color:white")
    }
}
window.onload = function () {
    const duration = 60 * 2; 
    display = document.getElementById('timer');
    startTimer(duration, display); 
};
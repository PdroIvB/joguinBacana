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
<<<<<<< Updated upstream:script.js
};
=======
};

const dragImg = document.querySelector('.dragImg');
const imgDrop = document.querySelectorAll('.dropImg');

// dragImg listeners
dragImg.addEventListener('dragstart', dragStart);
dragImg.addEventListener('dragend', dragEnd);

// Loop through dropImg boxes and add listeners
for (const dropImg of imgDrop) {
  dropImg.addEventListener('dragover', dragOver);
  dropImg.addEventListener('dragenter', dragEnter);
  dropImg.addEventListener('dragleave', dragLeave);
  dropImg.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'dragImg';
  console.log("acertou")
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
//   this.className += ' hovered';
}

function dragLeave() {
  this.className = 'dropImg';
}

function dragDrop() {
  this.className = 'dropImg';
  this.append(dragImg);
}

function entrar_jogo(){
    window.location = "/front-end/jogao/primeira_fase/"
}

function entrar_instrucao(){
    window.location = "/front-end/jogao/tela_instrucao"
}

function voltar_tela_jogo(){
    window.location = "/front-end/jogao/tela_ranking"
}
>>>>>>> Stashed changes:front-end/jogao/tela_inicial/script.js

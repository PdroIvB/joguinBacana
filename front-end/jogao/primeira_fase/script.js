// $("#botao").click(helloWorld);
// $("#botao1").click(bla);

// function helloWorld() {
//   fetch("http://localhost:3000/helloworld")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       alert(response.message);
//     });
// }

// function bla() {
//   console.log("ok");
//   const objASerStrigifado = { data: { bla: "blabla" } };
//   const objetoNovo = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(objASerStrigifado),
//   };
//   fetch("http://localhost:3000/save-score", objetoNovo)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       alert(response.status);
//     });
// }

const aquariumPosition = $("#local-aquarium").position();
console.log(aquariumPosition, $("#local-aquarium").offset())
const rationPosition = $("#local-ration").position();
const ballsPosition = $("#local-balls").position();
const bowlPosition = $("#local-bowl").position();
const catFoodPosition = $("#local-catFood").position();
const certificatePosition = $("#local-certificate").position();

const imgRef2 = $('#imgRef2').offset();
console.log(imgRef2);
$(`#aquarium`).css({left:imgRef2.left, top:imgRef2.top});

$(".item").draggable({
  containment: "body",
});

$(".local-img").droppable({
  drop: function (event, ui) {
    console.log("drop");
    const localImg = $(this).attr("type-obj");
    const typeObj = ui.draggable.attr("type-obj");
    const position = $(this).position();    
    if (typeObj === localImg) {
      console.log("acertou");
      $(this).position() = ui.draggable.position()
      $(`#${localImg}`).css({left:position.left, top:position.top});
    } else {
      
    }

    //$("#score").html(score);
    ui.draggable.attr("inside", 1);
  },
  over: function (event, ui) {
    if (Number(ui.draggable.attr("inside"))) {
      //score -= Number(ui.draggable.attr("value"));
      //$("#score").html(score);
    }
  },
  out: function (event, ui) {
    //ui.draggable.attr("inside",0)
  },
});

/* function startTimer(duration, display) {
  let timer = duration;
  let interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = `${minutes}:${seconds}`;
    if (--timer < 0) {
      clearInterval(interval);
    }
    animatedTimer(timer, duration);
  }, 1000);
}
function animatedTimer(timer, duration) {
  console.log(timer);
  if (timer == duration - (duration / 10) * 1) {
    document
      .getElementById("t10")
      .setAttribute("style", "background-color:white");
  } else if (timer == duration - (duration / 10) * 2) {
    document
      .getElementById("t9")
      .setAttribute("style", "background-color:white");
  } else if (timer == duration - (duration / 10) * 3) {
    document
      .getElementById("t8")
      .setAttribute("style", "background-color:white");
  } else if (timer == duration - (duration / 10) * 4) {
    document
      .getElementById("t7")
      .setAttribute("style", "background-color:white");
  } else if (timer == duration - (duration / 10) * 5) {
    document
      .getElementById("t6")
      .setAttribute("style", "background-color:white");
  } else if (timer == duration - (duration / 10) * 6) {
    document
      .getElementById("t5")
      .setAttribute("style", "background-color:white");
  } else if (timer == duration - (duration / 10) * 7) {
    document
      .getElementById("t4")
      .setAttribute("style", "background-color:white");
  } else if (timer == duration - (duration / 10) * 8) {
    document
      .getElementById("t3")
      .setAttribute("style", "background-color:white");
  } else if (timer == duration - (duration / 10) * 9) {
    document
      .getElementById("t2")
      .setAttribute("style", "background-color:white");
  } else if (timer == duration - (duration / 10) * 10) {
    document
      .getElementById("t1")
      .setAttribute("style", "background-color:white");
  }
}
window.onload = function () {
  const duration = 60 * 2;
  display = document.getElementById("timer");
  startTimer(duration, display);
};
 */
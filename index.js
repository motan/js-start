const startScene = document.getElementById("start");
const gameScene = document.getElementById("game");
const startBtn = document.querySelector("#start-button");

function startGame(scene) {
  const num = Math.ceil(Math.random() * 100);
  let movesCount = 0;
  let minimum = 1;
  let maximum = 100;

  const form = scene.querySelector("#form");
  const input = form.querySelector("select");
  const lessField = scene.querySelector("#less");
  const moreField = scene.querySelector("#more");
  const movesField = scene.querySelector("#moves")

  buildSelect(input, minimum, maximum);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = Number(input.value);
    input.value = "";
    input.focus();
    movesCount++;
    movesField.innerText = movesCount;
  
    if (value > num) {
      lessField.innerText = value;
      maximum = value - 1;
      buildSelect(input, minimum, maximum);
    } else if (value < num) {
      moreField.innerText = value;
      minimum = value + 1;
      buildSelect(input, minimum, maximum);
    } else if (value === num) {
      showFinalScene(num, movesCount);
    }
  })
}

startBtn.addEventListener("click", () => {
  startScene.style.display = "none";
  gameScene.style.display = "block";
  startGame(gameScene);
});

function buildSelect(select, min, max) {
  select.innerHTML = "";
  for (let i = min; i <= max; i++) {
    const opt = document.createElement("option");
    opt.innerText = i;
    select.appendChild(opt);
  }
}

function showFinalScene(result, movesCount) {
  const finalScene = document.getElementById("final");
  gameScene.style.display = "none";
  finalScene.style.display = "block";
  const resultField = finalScene.querySelector(".congrats span");
  const movesField = finalScene.querySelector("span.moves");
  resultField.innerText = result;
  movesField.innerText = movesCount;
}

function startGame() {
  const resultEl = createInterface();
  const num = 10;

  function createInterface() {
    const root = document.getElementById("root");
    const resultEl = document.createElement("div");
    const inputEl = document.createElement("input");
    const buttonEl = document.createElement("button");
    root.appendChild(resultEl);
    root.appendChild(inputEl);
    root.appendChild(buttonEl);
    resultEl.innerText = "Hello. Please enter some number from 1 to 100";
    buttonEl.innerText = "Go";
  
    buttonEl.addEventListener("click", () => {
      checkResult(inputEl.value);
    })

    return resultEl;
  }

  function checkResult(answer) {
    const numAnswer = Number(answer);
    if (isNaN(numAnswer)) {
      resultEl.innerText = "Please enter a number"
    } else if (numAnswer > num) {
      resultEl.innerText = `Less than ${numAnswer}`
    } else if (numAnswer < num){
      resultEl.innerText = `More than ${numAnswer}`
    } else {
      resultEl.innerText = "Exactly"
    }
  }
}

//startGame();
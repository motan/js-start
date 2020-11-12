class Game {
  movesCount = 0
  num = 0
  maximum = 100
  minimum = 0
  scenes = {
    start: new Scene("#start"),
    game: new GameScene("#game"),
    final: new Scene("#final"),
  }

  buttons = {
    start: document.querySelector("#start-button"),
    restart: document.querySelector("#restart-button"),
  }
  
  constructor() {
    this.initForm();
    this.initButtons();
  }

  activateScene(name) {
    Object.entries(this.scenes).forEach(([key, scene]) => {
      const isActive = (key === name);
      scene.toggle(isActive);
    })
  }

  initButtons() {
    this.buttons.start.addEventListener("click", () => {
      this.activateScene("game");
      this.start();
    });
    
    this.buttons.restart.addEventListener("click", () => {
      this.activateScene("game");
      this.start();
    });
  }

  initForm() {
    const form = this.scenes.game.element.querySelector("#form")
    this.form = {
      element: form,
      select: form.querySelector("select"),
    }

    this.form.element.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = Number(this.form.select.value);
      this.form.select.value = "";
      this.form.select.focus();
      this.movesCount++;
      this.ui.movesField.innerText = this.movesCount;
    
      if (value > this.num) {
        this.ui.lessField.innerText = value;
        this.maximum = value - 1;
        this.buildSelect();
      } else if (value < this.num) {
        this.ui.moreField.innerText = value;
        this.minimum = value + 1;
        this.buildSelect();
      } else if (value === this.num) {
        this.showFinalScene();
      }
    })
  }

  start() {
    this.resetGame();
    this.buildSelect();
  }

  resetGame() {
    this.num = Math.ceil(Math.random() * 10);
    this.minimum = 1;
    this.maximum = 10;
    this.movesCount = 0;

    this.scenes.game.refresh();
  }

  buildSelect() {
    const { select } = this.form; 
    const min = this.minimum;
    const max = this.maximum;

    select.innerHTML = "";
    for (let i = min; i <= max; i++) {
      const opt = document.createElement("option");
      opt.innerText = i;
      select.appendChild(opt);
    }
  }

  showFinalScene() {
    this.activateScene("final");
    const resultField = this.scenes.final.querySelector(".congrats span");
    const movesField = this.scenes.final.querySelector("span.moves");
    resultField.innerText = this.num;
    movesField.innerText = this.movesCount;
  }

}

class Scene {

  constructor(query) {
    this.#element = document.querySelector(query);
  }

  show() {
    this.element.style.display = "block";
  }

  hide() {
    this.element.style.display = "none";
  }

  toggle(isActive) {
    this.element.style.display = isActive ? "block" : "none";
  }
}

class GameScene extends Scene {
  ui = {
    lessField: this.element.querySelector("#less"),
    moreField: this.element.querySelector("#more"),
    movesField: this.element.querySelector("#moves"),
  }

  refresh() {
    this.ui.lessField.innerText = this.maximum + 1;
    this.ui.moreField.innerText = this.minimum - 1;
    this.ui.movesField.innerText = this.movesCount;
  }
}

const game = new Game();

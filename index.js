const arr = [10, "sale", function() {}, [], {}];
const heroes = [
  {
    name: "Ricky",
    health: 500,
    attack: 10
  },
  {
    name: "Xena",
    health: 1000,
    attack: 20
  },
  {
    name: "Tania",
    health: 550,
    attack: 15
  },
  {
    name: "Morpheus",
    health: 300,
    attack: 100
  }
];

function sample(heroes) {
  return heroes.filter(item => item.health > 500).map(item => item.health).sort((a, b) => a - b)
}

console.log(sample(heroes));
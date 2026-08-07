// javascript program using 'this' keyword

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};
// hen.name // "Helen"
// hen.eggCount // 0
hen.layAnEgg(); // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

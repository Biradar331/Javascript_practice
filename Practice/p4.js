// JavaScript Arrays

const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];

const nameCorrections = {
  Lua: "Luna",
  Bellatrix: "Draco",
};

leaderboard.forEach((name, index) => {
  if (nameCorrections[name]) {
    leaderboard[index] = nameCorrections[name];
  }
});

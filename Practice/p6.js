// javascript to solve a problem on arrays using array function "Splice"

const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];

airplaneSeats[3].splice(1, 1, "Hugo"); // this code will replace the valuue 'null' to 'Hugo' in the fourth row.
console.log(airplaneSeats);

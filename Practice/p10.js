// javascript problem on a return statement

// DEFINE YOUR FUNCTION BELOW:
function capitalize(mess) {
  let mes = mess.charAt(0).toUpperCase() + mess.slice(1);
  return mes;
}
capitalize("eggplant"); // "Eggplant"
capitalize("pamplemousse"); // "Pamplemousse"
capitalize("squid"); //"Squid"

// javascript problem 2

// A bit more explicit solution:
function capitalize(word) {
  const firstLetterCapitalized = word[0].toUpperCase();
  const restOfTheString = word.slice(1);
  return firstLetterCapitalized + restOfTheString;
}
capitalize("eggplant"); // "Eggplant"
capitalize("pamplemousse"); // "Pamplemousse"
capitalize("squid"); //"Squid"

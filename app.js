// planeet peab sisaldama tag: "dangerous", "draconic", "fringe-world", "normal G", "rich"
// ei tohi sisaldada: "aquatic", "frozen", "low G", "high G", "poor", "quarantined"

const response = await fetch("./yl1_data.json");
const data = await response.json();
// console.log(typeof data);

const mustIncludeTags = ["dangerous", "draconic", "fringe-world", "normal G", "rich"];
const cantIncludeTags = ["aquatic", "frozen", "low G", "high G", "poor", "quarantined"];

// MEIE NÄITE PUHUL:
// 'every' kontrollib, kas KÕIK arrays olevad itemid on listis olemas
// 'some' kontrollib, kas vähemalt üks juba on olemas ja kui on, siis on vale.
const ourPlanet =  data.filter((planet) => mustIncludeTags.every((tag) => planet.tags.includes(tag)) && !cantIncludeTags.some((tag) => planet.tags.includes(tag)));

console.log(ourPlanet);
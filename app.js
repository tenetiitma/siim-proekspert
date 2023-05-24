// planeet peab sisaldama tag: "dangerous", "draconic", "fringe-world", "normal G", "rich"
// ei tohi sisaldada: "aquatic", "frozen", "low G", "high G", "poor", "quarantined"

const response = await fetch("./yl1_data.json");
const data = await response.json();
// console.log(typeof data);

const mustIncludeTags = ["dangerous", "draconic", "fringe-world", "normal G", "rich"];
const cantIncludeTags = ["aquatic", "frozen", "low G", "high G", "poor", "quarantined"];

const ourPlanet =  data.forEach((planet) => {
   mustIncludeTags.filter((tag) => mustIncludeTags.includes(tag))
});

console.log(ourPlanet);
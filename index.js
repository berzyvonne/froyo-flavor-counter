

// flavors prompt
const flavors = prompt(
  "Please enter a list of froyo flavors separated by a comma"
).split(",");

// empty object to store the froyo flavors
let flavorCounts = {};

for (let index = 0; index < flavors.length; index++) {
  const element = flavors[index];
  console.log(element);
}

// incremental flavor counts
if (flavorCounts[flavors]) {
  flavorCounts[flavors]++;
} else {
  flavorCounts[flavors] = 1;
}

// display the froyo flavor counts in a table
console.table(flavorCounts);



// flavors prompt
const flavors = prompt(
  "Please enter a list of froyo flavors separated by a comma"
).split(",");

// empty object to store the froyo flavors
let flavorCounts = {};

// for loop to iterate through the flavors array
for (let i = 0; i < flavors.length; i++) {
  const element = flavors[i];
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

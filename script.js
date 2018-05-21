let n = parseInt(prompt('Enter N'), 10);
let m = parseInt(prompt('Enter M'), 10);

let islandMap = [];
let table = document.getElementById('map');

for (let i = 0; i < n; i++) {
  islandMap[i] = [];
  let tr = table.appendChild(document.createElement("tr"));
  for (let j = 0; j < m; j++) {
    islandMap[i][j] = Math.floor(Math.random() * 2);
    tr.appendChild(document.createElement("th")).innerHTML = islandMap[i][j];
  }
}

let coordinates = [];

for (let i = 0; i < islandMap.length; i++) {
  for (let j = 0; j < islandMap[0].length; j++) {
    if (islandMap[i][j] === 1) {
      coordinates.push([(i + 1) * 10 + (j + 1)]);
    }
  }
}

let partsOfIslands = [];
let index = 0;

for (let i = coordinates.length - 1; i >= 0; i--) {
  for (let j = coordinates.length - 1; j >= 0; j--) {
    if (coordinates[i] - coordinates[j] === 10 || coordinates[i] - coordinates[j] === 1) {
      partsOfIslands[index] = coordinates[i].concat(coordinates[j]);
      index++;
    }
  }
}

let rowArray = [];
rowArray = [].concat(...partsOfIslands);
let unique = rowArray.filter((value, i) => {
  return rowArray.indexOf(value) === i;
});

let onesIsland = unique.map(value => {
  console.log(`value ${value}`);
  let index = coordinates.indexOf(value);
  console.log(`index ${index}`);
  if (index !== -1) {
    coordinates.slice(index, 1);
  }
});
//координаты в одномерный массив, удалить пары, оставить острова с 1 единицей.

console.log(onesIsland);
console.log(coordinates);

document.getElementById('result').innerHTML = 'кол. пар: ' + rowArray.length + ', кол. уник.: ' + unique.length;

function numberOfIslands(allCoordinates, adjoinIslands) {
  return allCoordinates.length - adjoinIslands.length;
}

// let count = numberOfIslands(coordinates, partsOfIslands);
// document.getElementById('result').innerHTML = 'Количество остравов ' + count;
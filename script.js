let n = parseInt(prompt('Enter N (rows)'), 10);
let m = parseInt(prompt('Enter M (columns)'), 10);

if (isNaN(n) && isNaN(m)) {
  n = 10;
  m = 10;
} else if (isNaN(n)) {
  n = m;
} else if (isNaN(m)) {
  m = n
}

let islandMap = [];
let coordinates = [];
let parts = [];
let normalizeParts = [];
let uniqueParts = [];
let color;
let length;
let tr;
let th;

let table = document.getElementById('map');

// create and fill island table
for (let i = 0; i < n; i++) {
  islandMap[i] = [];
  tr = table.appendChild(document.createElement("tr"));
  for (let j = 0; j < m; j++) {
    islandMap[i][j] = Math.floor(Math.random() * 2);
    th = document.createElement("th");
    th.setAttribute('id', `${i},${j}`);
    tr.appendChild(th).innerHTML = islandMap[i][j];
  }
}

// get coordinates
for (let i = 0; i < islandMap.length; i++) {
  for (let j = 0; j < islandMap[0].length; j++) {
    if (islandMap[i][j] === 1) {
      coordinates.push([i, j]);
    }
  }
}

// get beside parts
for (let i = 0; i < coordinates.length; i++) {
  for (let j = 0; j < coordinates.length; j++) {
    if (i !== j) {
      if (
        coordinates[i][0] - coordinates[j][0] === 0 &&
        coordinates[i][1] - coordinates[j][1] === -1
      ) {
        parts.push([coordinates[i]].concat([coordinates[j]]));
      } else if (
        coordinates[i][0] - coordinates[j][0] === -1 &&
        coordinates[i][1] - coordinates[j][1] === 0
      ) {
        parts.push([coordinates[i]].concat([coordinates[j]]));
      }
    }
  }
}

findConnectedParts = () => {
  for (let i = 0; i < parts.length; i++) {
    for (let j = 0; j < parts.length; j++) {
      if (i !== j) {
        for (let y = 0; y < parts[i].length; y++) {
          for (let x = 0; x < parts[j].length; x++) {
            if (parts[i][y] === parts[j][x]) {
              parts[i] = parts[i].concat(parts[j]);
              parts[j] = [];
            }
          }
        }
      }
    }
  }
}

// remove empty rows
normalizeLength = () => {
  normalizeParts = [];
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length !== 0) {
      normalizeParts.push(parts[i]);
    }
  }
}

// check all islands is joined
main = () => {
  findConnectedParts();
  length = normalizeParts.length;
  normalizeLength();
  if (length !== normalizeParts.length) {
    main();
  }
}
main();

// remove duplicate coordinates
for (let i = 0; i < normalizeParts.length; i++) {
  uniqueParts[i] = [];
  for (let j = 0; j < normalizeParts[i].length; j++) {
    if (uniqueParts[i].indexOf(normalizeParts[i][j]) < 0) {
      uniqueParts[i].push(normalizeParts[i][j]);
    }
  }
}

// left lonely island
for (let i = 0; i < uniqueParts.length; i++) {
  for (let j = 0; j < uniqueParts[i].length; j++) {
    if (coordinates.indexOf(uniqueParts[i][j]) > -1) {
      coordinates.splice(coordinates.indexOf(uniqueParts[i][j]), 1);
    }
  }
}

getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

if (coordinates.length !== 0) {
  coordinates.map((value) => {
    document.getElementById(value.toString()).style.backgroundColor = getRandomColor();
  })
}

if (uniqueParts.length !== 0) {
  uniqueParts.map((parts) => {
    color = getRandomColor();
    parts.map((value) => {
      document.getElementById(value.toString()).style.backgroundColor = color;
    })
  })
}

let count = coordinates.length + uniqueParts.length;
document.getElementById('result').innerHTML = 'Number of islands: ' + count;
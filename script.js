let n = parseInt(prompt('Enter N'), 10);
let m = parseInt(prompt('Enter M'), 10);

let table = document.getElementById('map');

if (isNaN(n) && isNaN(m)) {
  n = 8;
  m = 8;
} else if (isNaN(n)) {
  n = m;
} else if (isNaN(m)) {
  m = n
}

let islandMap = [];
let tr;
let th;

for (let i = 0; i < n; i++) { // create table map
  islandMap[i] = [];
  tr = table.appendChild(document.createElement("tr"));
  for (let j = 0; j < m; j++) {
    islandMap[i][j] = Math.floor(Math.random() * 2);
    th = document.createElement("th");
    th.setAttribute('id', `${i},${j}`);
    tr.appendChild(th).innerHTML = islandMap[i][j];
  }
}

let coordinates = [];

for (let i = 0; i < islandMap.length; i++) { 
  for (let j = 0; j < islandMap[0].length; j++) {
    if (islandMap[i][j] === 1) {
      coordinates.push([i, j]);
    }
  }
}

// let parts = [];

// for (let i = 0; i < coordinates.length; i++) {
//   for (let j = 0; j < coordinates.length; j++) {
//     if (i !== j) {
//       if (
//         coordinates[i][0] - coordinates[j][0] === 0 &&
//         Math.abs(coordinates[i][1] - coordinates[j][1]) === 1
//       ) {
//         parts.push([coordinates[i]].concat([coordinates[j]]));
//       } else if (
//         Math.abs(coordinates[i][0] - coordinates[j][0] === 1) &&
//         coordinates[i][1] - coordinates[j][1] === 0
//       ) {
//         parts.push([coordinates[i]].concat([coordinates[j]]));
//       }
//     }
//   }
// }

let ar = [];

coordinates.map(co => {
  coordinates.map(c => {
    if (co[0] - c[0] === 0 && co[1] - c[1] === -1) {
      ar.push([co].concat([c]));
      ind++;
    } else if (co[0] - c[0] === -1 && co[1] - c[1] === 0) {
      ar.push([co].concat([c]));
      ind++;
    }
  })
})

fuck = () => {
  ar.map((arg, i) => {
    ar.map((a, j) => {
      let p1 = ar[i];
      let p2 = ar[j];
      console.log(JSON.stringify(a));
      for (let y = 0; y < ar[i].length; y++) {
        for (let x = 0; x < a.length; x++) {
          if (i !== j) {
            if ((p1[y] === p2[0] || p1[y] === p2[1]) || (p1[y] === p2[x])) {
              //console.log(`p1=${p1}; p2=${p2}`);
              ar[i] = ar[i].concat(ar[j]);
              ar[j] = [];
              //console.log(JSON.stringify(arg));
            }
          }
        }
      }
    })
  })
}

// let n = 10;

// for (let i = 0; i < n; i++) {
//   for (let j = 1; j < (n - i); j++) {
//     //console.log(`j-1 = ${j-1}; j = ${j}`);
//   }
// }
// ar.reverse();

for (let i = 0; i < ar.length; i++) {
  console.log('first loop');
  for (let j = 0; j < ar.length; j++) {
    console.log('first loop');
    if (i !== j) {
      let a = ar[i];
      let b = ar[j];
      //console.log(`${a} ${b}`);
      for (let y = 0; y < ar[i].length; y++) {
        if (a[y] === b[0] || a[y] === b[1]) {
          console.log('first loop');
          ar[i] = ar[i].concat(ar[j]);
          ar[j] = [];
        }
      }
    }
  }
}
console.log(JSON.stringify(ar));

// ar.reverse();
// for (let i = 0; i < ar.length; i++) {
//   for (let j = 0; j < ar.length; j++) {
//     if (i !== j) {
//       let a = ar[i];
//       let b = ar[j];
//       //console.log(`${a} ${b}`);
//       for (let y = 0; y < ar[i].length; y++) {
//         if (a[y] === b[0] || a[y] === b[1]) {
//           console.log('second loop');
//           ar[i] = ar[i].concat(ar[j]);
//           ar[j] = [];
//         }
//       }
//     }
//   }
// }
console.log(JSON.stringify(ar));

//fuck();
//fuck();

let fake = [];

ar.map((el, i) => {
  if (el.length !== 0) {
    fake.push(el);
  }
})

for (let i = 0; i < fake.length; i++) {
  for (let j = 0; j < fake.length; j++) {
    if (i !== j) {
      let a = fake[i];
      let b = fake[j];
      //console.log(`${a} ${b}`);
      for (let y = 0; y < fake[i].length; y++) {
        for (let x = 0; x < fake[j].length; x++) {
          console.log(JSON.stringify(fake[j]));
          if (a[y] === b[x]) {
            console.log('second loop');
            fake[i] = fake[i].concat(fake[j]);
            fake[j] = [];
          }
        }
      }
    }
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// fake.map((arg, i) => {
//   fake.map((a, j) => {
//     let p1 = fake[i];
//     let p2 = fake[j];
//     //console.log(`${p1[0]}`);
//     for (let y = 0; y < fake[i].length; y++) {
//       if (i !== j) {
//         if (p1[y] === p2[0] || p1[y] === p2[1]) {
//           fake[i] = fake[i].concat(fake[j]);
//           fake[j] = [];
//         }
//       }
//     }
//   })
// })

// fake.map((arg, i) => {
//   fake.map((a, j) => {
//     let p1 = fake[i];
//     let p2 = fake[j];
//     //console.log(`${p1[0]}`);
//     for (let y = 0; y < fake[i].length; y++) {
//       if (i !== j) {
//         if ((p1[y] === p2[0] || p1[y] === p2[1]) || (p1[y] === p2[0] || p1[y] === p2[1])) {
//           fake[i] = fake[i].concat(fake[j]);
//           fake[j] = [];
//         }
//       }
//     }
//   })
// })

let fake2 = [];

fake.map((el, i) => {
  if (el.length !== 0) {
    fake2.push(el);
  }
})

fake2.map(p => {
  p.map(el => {
    let i0 = el[0];
    let i1 = el[1];
    //console.log(`${i0} ${i1}`);
    coordinates.map((c, i) => {
      if (i0 === c[0] && i1 === c[1]) {
        //console.log(`${c[0]} ${c[1]} ${i}`);
        coordinates.splice(i, 1);
      }
    })
  })
})

if (coordinates.length !== 0) {
  coordinates.map(coor => {
    document.getElementById(coor.toString()).style.backgroundColor = getRandomColor();
  })
}


if (fake2.length !== 0) {
  fake2.map(fa => {
    let col = getRandomColor();
    fa.map((f, i) => {
      document.getElementById(f.toString()).style.backgroundColor = col;
    })
  })
}

//координаты в одномерный массив, удалить пары, оставить острова с 1 единицей.

let count = coordinates.length + fake2.length;
document.getElementById('result').innerHTML = 'Количество остравов: ' + count;

function numberOfIslands(allCoordinates, adjoinIslands) {
  return allCoordinates.length - adjoinIslands.length;
}

// let count = numberOfIslands(coordinates, partsOfIslands);
// document.getElementById('result').innerHTML = 'Количество остравов ' + count;
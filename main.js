// const fs = require("fs/promises");

// async function main() {
//   try {
//     const first = await fs.readFile('first.txt', 'utf-8');
//     const second = await fs.readFile('second.txt', 'utf-8');

//     await fs.writeFile("third.txt", `${first} ${second}`);
//   } catch (er) {
//     console.log(er, "error");
//   }
// }

// main();


// const fs = require('fs/promises')

// async function main() {
//   try {
//     const random = await fs.readFile('random.txt', 'utf-8')

//     const splitted = random.split(' ')

//     console.log(splitted.length)

//   } catch (er) {
//     console.log(er, "error");
//   }
// }

// main();

const fs = require('fs/promises')

async function main() {
  try {
    const data = await fs.readFile('data.json', 'utf-8')

    const data2 = JSON.parse(data)

    const data3 = JSON.stringify(data2.filter(el => el.age >= 18))

    console.log(data3)

  } catch (er) {
    console.log(er, "error");
  }
}

main();
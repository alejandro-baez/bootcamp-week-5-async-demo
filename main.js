const path = require("path");
const { readFile, writeFile } = require("fs").promises;

async function main() {
  console.log("==== Synchronous ===");
  let newPokemon = {
    name: "Pikachu",
    type: "Electric",
  };

  console.log("New pokemon created");

  let dbArray = [];
  console.log("db array created");

  dbArray.push(newPokemon);
  console.log("pokemon added to db");
  console.log(dbArray);

  console.log("==== Asynchronous ====");

  //Promise is used to handle an asynchronous operation in JS as they are objects that represent a value that may not be available yet but will be resolved eventually
  // console.log(__dirname) //Absolute path

  const buffer = await readFile(path.join(__dirname, "pokemonDb.txt"));
  console.log(buffer);

  const db = JSON.parse(buffer);
  // console.log(db)

  db.push(newPokemon);

  console.log(db);
  const presave = JSON.stringify(db);

  await writeFile(path.join(__dirname, "pokemonDb.txt"), presave);

}

main();

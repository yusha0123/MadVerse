import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedData() {
  const pokemonArray = [
    {
      name: "Bulbasaur",
      types: ["grass", "poison"],
      sprite: "https://pokemon.com/pictures/bulbasaur.png",
    },
    {
      name: "Ivysaur",
      types: ["grass", "poison"],
      sprite: "https://pokemon.com/pictures/ivysaur.png",
    },
    {
      name: "Venusaur",
      types: ["grass", "poison"],
      sprite: "https://pokemon.com/pictures/venusaur.png",
    },
    {
      name: "Charmander",
      types: ["fire"],
      sprite: "https://pokemon.com/pictures/charmander.png",
    },
    {
      name: "Charmeleon",
      types: ["fire"],
      sprite: "https://pokemon.com/pictures/charmeleon.png",
    },
    {
      name: "Charizard",
      types: ["fire", "flying"],
      sprite: "https://pokemon.com/pictures/charizard.png",
    },
    {
      name: "Squirtle",
      types: ["water"],
      sprite: "https://pokemon.com/pictures/squirtle.png",
    },
    {
      name: "Wartortle",
      types: ["water"],
      sprite: "https://pokemon.com/pictures/wartortle.png",
    },
    {
      name: "Blastoise",
      types: ["water"],
      sprite: "https://pokemon.com/pictures/blastoise.png",
    },
    {
      name: "Caterpie",
      types: ["bug"],
      sprite: "https://pokemon.com/pictures/caterpie.png",
    },
    {
      name: "Metapod",
      types: ["bug"],
      sprite: "https://pokemon.com/pictures/metapod.png",
    },
    {
      name: "Butterfree",
      types: ["bug", "flying"],
      sprite: "https://pokemon.com/pictures/butterfree.png",
    },
    {
      name: "Weedle",
      types: ["bug", "poison"],
      sprite: "https://pokemon.com/pictures/weedle.png",
    },
    {
      name: "Kakuna",
      types: ["bug", "poison"],
      sprite: "https://pokemon.com/pictures/kakuna.png",
    },
    {
      name: "Beedrill",
      types: ["bug", "poison"],
      sprite: "https://pokemon.com/pictures/beedrill.png",
    },
    {
      name: "Pidgey",
      types: ["normal", "flying"],
      sprite: "https://pokemon.com/pictures/pidgey.png",
    },
    {
      name: "Pidgeotto",
      types: ["normal", "flying"],
      sprite: "https://pokemon.com/pictures/pidgeotto.png",
    },
    {
      name: "Pidgeot",
      types: ["normal", "flying"],
      sprite: "https://pokemon.com/pictures/pidgeot.png",
    },
    {
      name: "Rattata",
      types: ["normal"],
      sprite: "https://pokemon.com/pictures/rattata.png",
    },
    {
      name: "Raticate",
      types: ["normal"],
      sprite: "https://pokemon.com/pictures/raticate.png",
    },
    {
      name: "Spearow",
      types: ["normal", "flying"],
      sprite: "https://pokemon.com/pictures/spearow.png",
    },
    {
      name: "Fearow",
      types: ["normal", "flying"],
      sprite: "https://pokemon.com/pictures/fearow.png",
    },
    {
      name: "Ekans",
      types: ["poison"],
      sprite: "https://pokemon.com/pictures/ekans.png",
    },
    {
      name: "Arbok",
      types: ["poison"],
      sprite: "https://pokemon.com/pictures/arbok.png",
    },
    {
      name: "Pikachu",
      types: ["electric"],
      sprite: "https://pokemon.com/pictures/pikachu.png",
    },
    {
      name: "Raichu",
      types: ["electric"],
      sprite: "https://pokemon.com/pictures/raichu.png",
    },
  ];

  await prisma.pokemon.createMany({
    data: pokemonArray,
  });
}

seedData()
  .then(() => console.log("Seed Successful!"))
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

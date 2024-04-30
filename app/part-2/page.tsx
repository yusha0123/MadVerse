"use client";

import { useState } from "react";
import { Search } from "@mui/icons-material";
import { dividerClasses, IconButton, Paper } from "@mui/material";
import Select, { MultiValue } from "react-select";
import PokedexTable from "@/components/PokedexTable";
import { trpc } from "@/utils/trpc";
import Loading from "@/components/Loading";

const Part2Page = () => {
  const pokemonArray = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
  ];

  const options = pokemonArray.map((pokemon) => ({
    label: pokemon,
    value: pokemon,
  }));

  const [selectedOptions, setSelectedOptions] = useState<MultiValue<{
    value: string;
    label: string;
  }> | null>(null);

  const pokemonsSelected = selectedOptions?.map((option) => option.value);

  const pokemonData = trpc.getPokemonArray.useQuery(
    pokemonsSelected ? pokemonsSelected : []
  );

  return (
    <main>
      <Paper
        elevation={3}
        sx={{
          maxWidth: { xs: "90%", sm: "75%", md: "50%", lg: "400px" },
          mx: "auto",
          padding: "1rem",
          marginY: "2rem",
        }}
      >
        <h3 className="text-2xl font-bold text-center my-2">
          Search Pokemons By Array
        </h3>
        <Select
          isMulti
          name="colors"
          options={options}
          onChange={setSelectedOptions}
        />
      </Paper>
      <PokedexTable pokemonData={pokemonData} />
      {pokemonData?.isLoading && <Loading />}
    </main>
  );
};

export default Part2Page;

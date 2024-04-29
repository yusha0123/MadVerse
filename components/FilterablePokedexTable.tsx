"use client";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { trpc } from "@/utils/trpc";
import { useState } from "react";
import PokedexTable from "./PokedexTable";
import PokemonTypeSelection from "./PokemonTypeSelection";

const FilterablePokedexTable = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const pokemonData = trpc.getPokemonByType.useQuery(
    selectedType ? selectedType : "all"
  );

  const selectType = (type: string | undefined) => {
    setSelectedType(type);
  };

  return (
    <section>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={pokemonData?.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={selectType}
      />
      <PokedexTable pokemonData={pokemonData} />
    </section>
  );
};

export default FilterablePokedexTable;

"use client";

import { MenuItem, Paper, Select, SelectChangeEvent } from "@mui/material";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection = ({
  selectType,
  selectedType,
}: PokemonTypeSelectionProps) => {
  const handleTypeChange = (e: SelectChangeEvent<string>) => {
    selectType(e.target.value);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: { xs: "90%", sm: "75%", md: "50%", lg: "400px" },
        mx: "auto",
        padding: "1rem",
        marginY: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center",
      }}
    >
      <h3 className="text-2xl font-bold text-center my-2">
        Search Pokemons By Type
      </h3>
      <Select
        value={selectedType || "all"}
        onChange={handleTypeChange}
        fullWidth
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="grass">Grass</MenuItem>
        <MenuItem value="poison">Poison</MenuItem>
        <MenuItem value="fire">Fire</MenuItem>
        <MenuItem value="water">Water</MenuItem>
        <MenuItem value="bug">Bug</MenuItem>
        <MenuItem value="flying">Flying</MenuItem>
        <MenuItem value="normal">Normal</MenuItem>
        <MenuItem value="electric">Electric</MenuItem>
      </Select>
    </Paper>
  );
};

export default PokemonTypeSelection;

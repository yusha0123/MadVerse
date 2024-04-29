"use client";

import { Box, Paper, Select, MenuItem, SelectChangeEvent } from "@mui/material";

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
    <Box>
      <Paper
        elevation={3}
        sx={{
          maxWidth: { xs: "90%", sm: "75%", md: "50%", lg: "400px" },
          mx: "auto",
          padding: "1rem",
          marginY: "2rem",
        }}
      >
        <h2 className="heading">Select Pokemon Type</h2>
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
    </Box>
  );
};

export default PokemonTypeSelection;

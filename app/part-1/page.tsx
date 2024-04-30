"use client";

import { StyledTableCell, StyledTableRow } from "@/components/Customized";
import PokemonRow from "@/components/PokemonRow";
import { trpc } from "@/utils/trpc";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

const Part1Page = () => {
  const [pokemonName, setPokemonName] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const pokemon = trpc.getPokemonByName.useQuery(pokemonName);

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
        <TextField
          fullWidth
          value={pokemonName}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Enter Pokemon Name"
        />
      </Paper>
      {pokemonName !== "" && !pokemon?.isLoading && (
        <TableContainer
          component={Paper}
          sx={{ width: "90%", mb: "50px", mx: "auto", maxWidth: "1024px" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Types</StyledTableCell>
                <StyledTableCell align="center">Sprite</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!pokemon.data ? (
                <StyledTableRow>
                  <StyledTableCell align="center" colSpan={4}>
                    No data available
                  </StyledTableCell>
                </StyledTableRow>
              ) : (
                <PokemonRow pokemon={pokemon.data} />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {pokemon?.isLoading && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={9999}
        >
          <CircularProgress />
        </Box>
      )}
    </main>
  );
};

export default Part1Page;

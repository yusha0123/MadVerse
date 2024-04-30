"use client";

import { StyledTableCell, StyledTableRow } from "@/components/Customized";
import Loading from "@/components/Loading";
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
        <h3 className="text-2xl font-bold text-center my-2">
          Search Pokemon By Name
        </h3>
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
      {pokemon?.isLoading && <Loading />}
    </main>
  );
};

export default Part1Page;

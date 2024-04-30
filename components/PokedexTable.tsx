import {
  Grow,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Pokemon } from "@prisma/client";
import { UseTRPCQueryResult } from "@trpc/react-query/shared";
import React, { useState } from "react";
import { StyledTableCell, StyledTableRow } from "./Customized";
import PokemonRow from "./PokemonRow";

type PokedexTableProps = {
  pokemonData: UseTRPCQueryResult<Pokemon[], any>;
};

const PokedexTable = ({ pokemonData }: PokedexTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (!pokemonData?.data || pokemonData?.data.length === 0) return null;

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const slicedData = pokemonData.data.slice(startIndex, endIndex);

  return (
    <Grow in={true} timeout={1000}>
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
            {slicedData.map((pokemon) => (
              <PokemonRow key={pokemon.id} pokemon={pokemon} />
            ))}
            {slicedData.length === 0 && (
              <StyledTableRow>
                <StyledTableCell align="center" colSpan={4}>
                  No data available
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          component="div"
          count={pokemonData?.data?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Grow>
  );
};

export default PokedexTable;

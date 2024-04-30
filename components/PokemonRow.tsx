import { Pokemon } from "@prisma/client";
import { StyledTableCell, StyledTableRow } from "./Customized";

type PokedexTableProps = {
  pokemon: Pokemon;
};

const PokemonRow = ({ pokemon }: PokedexTableProps) => {
  return (
    <StyledTableRow key={pokemon.id}>
      <StyledTableCell align="center">{pokemon.id}</StyledTableCell>
      <StyledTableCell align="center">{pokemon.name}</StyledTableCell>
      <StyledTableCell align="center">
        {pokemon.types.join(", ")}
      </StyledTableCell>
      <StyledTableCell align="center">{pokemon.sprite}</StyledTableCell>
    </StyledTableRow>
  );
};

export default PokemonRow;

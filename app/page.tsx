import FilterablePokedexTable from "@/components/FilterablePokedexTable";
import { Box, Button, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <main
      style={{
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: { xs: "90%", sm: "75%", md: "50%", lg: "400px" },
          mx: "auto",
          padding: "2rem",
        }}
      >
        <Image
          src={"/images/pokemon-icon.svg"}
          alt="pokemon-icon"
          width={200}
          height={50}
          style={{
            margin: "0 auto",
            display: "block",
          }}
        />
        <h1
          style={{
            marginBottom: "1rem",
          }}
        >
          Pokedex Problem
        </h1>
        <Box display={"flex"} gap={3} flexWrap={"wrap"}>
          <Link href={"/part-1"}>
            <Button variant="contained">Part 1</Button>
          </Link>
          <Link href={"/part-2"}>
            <Button variant="contained">Part 2</Button>
          </Link>
          <Link href={"/part-3"}>
            <Button variant="contained">Part 3</Button>
          </Link>
        </Box>
      </Paper>
    </main>
  );
};

export default Homepage;

import FilterablePokedexTable from "@/components/FilterablePokedexTable";
import { Box, Button, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <main className="h-[100dvh] flex items-center justify-center">
      <Paper
        elevation={3}
        sx={{
          maxWidth: { xs: "90%", sm: "75%", md: "50%", lg: "440px" },
          mx: "auto",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Image
          src={"/images/pokemon-icon.svg"}
          alt="pokemon-icon"
          width={50}
          height={50}
        />
        <h1 className="text-3xl text-gray-900 font-bold">Pokedex Problem</h1>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
          <Link href={"/part-1"}>
            <Button variant="contained">Part 1</Button>
          </Link>
          <Link href={"/part-2"}>
            <Button variant="contained">Part 2</Button>
          </Link>
          <Link href={"/part-3"}>
            <Button variant="contained">Part 3</Button>
          </Link>
        </div>
      </Paper>
    </main>
  );
};

export default Homepage;

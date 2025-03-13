import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import { HStack } from "@chakra-ui/react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

 const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);


  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav"  "main"`,
          lg: `"nav nav"  "aside main"`, //1024 px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        {showAside && (
          <GridItem area="aside" paddingX={5}>
            <GenreList  onSelectGenre={(genre) => {setGameQuery({...gameQuery, genre});}} selectedGenre={gameQuery.genre} />
          </GridItem>
        )}
        <GridItem area="main">
          <HStack paddingLeft={10}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => {setGameQuery({...gameQuery, platform});}} />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

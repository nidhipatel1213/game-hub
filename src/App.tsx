import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Grid templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav nav"  "aside main"`, //1024 px
      }}>
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        {showAside && (
          <GridItem area="aside">
            <h1>Aside</h1>
          </GridItem>
        )}
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

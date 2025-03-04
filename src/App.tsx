import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Grid templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav nav"  "aside main"`, //1024 px
      }}>
        <GridItem area="nav" bg="coral">
          <h1>Nav</h1>
        </GridItem>
        {showAside && (
          <GridItem area="aside" bg="pink">
            <h1>Aside</h1>
          </GridItem>
        )}
        <GridItem area="main" bg="orange">
          <h1>Main</h1>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MovieCreate from "components/movieCreateComponent";
import MovieSearch from "components/searchComponent";
import MovieList from "components/movieListComponent";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "pages/header";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function movie() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ width: "100%" }} m={5}>
          <Card variant="outlined">
            <CardContent>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <MovieCreate />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12}>
                      <Card variant="outlined">
                        <CardContent>
                          <MovieSearch />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card variant="outlined">
                        <CardContent>
                          <MovieList />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default movie;

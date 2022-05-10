import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { MovieDetailsContext } from "context/movieContext";

function MovieSearch() {
  const movieContext = React.useContext(MovieDetailsContext);
  const { movieData, initialMovieData } = movieContext;

  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = () => {
    if (searchValue) {
      let data = movieData.filter((val) => val.name.includes(searchValue));
      movieContext.setMovieData(data);
    } else {
      movieContext.setMovieData(initialMovieData);
    }
  };

  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        Search Movie
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={"text"}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleSearch}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Search Movie"
      />
    </FormControl>
  );
}

export default MovieSearch;

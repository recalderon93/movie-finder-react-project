import React from 'react';
import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import MovieList from '../components/MovieList/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';
import TopBar from '../components/TopBar/TopBar';
import useGetMoviesBySearchText from '../hooks/useGetMoviesBySearchText';

export default function SearchPage() {
  const { value, setValue, data, error } = useGetMoviesBySearchText();
  function resetHandler() {
    setValue('');
  }
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <TopBar />
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid container justifyContent="center" spacing="spacing">
          <Grid item>
            <SearchBar value={value} setValue={setValue} />
          </Grid>
        </Grid>
      </Grid>
      {data.length !== 0 ? <MovieList resetHandler={resetHandler} data={data} /> : null}
      {error ? <Alert severity="error">Oops, no Movies found. Please try again!</Alert> : null}
    </Box>
  );
}

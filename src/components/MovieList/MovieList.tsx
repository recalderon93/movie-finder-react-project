import React from 'react';
import { useNavigate, resolvePath } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material';
import { MovieItemInterface } from '../../services/types';

interface MovieListProps {
  data: MovieItemInterface[];
}
export default function MovieList({ data }: MovieListProps) {
  const navigate = useNavigate();
  function itemHandler(movieID: string) {
    return () => navigate(resolvePath(`movie/${movieID}`));
  }
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        minHeight: '50vh',
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="movie table">
          <TableHead>
            <TableRow>
              <TableCell>Movie Title</TableCell>
              <TableCell align="center">Release</TableCell>
              <TableCell align="center">Duration</TableCell>
              <TableCell align="center">Genres</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((movie) => (
              <TableRow key={movie.tconst} hover onClick={itemHandler(movie.tconst)} sx={{ cursor: 'pointer' }}>
                <TableCell component="th" scope="row">
                  {movie.primaryTitle}
                </TableCell>
                <TableCell align="center">{movie.startYear}</TableCell>
                <TableCell align="center">{movie.runtimeMinutes}</TableCell>
                <TableCell align="center">{movie.genres.replace(',', ', ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          minHeight: '10vh',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        mb={2}
      >
        <Button variant="contained">Reset</Button>
      </Box>
    </Container>
  );
}

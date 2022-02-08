import React from 'react';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MovieItemInterface } from '../../services/types';
import { ActorListItem } from '../../services/getMovieActorsList';

interface MovieCardProps {
  movieInfo: MovieItemInterface | null;
  actors: ActorListItem[];
}

interface ActorCardProps {
  fullname: string;
  birthYear: string;
  deathYear: string;
}

function ActorCard({ fullname, birthYear, deathYear }: ActorCardProps) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{fullname}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{`Year of Birth:   ${birthYear}`}</Typography>
        <Typography>{`Year of Death:   ${deathYear !== '\\N' ? deathYear : 'N/A'}`}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
export default function MovieCard({ movieInfo, actors }: MovieCardProps) {
  const navigate = useNavigate();
  function goBackHandler() {
    navigate(-1);
  }
  return (
    <Grid container alignItems="center" flexDirection="column" pb={4}>
      <Paper
        elevation={4}
        sx={{
          marginTop: 2,
          marginBottom: 6,
          pt: 2,
          minWidth: 300,
          width: '70vw',
          // minHeight: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        {movieInfo !== null ? (
          <>
            <Typography align="center" variant="h4" mb={4}>
              {movieInfo.primaryTitle}
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Description</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ flexGrow: 1 }}>
                {/* <Grid container justifyContent="space-between" pl={2} pr={2}>
                  <
                </Grid> */}
                <Typography>{`Release year: ${movieInfo.startYear}`}</Typography>
                <Typography>{`Genres: ${movieInfo.genres.replace(/,/g, ', ')}`}</Typography>
                <Typography mt="2">{`Duration: ${movieInfo.runtimeMinutes} minutes`}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                <Typography>Director</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {actors.map((actor) => {
                  if (actor.category === 'director') {
                    return (
                      <ActorCard
                        key={actor.nconst}
                        fullname={actor.primaryName}
                        birthYear={actor.birthYear}
                        deathYear={actor.deathYear}
                      />
                    );
                  }
                  return null;
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Actors</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {actors.map((actor) => {
                  if (actor.category === 'actor' || actor.category === 'actress') {
                    return (
                      <ActorCard
                        key={actor.nconst}
                        fullname={actor.primaryName}
                        birthYear={actor.birthYear}
                        deathYear={actor.deathYear}
                      />
                    );
                  }
                  return null;
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                <Typography>Producers</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {actors.map((actor) => {
                  if (actor.category === 'producer') {
                    return (
                      <ActorCard
                        key={actor.nconst}
                        fullname={actor.primaryName}
                        birthYear={actor.birthYear}
                        deathYear={actor.deathYear}
                      />
                    );
                  }
                  return null;
                })}
              </AccordionDetails>
            </Accordion>
          </>
        ) : null}
      </Paper>
      <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={goBackHandler}>
        Go Back
      </Button>
    </Grid>
  );
}

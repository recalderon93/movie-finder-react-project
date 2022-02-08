import React from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieInfo/MovieCard';
import TopBar from '../components/TopBar/TopBar';
import useGetMovieInfo from '../hooks/useGetMovieInfo';

export default function ProfilePage() {
  const params = useParams<{ movieID: string }>();
  const { actors, movieInfo } = useGetMovieInfo(params.movieID || '');
  return (
    <>
      <TopBar />
      <MovieCard movieInfo={movieInfo} actors={actors} />
    </>
  );
}

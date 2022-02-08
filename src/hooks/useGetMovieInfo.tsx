import { info } from 'console';
import React, { useEffect, useState } from 'react';
import { getMovieByID } from '../services';
import getMovieActorsList, { ActorListItem } from '../services/getMovieActorsList';
import { MovieItemInterface } from '../services/types';

export type GetMovieInfoResponse = {
  error: boolean;
  loading: boolean;
  movieInfo: MovieItemInterface | null;
  actors: ActorListItem[];
};

export default function useGetMovieInfo(movieID: string): GetMovieInfoResponse {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [movieInfo, setMovieInfo] = useState<MovieItemInterface | null>(null);
  const [actors, setActorList] = useState<ActorListItem[]>([]);

  async function getMovieInfo() {
    setLoading(true);
    setError(false);
    const [infoRes, actorListRes] = await Promise.all([getMovieByID(movieID), getMovieActorsList(movieID)]);
    if (infoRes.error === false) {
      setMovieInfo(infoRes.movie);
      if (actorListRes.error === false) {
        setActorList(actorListRes.actors);
      }
    } else {
      setError(true);
    }
    setLoading(false);
  }
  useEffect(() => {
    getMovieInfo();
  }, []);
  return {
    error,
    loading,
    movieInfo,
    actors,
  };
}

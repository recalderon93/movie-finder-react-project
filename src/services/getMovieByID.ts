import client from './client';
import { MovieItemInterface } from './types';

type GetMovieByIDResponse =
  | {
      error: false;
      movie: MovieItemInterface;
    }
  | {
      error: true;
      message: string;
    };
export default async (movieID: string): Promise<GetMovieByIDResponse> => {
  const movieList = await client.get<MovieItemInterface[]>('./dataMoviesRes.json');

  if (movieList.status === 200) {
    const result = movieList.data.find((item) => item.tconst === movieID);
    if (result) {
      return {
        error: false,
        movie: result,
      };
    }
    return {
      error: true,
      message: 'The ID is not valid',
    };
  }
  return {
    error: true,
    message: 'Bad response status',
  };
};

import client from './client';
import { MovieItemInterface } from './types';

type GetMoviesBySearchTextResponse =
  | {
      error: false;
      data: Array<MovieItemInterface>;
    }
  | { error: true; message: string };

export default async (input: string): Promise<GetMoviesBySearchTextResponse> => {
  if (input !== '') {
    const movieList = await client.get<MovieItemInterface[]>('./dataMoviesRes.json');
    if (movieList.status === 200) {
      const result = movieList.data.filter((item) => item.originalTitle.toLowerCase().includes(input.toLowerCase()));
      return { error: false, data: result };
    }
    return { error: true, message: 'Bad response status' };
  }
  return { error: true, message: 'There is not a valid input' };
};

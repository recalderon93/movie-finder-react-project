import client from './client';
import { ActorInfoInterface, ActorItemInterface } from './types';

export interface ActorListItem {
  nconst: string;
  ordering: string;
  category:
    | 'producer'
    | 'actor'
    | 'actress'
    | 'director'
    | 'writer'
    | 'editor'
    | 'composer'
    | 'cinematographer'
    | 'editor'
    | string;
  primaryName: string;
  birthYear: string;
  deathYear: string | '\\N';
}
type GetMovieActorsListResponse =
  | {
      error: false;
      actors: ActorListItem[];
    }
  | {
      error: true;
      message: string;
    };
export default async (movieID: string): Promise<GetMovieActorsListResponse> => {
  const response = await client.get<Record<string, ActorItemInterface[]>>('./actorListByTitle.json');
  const actorInfoResponse = await client.get<Record<string, ActorInfoInterface>>('./actorInfo.json');
  if (response.status === 200 || actorInfoResponse.status === 200) {
    const actorList = response.data[movieID];
    if (actorList) {
      const orderedList = actorList.sort((a, b) => {
        if (parseInt(a.ordering, 10) > parseInt(b.ordering, 10)) {
          return 1;
        }
        if (parseInt(a.ordering, 10) < parseInt(b.ordering, 10)) {
          return -1;
        }
        return 0;
      });
      const result = orderedList.map((item): ActorListItem => {
        const actorInfo = actorInfoResponse.data[item.nconst];
        return {
          nconst: item.nconst,
          ordering: item.ordering,
          category: item.category,
          primaryName: actorInfo.primaryName,
          birthYear: actorInfo.birthYear,
          deathYear: actorInfo.deathYear,
        };
      });
      return {
        error: false,
        actors: result,
      };
    }
    return { error: true, message: 'Invalid Actor list' };
  }
  return {
    error: true,
    message: 'Bad Response status',
  };
};

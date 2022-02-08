export interface MovieItemInterface {
  tconst: string;
  titleType: string;
  primaryTitle: string;
  originalTitle: string;
  isAdult: string;
  startYear: string;
  endYear: string;
  runtimeMinutes: string;
  genres: string;
}

export interface ActorItemInterface {
  tconst: string;
  ordering: string;
  nconst: string;
  category: string;
  job: string;
  characters: `${'\\N'}` | string[];
}
export interface ActorInfoInterface {
  nconst: string;
  primaryName: string;
  birthYear: string;
  deathYear: string;
  primaryProfession: string[];
  knownForTitle: string[];
}

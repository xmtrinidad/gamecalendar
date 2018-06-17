export interface Game {
  title: string;
  image: string;
  releaseDate: {month: string, day: string, year: string};
  platforms: string[];
}

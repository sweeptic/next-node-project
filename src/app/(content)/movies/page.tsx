import MoviesList from '@src/app/components/movies-list';
import { getAllMovies } from '@src/lib/movies';

export default async function Page() {
  const movies = await getAllMovies();

  return (
    <div>
      <h2>Movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
}

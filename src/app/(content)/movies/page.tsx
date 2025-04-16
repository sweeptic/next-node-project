import MoviesList from '@src/app/components/movies-list';
import { getMovies } from '@src/lib/movies';

export default async function Page() {
  const movies = await getMovies();

  return (
    <div>
      <h2>Movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
}

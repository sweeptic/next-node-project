import MoviesList from '@src/app/components/movies-list';
import { getLatestMovies } from '@src/lib/movies';

export default async function Page() {
  const movies = await getLatestMovies();

  return (
    <div>
      <h2>Latest Movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
}

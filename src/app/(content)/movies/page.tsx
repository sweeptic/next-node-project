import MoviesList from '@src/app/components/movies-list';

export default async function Page() {
  const fetchData = await fetch('http://localhost:8080/movies', {
    cache: 'no-store',
  });
  const data = await fetchData.json();

  return (
    <div>
      <h2>Movies</h2>
      <MoviesList movies={data.movies} />
    </div>
  );
}

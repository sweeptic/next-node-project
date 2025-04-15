import MoviesList from '@src/app/components/news-list';

// export const revalidate = 5;
export const dynamic = 'force-dynamic'; // no-store

export default async function Page() {
  // 'use server';
  const fetchData = await fetch('http://localhost:8080/movies', {
    cache: 'no-store',
  });
  const data = await fetchData.json();

  return (
    <div>
      <h2>news</h2>
      <MoviesList movies={data.movies} />
    </div>
  );
}

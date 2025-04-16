import Image from 'next/image';
import { getMovieDetails } from '@src/lib/movies';

export default async function Page({ params }: { params: Promise<{ _id: string }> }) {
  const { _id } = await params;

  const movieDetails = await getMovieDetails(_id);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>
        <span>Plot: </span>
        {movieDetails.fullplot}
      </p>
      <p>
        <span>Genres: </span>
        {movieDetails.genres}
      </p>
      <p>
        <span>Directors: </span>
        {movieDetails.directors}
      </p>
      <p>
        <span>Writers: </span>
        {movieDetails.writers}
      </p>
      <Image
        src={movieDetails.poster ?? `/assets/unavailable.jpg`}
        alt={movieDetails.title}
        width={200}
        height={300}
        priority={true}
      />
      <p></p>
    </div>
  );
}

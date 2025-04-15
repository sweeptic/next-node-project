import { IMovies } from '@src/backend/src/models/movies';
import Image from 'next/image';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function Page({ params }: { params: any }) {
  //   console.log('params', params.slug);
  const { _id } = await params;

  const movieData = await fetch(`http://localhost:8080/movies/${_id}`, {
    cache: 'no-store',
  });

  const { movieDetails }: { movieDetails: IMovies } = await movieData.json();

  //   console.log('movieDetail', movieDetails);

  //   console.log('_id', _id);

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

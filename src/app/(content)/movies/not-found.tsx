'use client';

import { redirect } from 'next/navigation';

export default function MovieNotFound() {
  return (
    <div id="error">
      <h1>Not Found!</h1>
      <p>Requested page could not found!</p>
      <button onClick={() => redirect('/movies')}>Go back</button>
    </div>
  );
}

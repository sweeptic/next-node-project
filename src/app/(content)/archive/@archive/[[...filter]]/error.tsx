'use client';

type PageProps = {
  error: { message: string };
};

export default function FilterError({ error }: PageProps) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}

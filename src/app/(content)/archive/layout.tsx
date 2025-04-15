export default function ArchiveLayout({ archive, latest }: { archive: React.ReactNode; latest: React.ReactNode }) {
  return (
    <div>
      <section>{archive}</section>
      <section>{latest}</section>
    </div>
  );
}

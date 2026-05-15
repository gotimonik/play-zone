export default function Loading() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="glass overflow-hidden rounded-lg">
          <div className="skeleton aspect-[16/10]" />
          <div className="space-y-3 p-4">
            <div className="skeleton h-4 rounded" />
            <div className="skeleton h-3 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

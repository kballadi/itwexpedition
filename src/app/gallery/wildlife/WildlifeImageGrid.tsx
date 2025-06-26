const images = [
  // Tigers
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  // Elephants
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
  // Leopards
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  // Dholes
  'https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=600&q=80',
  // Birds
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
  // More wildlife
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
];

const WildlifeImageGrid = () => (
  <section className="w-full bg-[#0C0C0C] py-12 px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-lg shadow-lg group">
          <img
            src={src}
            alt={`Wildlife ${i+1}`}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </section>
);

export default WildlifeImageGrid; 
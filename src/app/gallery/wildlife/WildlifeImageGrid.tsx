const images = [
  // Tigers
  '/images/gallery-wildlife/Jackal-Sunrise.png',
  '/images/gallery-wildlife/Magge-Waterpool.png',
  '/images/gallery-wildlife/Magge-Marking.png',
  '/images/gallery-wildlife/Kabini-Peacock.png',
  '/images/gallery-wildlife/Tusker-Coorg.jpg',
  '/images/gallery-wildlife/Herd-Kabini.jpg',
  '/images/gallery-wildlife/Chota-Dadiyal-Headon.png',
  '/images/gallery-wildlife/PavanDev-Tadoba .png',
  '/images/gallery-wildlife/Langur-Kabini.png',
  ];

const WildlifeImageGrid = () => (
  <section className="w-full bg-[#0C0C0C] py-12 px-6">
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center max-w-4xl">
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-lg shadow-lg group aspect-square">
          <img
            src={src}
            alt={`Wildlife ${i+1}`}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </section>
);

export default WildlifeImageGrid; 
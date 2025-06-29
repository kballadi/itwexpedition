import Image from 'next/image';

const HeroBannerWildlife = () => (
  <section className="relative w-full min-h-[100vh] flex items-center justify-center">
    {/* Background Image */}
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <Image
        src="/images/gallery-wildlife/cutlip_web.png"
        alt="Chota Dadiya;" sizes='100vw'
        fill
        style={{ objectFit: 'cover', objectPosition: 'center', opacity: 1 }}
        priority
        className="w-full h-full"
      />
    </div>
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
    {/* Content */}
    <div className="relative z-20 text-center px-4 max-w-2xl mx-auto">
      <h1 className="uppercase text-white text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">INDIAN WILDLIFE</h1>
      <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow max-w-xl mx-auto">
        India is home to one of the world's richest biodiversities, from the majestic <span className='font-semibold'>Royal Bengal Tiger</span> and elusive <span className='font-semibold'>Indian Leopard</span> to the gentle <span className='font-semibold'>Asiatic Elephant</span>. Our wild spaces are sanctuaries for countless rare and beautiful species, each playing a vital role in the ecosystem.
      </p>
    </div>
  </section>
);

export default HeroBannerWildlife; 
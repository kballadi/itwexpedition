import HeroBannerWildlife from './HeroBannerWildlife';
import WildlifeImageGrid from './WildlifeImageGrid';
import CopyrightNotice from './CopyrightNotice';

export default function WildlifeGalleryPage() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen">
      <HeroBannerWildlife />
      <WildlifeImageGrid />
      <CopyrightNotice />
    </main>
  );
} 
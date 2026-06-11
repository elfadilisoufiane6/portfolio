import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProjects from '@/components/FeaturedProjects';
import PricingSection from '@/components/PricingSection';
import Reviews from '@/components/Reviews';
import { PROJECTS } from '@/lib/data';
import { listProjectImages } from '@/lib/projectImages';

export default function HomePage() {
  // Build the slug -> cover URL map at build/render time (server side)
  const covers = {};
  for (const p of PROJECTS.fr) {
    const imgs = listProjectImages(p.slug);
    covers[p.slug] = imgs[0] || null;
  }

  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects covers={covers} />
      <PricingSection withCompareLink={true} />
      <Reviews />
    </>
  );
}

import ProjectsRenderer from '@/components/ProjectsRenderer';
import { PROJECTS } from '@/lib/data';
import { listProjectImages } from '@/lib/projectImages';

export const metadata = {
  title: 'Projets | Souf Web',
  description:
    'Découvrez nos projets web premium : hôtellerie, e-commerce, tourisme nautique. De vrais résultats pour de vrais clients.',
};

export default function ProjectsPage() {
  const imagesBySlug = {};
  for (const p of PROJECTS.fr) {
    imagesBySlug[p.slug] = listProjectImages(p.slug);
  }
  return <ProjectsRenderer imagesBySlug={imagesBySlug} />;
}

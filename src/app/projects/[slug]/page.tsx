import { config } from '@/app/config';
import Text from '../../components/Text/Text';
import { fetchData } from '@/app/utils/utils';
import { ProjectData } from '@/app/types';

export async function generateStaticParams() {
  const endpoint = '/projects';
  const projects = await fetchData<ProjectData[]>(
    config.api + endpoint + '/data.json'
  );
  return projects.map((project: ProjectData) => ({
    slug: project.slug,
  }));
}

export default function Project({ params }: { params: { slug: string } }) {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Text type='h1'>Coming Soon.</Text>
    </div>
  );
}

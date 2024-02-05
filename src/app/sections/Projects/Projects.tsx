import Project from '@/app/components/Project/Project';
import Text from '@/app/components/Text/Text';
import { ProjectData } from '@/app/types';
import { fetchData } from '@/app/utils/utils';
import { config } from '@/app/config';

export default async function Projects() {
  const endpoint = '/projects';
  const projects = await fetchData<ProjectData[]>(
    config.api + endpoint + '/data.json'
  );

  return (
    <section className='bg-white 2xl:px-12 xl:px-12 px-6 2xl:py-24 xl:py-24 py-12'>
      <div className='text-center'>
        <Text type='h2'>Work & Projects</Text>
      </div>
      <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:gap-12 xl:gap-12 gap-8 2xl:mt-24 xl:mt-24 mt-12'>
        {projects
          ? projects.map((project: ProjectData) => (
              <Project key={project.id} data={project} />
            ))
          : null}
      </div>
    </section>
  );
}

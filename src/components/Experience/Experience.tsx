import ExperienceItem from '@/components/ExperienceItem/ExperienceItem';
import { EXPERIENCE_DATA } from './data';

const Experience = () => {
  return (
    <div className='mt-[10rem]'>
      <ul>
        {EXPERIENCE_DATA.map((experience, index) => {
          const { jobTitle, company, date, description, techStack } =
            experience;
          return (
            <ExperienceItem
              key={index}
              jobTitle={jobTitle}
              company={company}
              date={date}
              description={description}
              techStack={techStack}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;

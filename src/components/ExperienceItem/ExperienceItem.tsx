import { Reveal } from '@/components/Reveal/Reveal';

interface IExperienceItem {
  jobTitle: string;
  company: string;
  date: string;
  description: string;
  techStack: string[];
}

const ExperienceItem = ({
  jobTitle,
  company,
  date,
  description,
  techStack,
}: IExperienceItem) => {
  return (
    <li className='group pl-5 pr-2 py-5 mb-2 relative rounded-lg last-of-type:mb-0 border-[1px] border-transparent hover:border-solid hover:border-[rgba(255,255,255,0.1)]'>
      <div className='absolute top-0 left-0 w-full h-full opacity-5 group-hover:bg-slate-50 duration-75 rounded-lg'></div>
      <Reveal>
        <h3 className='text-white text-lg font-bold flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
            />
          </svg>
          {jobTitle}
        </h3>
        <h4 className='text-white flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z'
            />
          </svg>
          {company}
        </h4>
        <p className='mb-3 flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
            />
          </svg>
          {date}
        </p>
        <p>{description}</p>
        <div className='mt-4'>
          <ul className='flex flex-wrap gap-2'>
            {techStack.map((tech, index) => {
              return (
                <li
                  key={index}
                  className='rounded-full bg-sky-700 px-3 py-1 text-sky-200'
                >
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </li>
  );
};

export default ExperienceItem;

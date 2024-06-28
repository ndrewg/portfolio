import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal/Reveal';
import { projectData } from './data';

export type ContributionsProps = {
  image: string;
  title: string;
  link: string;
  techStack: string[];
};

const Contributions = () => {
  const variants = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    hovered: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className='mt-20 pb-20'>
      <ul className='w-full'>
        {projectData &&
          projectData.map((project) => {
            const { image, title, link, techStack } = project;

            return (
              <li
                key={title}
                className='group mb-2 last-of-type:mb-0 relative rounded-lg border-[1px] border-transparent hover:border-solid hover:border-[rgba(255,255,255,0.1)]'
              >
                <div className='absolute top-0 left-0 w-full h-full opacity-5 group-hover:bg-slate-50 duration-75 rounded-lg'></div>
                <Reveal>
                  <a href={link} target='_blank'>
                    <motion.div
                      whileHover='hovered'
                      initial='initial'
                      className='flex gap-7 py-5 px-2'
                    >
                      {/* project image */}
                      <div className='basis-[30%] max-w-[150px] max-h-[90px] flex-shrink-0 overflow-hidden'>
                        <img
                          loading='lazy'
                          src={image}
                          alt={title}
                          className='w-full h-full object-cover duration-150 grayscale group-hover:grayscale-0'
                        />
                      </div>
                      {/* project desc */}
                      <div className='flex-1'>
                        <h3 className='mb-2 text-lg leading-5 text-slate-400 group-hover:text-white duration-150'>
                          {title}
                          <motion.div
                            variants={variants}
                            className='overflow-hidden relative inline-block'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='size-4 items-end inline-block ml-1'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                              />
                            </svg>
                          </motion.div>
                        </h3>
                        {/* tech stack */}
                        <ul className='flex flex-wrap gap-2'>
                          {techStack.map((tech) => {
                            return (
                              <li
                                key={`${tech} + ${Math.random()}`}
                                className='rounded-full bg-sky-700 px-3 py-1 text-sky-200 tracking-wide duration-150 group-hover:text-slate-900 group-hover:bg-sky-400'
                              >
                                <p>{tech}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </motion.div>
                  </a>
                </Reveal>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Contributions;

type ContributionsProps = {
  image: string;
  title: string;
  link: string;
  techStack: string[];
};

const projectData: ContributionsProps[] = [
  {
    image: '/projects/screencapture-harriswilliams-2024-06-10-15_39_56.png',
    title: 'Harris Williams',
    link: 'https://www.harriswilliams.com/',
    techStack: [
      'JavaScript',
      'TypeScript',
      'ReactJS',
      'NextJS',
      'GraphQL',
      'TailwindCSS',
      'Contentful',
      'Storybook',
    ],
  },
  {
    image: '/projects/screencapture-nrgmr-2024-06-10-15_48_06.png',
    title: 'National Research Group (NRG)',
    link: 'https://www.nrgmr.com/',
    techStack: [
      'JavaScript',
      'ReactJS',
      'GatsbyJS',
      'styled-components',
      'GraphQL',
      'Contentful',
      'Storybook',
    ],
  },
  {
    image: '/projects/screencapture-zetaglobal-2024-06-10-15_50_03.png',
    title: 'Zeta Global',
    link: 'https://zetaglobal.com/',
    techStack: [
      'HTML/SCSS',
      'Javascript',
      'Wordpress',
      'ParcelJS',
      'Pug Template Engine',
      'Elementor',
    ],
  },
  {
    image: '/projects/screencapture-golubcapital-2024-06-10-15_52_02.png',
    title: 'Golub Capital',
    link: 'https://golubcapital.com/',
    techStack: [
      'HTML/SCSS',
      'Javascript',
      'Wordpress',
      'Webpack',
      'Babel',
      'Elementor',
    ],
  },
  {
    image:
      '/projects/screencapture-commonwealthfund-org-2024-06-10-16_05_15.png',
    title: 'Commonwealth Fund',
    link: 'https://www.commonwealthfund.org/',
    techStack: ['Drupal', 'HTML', 'SCSS'],
  },
  {
    image: '/projects/screencapture-velveta-jp-2024-06-10-16_16_12.png',
    title: 'Velveta',
    link: 'https://www.velveta.jp/',
    techStack: [
      'HTML/SCSS',
      'Javascript',
      'ParcelJS',
      'Pug Template Engine',
      'Wordpress',
    ],
  },
  {
    image:
      '/projects/screencapture-attack-inc-co-jp-media-lp-2024-06-14-18_19_36.png',
    title: 'Attack Inc Media',
    link: 'https://www.attack-inc.co.jp/media-lp/',
    techStack: [
      'HTML/SCSS',
      'Javascript',
      'ParcelJS',
      'Pug Template Engine',
      'Wordpress',
    ],
  },
  {
    image: '/projects/screencapture-south22-clinic-2024-06-14-18_20_11.png',
    title: 'South Clinic',
    link: 'https://south22-clinic.com/',
    techStack: [
      'HTML/SCSS',
      'Javascript',
      'ParcelJS',
      'Pug Template Engine',
      'Wordpress',
    ],
  },
  {
    image: '/projects/screencapture-isikuni-co-jp-2024-06-14-18_20_59.png',
    title: 'Ishikuni',
    link: 'https://isikuni.co.jp/',
    techStack: [
      'HTML/SCSS',
      'Javascript',
      'ParcelJS',
      'Pug Template Engine',
      'Wordpress',
    ],
  },
  {
    image: '/projects/screencapture-fullmark-omiya-2024-06-14-19_23_34.png',
    title: 'Fullmark Omiya',
    link: 'https://fullmark-omiya.com/',
    techStack: [
      'HTML/SCSS',
      'Javascript',
      'ParcelJS',
      'Pug Template Engine',
      'Wordpress',
    ],
  },
];

const Contributions = () => {
  return (
    <section id='contributions' className='mt-20 pb-20'>
      <ul className='w-full'>
        {projectData &&
          projectData.map((project) => {
            const { image, title, link, techStack } = project;

            return (
              <li key={title} className='flex mb-6 gap-7 last-of-type:mb-0'>
                {/* project image */}
                <div className='basis-[30%] max-w-[150px] max-h-[90px] flex-shrink-0 overflow-hidden'>
                  <img
                    src={image}
                    alt={title}
                    className='w-full h-full object-cover'
                  />
                </div>
                {/* project desc */}
                <div className='flex-1'>
                  <h3 className='flex mb-2'>
                    <a
                      href={link}
                      target='_blank'
                      className='text-xl text-white'
                    >
                      {title}
                    </a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                      />
                    </svg>
                  </h3>
                  {/* tech stack */}
                  <ul className='flex flex-wrap gap-2'>
                    {techStack.map((tech) => {
                      return (
                        <li
                          key={`${tech} + ${Math.random()}`}
                          className='rounded-full bg-sky-700 px-3 py-1 text-sky-200'
                        >
                          <p>{tech}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Contributions;

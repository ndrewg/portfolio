import { Reveal } from '@/components/Reveal/Reveal';

const About = () => {
  return (
    <>
      <Reveal>
        <p className='mb-4'>
          Started my path as a frontend web developer back when we were
          developing our capstone project.{' '}
          <span className='text-white'>Twitter Bootstrap</span> and{' '}
          <span className='text-white'>jQuery</span> were my primary tools in
          building our user interface. Through the years of my career, I have
          worked on <span className='text-white'>CMS</span> projects, both with{' '}
          <span className='text-white'>Wordpress</span> and{' '}
          <span className='text-white'>ReactJS</span>, and a large application
          for an insurance company.
        </p>
      </Reveal>
      <Reveal>
        <p>
          Nowadays, I am focused on becoming fluent in frontend, then eventually
          become a fullstack developer. The goal is to build accessible user
          interface while also understanding how the processes work under the
          hood.
        </p>
      </Reveal>
    </>
  );
};

export default About;

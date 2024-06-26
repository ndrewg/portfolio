import { Reveal } from '../Reveal/Reveal';

const Header = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:basis-2/4 lg:pt-28'>
      <div>
        <Reveal>
          <h2 className='text-5xl text-white font-bold'>Mel Andrew Getutua</h2>
        </Reveal>
        <Reveal>
          <h5 className='text-2xl mt-2'>Frontend Developer</h5>
        </Reveal>
        <Reveal>
          <p className='mt-2'>
            Skilled in building user interfaces and web applications.
          </p>
        </Reveal>
      </div>
      <nav className='mt-10 md:mt-24'>
        <ul className='text-white'>
          <li className='mb-2'>
            <Reveal>
              <a href='#'>About</a>
            </Reveal>
          </li>
          <li className='mb-2'>
            <Reveal>
              <a href='#'>Experience</a>
            </Reveal>
          </li>
          <li className='mb-2'>
            <Reveal>
              <a href='#'>Projects / Contributions</a>
            </Reveal>
          </li>
          <li className='mb-2'>
            <Reveal>
              <a href=''>Contact</a>
            </Reveal>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import { useContext } from 'react';
import { Reveal } from '@/components/Reveal/Reveal';
import { AnimateContext } from '@/context/animate.context';
import { capitalizeFirstLetters } from '@/utils/string';

const links = ['about', 'experience', 'contributions', 'contact'];

const Header = () => {
  const { activeLink } = useContext(AnimateContext);

  // TODO:
  // Create icon object for social links

  return (
    <header className='lg:sticky lg:top-0 lg:basis-2/4 lg:pt-28'>
      <>
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
      </>
      <nav className='mt-10 md:mt-24'>
        <ul className='text-white'>
          {links.map((link) => (
            <li key={link}>
              <Reveal>
                <a href={`#${link}`} className='relative flex items-center'>
                  <span
                    className={`duration-200 h-[0.8px] bg-white ${
                      activeLink === link ? 'w-8 mr-1' : 'w-0'
                    }`}
                  />
                  {capitalizeFirstLetters(link)}
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </nav>
      <div className='mt-10'></div>
    </header>
  );
};

export default Header;

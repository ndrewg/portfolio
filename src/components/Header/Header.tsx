const Header = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:basis-2/4 lg:pt-28'>
      <div>
        <h2 className='text-5xl text-white font-bold'>Mel Andrew Getutua</h2>
        <h5 className='text-2xl mt-2'>Frontend Developer</h5>
        <p className='mt-2'>
          Skilled in building user interfaces and web applications.
        </p>
      </div>
      <nav className='mt-10 md:mt-24'>
        <ul className='text-white'>
          <li className='mb-2'>
            <a href='#'>About</a>
          </li>
          <li className='mb-2'>Experience</li>
          <li className='mb-2'>Projects / Contributions</li>
          <li className='mb-2'>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

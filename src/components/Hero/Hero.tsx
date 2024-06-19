const Hero = () => {
  return (
    <section className='min-h-[800px] flex items-center justify-between px-24'>
      <div className='basis-2/4'>
        <h2 className='text-7xl font-bold'>Mel Andrew Getutua</h2>
        <h5 className='text-3xl'>Frontend Developer</h5>
        <p className='text-xl mt-5'>
          Skilled in building user interfaces and web applications. Strong
          understanding of front-end development principles.
        </p>
      </div>
      <div className='basis-2/4 min-w-[350px] max-w-[350px] min-h-[350px] max-h-[350px] h-[350px] rounded-full border-2 border-slate-300 flex items-center justify-center overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src='/me-old.png'
          alt='self portrait'
        />
      </div>
    </section>
  );
};

export default Hero;

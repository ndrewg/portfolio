// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';

import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Header from '@/components/Header/Header';
import Contributions from './components/Contributions/Contributions';

const App = () => {
  return (
    <div className='w-full p-10 text-slate-400 block lg:flex lg:items-start lg:px-24'>
      <Header />
      <div className='basis-2/4 pt-28'>
        <About />
        <Experience />
        <Contributions />
      </div>
      {/* 
      tech stack/skills
      */}
      {/* contact */}
    </div>
  );
};

export default App;

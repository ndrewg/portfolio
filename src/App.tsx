import { useContext, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Header from '@/components/Header/Header';
import Contributions from '@/components/Contributions/Contributions';
import useScrollBlock from '@/hooks/useScrollBlock';
import { AnimateContext } from './context/animate.context';
import Loader from './components/Loader/Loader';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blockScroll] = useScrollBlock();
  const [showIntro, setShowIntro] = useState(true);
  const { shouldAnimate } = useContext(AnimateContext);

  useEffect(() => {
    blockScroll();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!shouldAnimate && (
          <Loader
            showIntro={showIntro}
            setShowIntro={setShowIntro}
            isLoaded={isLoaded}
          />
        )}
      </AnimatePresence>
      <div className='w-full p-10 text-slate-400 block lg:flex lg:items-start lg:px-24 overflow-hidden'>
        <Header />
        <div className='basis-2/4 pt-28'>
          <About />
          <Experience />
          <Contributions />
        </div>
        {/* TODO:
        Tech stack / skills
        Contact */}
      </div>
    </>
  );
};

export default App;

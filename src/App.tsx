import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Header from '@/components/Header/Header';
import Contributions from '@/components/Contributions/Contributions';
import useScrollBlock from '@/hooks/useScrollBlock';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateSubtitle, setAnimateSubtitle] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    blockScroll();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timerId);
  }, []);

  const handleSubtitleTransitionEnd = () => {
    setShowIntro(false);
  };

  return (
    <>
      <div className='w-full p-10 text-slate-400 block lg:flex lg:items-start lg:px-24 overflow-hidden'>
        <Header />
        <div className='basis-2/4 pt-28'>
          <About />
          <Experience />
          <Contributions />
          <motion.section
            animate={
              !showIntro && {
                opacity: 0,
                transitionDuration: '1400ms',
              }
            }
            onAnimationComplete={() => allowScroll()}
          >
            animation playground
            <div className='fixed top-0 left-0 w-full h-full bg-[rgba(51,65,85,.8)]'>
              <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center'>
                <h1
                  className='text-3xl md:text-6xl font-bold text-transparent text-stroke relative'
                  data-text='Mel Andrew Getutua'
                >
                  Mel Andrew Getutua
                  <motion.p
                    className='absolute top-0 left-0 w-0 h-full border-r-2 border-solid text-cyan-300 border-r-cyan-300 overflow-hidden whitespace-nowrap'
                    animate={
                      isLoaded && {
                        width: '100%',
                        transitionTimingFunction:
                          'cubic-bezier(.2,.87,.83,.96)',
                        transitionDuration: '600ms',
                      }
                    }
                    onTransitionEnd={() => setAnimateSubtitle(true)}
                  >
                    Mel Andrew Getutua
                  </motion.p>
                </h1>
                <motion.p
                  className='text-lg md:text-3xl font-bold h-0 overflow-hidden text-center'
                  animate={
                    animateSubtitle && {
                      height: 'fit-content',
                      maxHeight: '200px',
                      transitionTimingFunction: 'linear',
                      transitionDuration: '700ms',
                      transitionDelay: '700ms',
                    }
                  }
                  onTransitionEnd={handleSubtitleTransitionEnd}
                >
                  Frontend Developer
                </motion.p>
              </div>
            </div>
          </motion.section>
        </div>
        {/* 
      tech stack/skills
      */}
        {/* contact */}
      </div>
    </>
  );
};

export default App;

import { useContext, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Header from '@/components/Header/Header';
import Contributions from '@/components/Contributions/Contributions';
import useScrollBlock from '@/hooks/useScrollBlock';
import Loader from '@/components/Loader/Loader';
import { AnimateContext } from '@/context/animate.context';

const sections = { About, Experience, Contributions };

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blockScroll] = useScrollBlock();
  const [showIntro, setShowIntro] = useState(true);
  const { shouldAnimate, setActiveLink } = useContext(AnimateContext);

  useEffect(() => {
    !shouldAnimate && blockScroll();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timerId);
  }, []);

  const handleChangeLink = (
    inView: boolean,
    entry: IntersectionObserverEntry
  ) => {
    inView && setActiveLink(entry.target.getAttribute('id') as string);
  };

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
      <div className='w-full relative p-10 text-slate-400 block lg:flex lg:items-start lg:px-24 overflow-hidden md:overflow-visible lg:max-w-[1200px] lg:mx-auto'>
        <Header />
        <div className='basis-2/4 pt-28'>
          {Object.entries(sections).map(([key, Section]) => {
            return (
              <InView threshold={0.35} onChange={handleChangeLink} key={key}>
                {({ ref }) => (
                  <section ref={ref} id={key.toLowerCase()}>
                    <Section />
                  </section>
                )}
              </InView>
            );
          })}
        </div>
        {/* TODO:
        Tech stack / skills
        Contact */}
      </div>
    </>
  );
};

export default App;

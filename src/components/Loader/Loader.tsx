import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import useScrollBlock from '@/hooks/useScrollBlock';
import { AnimateContext } from '@/context/animate.context';

interface ILoaderProps {
  isLoaded: boolean;
  showIntro: boolean;
  setShowIntro: (bool: boolean) => void;
}

const Loader = ({ isLoaded, showIntro, setShowIntro }: ILoaderProps) => {
  const [animateSubtitle, setAnimateSubtitle] = useState(false);
  const [allowScroll] = useScrollBlock();
  const { setShouldAnimate } = useContext(AnimateContext);

  const hideLoader = () => {
    setShouldAnimate(true);
    allowScroll();
  };

  const handleSubtitleTransitionEnd = () => {
    setTimeout(() => {
      setShowIntro(false);
      setShouldAnimate(true);
    }, 900);
  };

  return (
    <motion.section
      exit={{
        opacity: 0,
      }}
      animate={
        !showIntro && {
          opacity: 0,
          transitionDuration: '1400ms',
        }
      }
      onAnimationComplete={hideLoader}
    >
      <div className='fixed top-0 left-0 z-[99] w-full h-full bg-[rgba(51,65,85,.8)]'>
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
                  transitionTimingFunction: 'cubic-bezier(.2,.87,.83,.96)',
                  transitionDuration: '600ms',
                }
              }
              onAnimationComplete={() => {
                setTimeout(() => {
                  setAnimateSubtitle(true);
                }, 700);
              }}
            >
              Mel Andrew Getutua
            </motion.p>
          </h1>
          <motion.p
            className='text-lg md:text-3xl text-slate-300 font-bold overflow-hidden text-center'
            animate={animateSubtitle && 'animate'}
          >
            {`Frontend Developer`.split('').map((letter, index) => (
              <motion.span
                variants={{
                  initial: { y: '-100%' },
                  animate: { y: 0 },
                }}
                initial='initial'
                key={index}
                className={`inline-block ${letter === ' ' ? 'mx-1' : ''}`}
                animate={animateSubtitle && 'animate'}
                transition={{
                  delay: 0.03 * index,
                }}
                onAnimationComplete={handleSubtitleTransitionEnd}
              >
                {letter}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Loader;

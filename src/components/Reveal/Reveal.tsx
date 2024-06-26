import { ReactNode, useContext, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { AnimateContext } from '@/context/animate.context';

interface IRevealProps {
  children: ReactNode;
}

export const Reveal = ({ children }: IRevealProps) => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: true });
  const mainControls = useAnimation();
  const { shouldAnimate } = useContext(AnimateContext);

  useEffect(() => {
    if (isInView && shouldAnimate) {
      mainControls.start('visible');
    }
  }, [isInView, shouldAnimate]);

  return (
    <div ref={divRef} className='relative overflow-hidden'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

import { motion } from 'framer-motion';
import landscape from '../../assets/landscape.png';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  scrollToProjects: () => void;
  showScroll: boolean;
}

export default function Hero({ scrollToProjects, showScroll }: HeroProps) {
  return (
    <div className="w-full h-screen overflow-hidden relative bg-[#63B3F9]">
      <img src={landscape} alt="landscape" className="absolute w-full h-full object-cover" />

      <motion.div
        className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#7FC74D] to-transparent"
        animate={{
          x: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ mixBlendMode: 'multiply' }}
      />

      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{ scaleX: [1, 1.01, 1, 0.99, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ mixBlendMode: 'soft-light' }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="quicksand-font text-5xl md:text-6xl font-semibold text-white drop-shadow-lg mb-4">
            Jean Yang
          </h1>
          <p className="quicksand-font mt-4 text-xl md:text-2xl text-white drop-shadow-md mb-10">
            built with love, cursed by scope creep
          </p>

          {showScroll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 1, duration: 2, repeat: Infinity }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={scrollToProjects}
            >
              <div className="scroll-text flex flex-col items-center">
                <p className="quicksand-font text-white">Scroll to explore</p>
                <ArrowDown className="text-white" size={24} />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

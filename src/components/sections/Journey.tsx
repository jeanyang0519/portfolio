import { motion } from 'framer-motion';
import { timelineEvents } from '@/data/timelineData';
import skyTileImage from '../../assets/sky_tile.png';

export default function Journey() {
  return (
    <section className="relative min-h-screen px-4 py-24 overflow-hidden bg-[#63B3F9]">
      {/* Wind-blowing background */}
      <div
        className="absolute top-0 left-0 w-[200%] h-full bg-repeat-x bg-[length:auto_100%] animate-windBlow z-0"
        style={{ backgroundImage: `url(${skyTileImage})` }}
      />
      <div className="absolute inset-0 bg-white/10 z-10" />
      <div className="relative">
        {/* Title */}
        <h2 className="relative z-20 text-center text-white text-4xl font-semibold tracking-wide mb-5">
          My Journey
        </h2>
        {/* Subtitel */}
        <h3 className="relative z-20 text-center text-white text-sm tracking-widest mb-20">
          spoiler: nothing went according to plan
        </h3>
      </div>
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-55 bottom-12 w-1 bg-white z-10 hidden sm:block transform -translate-x-1/2" />

      {/* Events */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col gap-20">
        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative w-full flex flex-col items-center md:items-${isLeft ? 'start' : 'end'} text-left`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white h-4 w-4 hidden sm:block rounded-full z-20 top-1" />

              {/* Date */}
              <div
                className={`text-base font-bold text-white mb-2 ${
                  isLeft ? 'md:ml-[calc(14%+1.5rem)]' : 'md:mr-[calc(14%+1.5rem)]'
                }`}
              >
                {event.date}
              </div>

              {/* Card */}
              <div
                className={`bg-white/60 hover:bg-white/90 shadow-md rounded-xl p-5 max-w-[90%] md:max-w-[45%] ${
                  isLeft ? 'md:ml-[calc(50%+1.5rem)]' : 'md:mr-[calc(50%+1.5rem)]'
                }`}
              >
                <h3 className="text-[#3C7A55] font-semibold text-lg mb-2">{event.title}</h3>
                <p className="text-gray-800 leading-relaxed text-base">{event.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

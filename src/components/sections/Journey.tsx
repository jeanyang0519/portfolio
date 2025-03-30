import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { timelineEvents } from "@/data/timelineData";
import skyTileImage from "../../assets/sky_tile.png";
import "./Journey.css";

export default function Journey() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div className="journey-container">
      {/* Scrolling background */}
      <div className="sky-bg" />
      <div className="overlay" />

      <div className="timeline-content">
        <h2 className="journey-title">My Journey</h2>
        <div className="timeline-line" />
        <div className="timeline-list">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 },
                },
              }}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="dot" />
              <span className={`card-date ${index % 2 === 0 ? "date-left" : "date-right"}`}>
                {event.date}
              </span>
              <div className="card">
                <h3 className="card-title">{event.title}</h3>
                <p className="card-desc">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { timelineEvents } from "@/data/timelineData";
import skyTileImage from "../../assets/sky_tile.png";
import "./Journey.css";

export default function Journey() {
  return (
    <section className="journey-section">
      <div
        className="sky-background"
        style={{ backgroundImage: `url(${skyTileImage})` }}
      />
      <div className="overlay" />

      <h2 className="journey-title">My Journey</h2>
      <div className="timeline-line" />

      <div className="events-wrapper">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="dot" />
            <div className="date">{event.date}</div>
            <div className="card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

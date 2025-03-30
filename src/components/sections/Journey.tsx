import { useEffect, useRef } from "react";
import { timelineEvents } from "@/data/timelineData";
import skyTileImage from "../../assets/sky_tile.png";
import "./Journey.css";

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll(".timeline-item");
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey-container" ref={sectionRef}>
      <div className="clouds" />
      <h2 className="journey-title">My Journey</h2>
      <div className="timeline-line" />
      <div className="timeline-events">
        {timelineEvents.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="dot" />
            <div className="card">
              <h3 className="card-title">{event.title}</h3>
              <p className="card-desc">{event.description}</p>
              <span className="card-date">{event.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

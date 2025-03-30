import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import landscape from "../assets/landscape.png";
import oceanImage from "../assets/ocean.png";
import skyTileImage from "../assets/sky_tile.png";
import sunsetImage from "../assets/contact/contact.png";
import { projectData } from "../data/projectData";
import {
  ExternalLink,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Globe

} from "lucide-react";

// Import contact images
import githubImage from "../assets/contact/github.png";
import linkedInImage from "../assets/contact/linkedIn.png";
import emailImage from "../assets/contact/email.png";

// Timeline data
const timelineEvents = [
  {
    id: 1,
    date: "Aug 2018",
    title: "Leveled Up to NYC: The Concrete Side Quest",
    description: "Dropped into Manhattan with a suitcase full of snacks and big dreams.",
  },
  {
    id: 2,
    date: "Sep 2018",
    title: "Columbia University: Enter the Ivory Tower",
    description: "Grad school begins. Coffee dependency intensifies. Imposter syndrome enters stage left.",
  },
  {
    id: 3,
    date: "Oct 2019",
    title: "Coding Bootcamp: Chaos Unleashed",
    description:
      "Jumped headfirst into curly braces and console logs. Slept occasionally. Cried frequently (in JavaScript).",
  },
  {
    id: 4,
    date: "Feb 2020",
    title: "Graduated x2: Master's + Bootcamp Combo Pack",
    description:
      "Diploma in one hand, keyboard in the other. Somehow survived both academia and bootcamp at once.",
  },
  {
    id: 5,
    date: "Mar 2020",
    title: "Amsterdam? Cancelled by a Global Plot Twist",
    description:
      "Had a sweet dev job lined up in Amsterdam, but then the world said 'psych' (thanks, COVID).",
  },
  {
    id: 6,
    date: "Aug–Oct 2020",
    title: "Berlin: Code, Currywurst, and Existential Dread",
    description:
      "Moved to Berlin for a frontend internship. Wrote code, ate pastries, questioned everything.",
  },
  {
    id: 7,
    date: "Jul–Oct 2021",
    title: "Interned in OKC: Yeehaw, but Make It Tech",
    description:
      "Joined Fast Enterprises as a software engineer intern. Saw my first tumbleweed. Shipped actual code.",
  },
  {
    id: 8,
    date: "Oct 2021",
    title: "Adult Job Unlocked: Moved to Philly",
    description:
      "Started full-time as a software engineer. Pretended to know what I was doing. Fooled everyone.",
  },
  {
    id: 9,
    date: "Feb 2022",
    title: "Denver Arc Begins: Still Debugging, Just with Better Views",
    description:
      "Coding from a mile high and occasionally questioning reality.",
  },
];

export default function LandingPage() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(true);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<number[]>(
    [],
  );

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navigateTimeline = (direction: "prev" | "next") => {
    if (direction === "prev" && activeTimelineIndex > 0) {
      setActiveTimelineIndex(activeTimelineIndex - 1);
    } else if (
      direction === "next" &&
      activeTimelineIndex < timelineEvents.length - 1
    ) {
      setActiveTimelineIndex(activeTimelineIndex + 1);
    }

    // Scroll to the active timeline item
    const activeElement = document.getElementById(
      `timeline-item-${activeTimelineIndex}`,
    );
    if (activeElement) {
      activeElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Track which timeline items are visible in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.id.split("-").pop() || "0");
          if (entry.isIntersecting) {
            setVisibleTimelineItems((prev) => [...prev, id].sort());
          } else {
            setVisibleTimelineItems((prev) =>
              prev.filter((item) => item !== id),
            );
          }
        });
      },
      { threshold: 0.5 },
    );

    timelineEvents.forEach((_, index) => {
      const element = document.getElementById(`timeline-item-${index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Hide scroll indicator when user has scrolled down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScroll(scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Card item animation
  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA]">
      {/* Hero Section */}
      <div className="w-full h-screen overflow-hidden relative bg-[#63B3F9]">
        {/* Background image */}
        <img
          src={landscape}
          alt="landscape"
          className="absolute w-full h-full object-cover"
        />

        {/* Grass animation */}
        <motion.div
          className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#7FC74D] to-transparent"
          animate={{
            x: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ mixBlendMode: "multiply" }}
        />

        {/* Tree movement simulation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ scaleX: [1, 1.01, 1, 0.99, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ mixBlendMode: "soft-light" }}
        />

        {/* Content */}
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

            {/* Scroll indicator */}
            {showScroll && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={scrollToProjects}
              >
                <div className="flex flex-col items-center">
                  <p className="quicksand-font text-white mb-2">
                    Scroll to explore
                  </p>
                  <ArrowDown className="text-white" size={24} />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        ref={projectsRef}
        className="min-h-screen py-12 md:py-0 px-4 relative flex items-center overflow-hidden"
      >
        {/* Ocean background */}
        <img
          src={oceanImage}
          alt="Ocean with waves"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto relative z-10 flex flex-col justify-center h-auto"
        >
          <h2 className="quicksand-font text-3xl md:text-4xl font-semibold text-white text-center mb-8 md:mb-10 drop-shadow-lg">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="bg-white/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-white/60"
              >
                {/* Image with animation */}
                <motion.div
                  className="w-full h-40 relative overflow-hidden flex justify-center bg-black/20 rounded-t-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-28 h-40 flex items-center justify-center p-4"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 2, -2, 0],
                      transition: { duration: 0.3 },
                    }}
                  >
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </motion.div>
                  {/* Gentle gradient overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/10 to-transparent"></div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="p-5 flex flex-col"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="quicksand-font text-xl font-semibold text-[#3C7A55] mb-3 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-700 mb-3 text-xs flex-grow line-clamp-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {project.shortDescription}
                  </motion.p>

                  {/* Tech tags */}
                  <motion.div
                    className="flex flex-wrap gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="bg-[#3C7A55]/10 text-[#3C7A55] px-2 py-0.5 rounded-full text-xs"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <motion.span
                        className="bg-[#3C7A55]/10 text-[#3C7A55] px-2 py-0.5 rounded-full text-xs"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.0 }}
                        viewport={{ once: true }}
                      >
                        +{project.technologies.length - 3}
                      </motion.span>
                    )}
                  </motion.div>

                  {/* Links */}
                  <motion.div
                    className="flex space-x-4 justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[#4EAED0] hover:text-[#63B3F9] transition-all duration-300 hover:gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-sm font-medium">Demo</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    )}

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#3C7A55] hover:text-[#7FC74D] transition-all duration-300 hover:gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-sm font-medium">GitHub</span>
                      <img src={githubImage} alt="GitHub" className="w-4 h-4 object-contain" />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div
        ref={timelineRef}
        className="min-h-screen py-16 px-4 relative flex items-center overflow-hidden"
      >

        {/* Sky background */}
        <div className="absolute inset-0 bg-[#63B3F9]"></div>

        {/* Infinite scrolling cloud animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[200%] h-full"
            style={{
              backgroundImage: `url(${skyTileImage})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
            }}
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          />
        </div>

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>

        {/* Container for timeline line, title, and events */}
        <div className="relative w-full max-w-5xl mx-auto z-10">
          {/* "My Journey" Title placed on top of the timeline container */}
          <h2 className="quicksand-font text-3xl md:text-4xl font-semibold text-white text-center drop-shadow-lg absolute left-1/2 top-0 transform -translate-x-1/2 z-20">
            My Journey
          </h2>

          {/* Vertical Timeline Line starting below the title */}
          <div className="absolute left-1/2 top-20 bottom-0 w-1 bg-white/70 rounded-full"></div>

          {/* Timeline events container (pushed down so events start below the title and timeline line offset) */}
          <div className="space-y-12 mt-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                id={`timeline-item-${index}`}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Date & Dot Row */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    {/* Dot on the timeline (centered) */}
                    <div className="bg-white/70 h-3 w-3 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                    {/* Date offset from the line */}
                    {/* Mobile date - always shown on top */}
                    <div className="md:hidden absolute top-[-20px] left-1/2 transform -translate-x-1/2">
                      <div className="text-white/90 font-bold text-xs bg-white/30 rounded-full px-2 py-0.5 backdrop-blur-sm">
                        {event.date}
                      </div>
                    </div>

                    {/* Desktop date - shown on left or right side */}
                    {index % 2 === 0 ? (
                      <div className="absolute left-full ml-4 hidden md:block">
                        <div className="text-white/70 font-bold text-sm">
                          {event.date}
                        </div>
                      </div>
                    ) : (
                      <div className="absolute right-full mr-4 hidden md:block">
                        <div className="text-white/70 font-bold text-sm">
                          {event.date}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile View: Cards always centered */}
                <div className="flex justify-center md:hidden">
                  <motion.div
                    className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-md max-w-[85%]"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="quicksand-font text-[#3C7A55] font-semibold text-lg">
                      {event.title}
                    </h3>
                    <p className="quicksand-font text-gray-800 text-sm">
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                {/* Desktop View: Alternating left/right cards */}
                {index % 2 === 0 ? (
                  // Even events: event card on the right side
                  <div className="hidden md:flex justify-end">
                    <motion.div
                      className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-md mr-10 max-w-[calc(40%-2rem)]"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="quicksand-font text-[#3C7A55] font-semibold text-lg">
                        {event.title}
                      </h3>
                      <p className="quicksand-font text-gray-800">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                ) : (
                  // Odd events: event card on the left side
                  <div className="hidden md:flex justify-start">
                    <motion.div
                      className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-md ml-10 max-w-[calc(40%-2rem)]"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="quicksand-font text-[#3C7A55] font-semibold text-lg">
                        {event.title}
                      </h3>
                      <p className="quicksand-font text-gray-800">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Contact Section */}
      <div className="min-h-screen py-16 px-4 relative flex items-center overflow-hidden">
        {/* Sunset background */}
        <img
          src={sunsetImage}
          alt="Beautiful sunset over mountain and ocean"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto relative z-10 flex flex-col justify-center items-center"
        >
          <h2 className="quicksand-font text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-lg">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* GitHub */}
            <motion.a
              href="https://github.com/jeanyang0519"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/30 backdrop-blur-md p-6 rounded-xl flex flex-col items-center text-center hover:bg-white/40 transition-all duration-300 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-transparent p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-all duration-35 w-29 h-29 flex items-center justify-center">
                <img src={githubImage} alt="GitHub" className="w-full h-full object-contain" />
              </div>
              <h3 className="quicksand-font text-xl font-semibold text-white mb-2">GitHub</h3>
              <p className="quicksand-font text-white/90 text-sm">jeanyang0519</p>
            </motion.a>



            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/jeanyang-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/30 backdrop-blur-md p-6 rounded-xl flex flex-col items-center text-center hover:bg-white/40 transition-all duration-300 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-transparent p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-all duration-35 w-29 h-29 flex items-center justify-center">
                <img src={linkedInImage} alt="LinkedIn" className="w-full h-full object-contain" />
              </div>
              <h3 className="quicksand-font text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="quicksand-font text-white/90 text-sm">jeanyang-engineer</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:jean05192015@gmail.com"
              className="bg-white/30 backdrop-blur-md p-6 rounded-xl flex flex-col items-center text-center hover:bg-white/40 transition-all duration-300 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-transparent p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-all duration-35 w-29 h-29 flex items-center justify-center">
                <img src={emailImage} alt="Email" className="w-full h-full object-contain" />
              </div>
              <h3 className="quicksand-font text-xl font-semibold text-white mb-2">Email</h3>
              <p className="quicksand-font text-white/90 text-sm">jeanyang0519@gmail.com</p>
            </motion.a>
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="quicksand-font text-white text-lg">
              Excited to connect in this vast chaos we call the internet
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projectData } from "@/data/projectData";
import oceanImage from "../../assets/ocean.png";
import githubImage from "../../assets/contact/github.png";

export default function Projects() {
  return (
    <div className="min-h-screen py-12 md:py-0 px-4 relative flex items-center overflow-hidden">
      <img
        src={oceanImage}
        alt="Ocean with waves"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto relative z-10 flex flex-col justify-center h-auto"
      >
        <h2 className="quicksand-font text-4xl md:text-5xl font-semibold text-white text-center mb-8 md:mb-10 drop-shadow-lg">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectData.map((project) => (
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
                <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/10 to-transparent"></div>
              </motion.div>

              <motion.div className="p-5 flex flex-col">
                <motion.h3 className="quicksand-font text-xl font-semibold text-[#3C7A55] mb-3 text-center">
                  {project.title}
                </motion.h3>
                <motion.p className="text-gray-700 mb-3 text-sm flex-grow line-clamp-4">
                  {project.shortDescription}
                </motion.p>
                <motion.div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="bg-[#3C7A55]/10 text-[#3C7A55] px-2 py-0.5 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <motion.span className="bg-[#3C7A55]/10 text-[#3C7A55] px-2 py-0.5 rounded-full text-sm">
                      +{project.technologies.length - 3}
                    </motion.span>
                  )}
                </motion.div>
                <motion.div className="flex space-x-4 justify-center">
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
  );
}

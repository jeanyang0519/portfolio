import { projectData } from '@/data/projectData';
import oceanImage from '../../assets/ocean.png';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section className="relative min-h-screen overflow-hidden py-20 px-4 bg-blue-300">
      {/* Ocean Background */}
      <img
        src={oceanImage}
        alt="Ocean background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-4xl  text-center mb-12 font-semibold drop-shadow-lg">My Projects</h2>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-40">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/70 hover:bg-white/90 rounded-xl shadow-lg p-6 flex flex-col justify-between"
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-24 h-24 object-contain mx-auto mb-4"
              />

              <h3 className="text-lg font-semibold text-green-700 mb-2 text-center">
                {project.title}
              </h3>

              <p className="text-base text-gray-800 mb-4 leading-relaxed text-left">
                {project.shortDescription}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-green-700/10 text-green-700 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs bg-green-700/10 text-green-700 px-2 py-0.5 rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4 text-sm font-medium">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-800 hover:underline"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-800 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

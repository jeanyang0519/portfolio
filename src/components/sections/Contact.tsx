
import { motion } from "framer-motion";
import sunsetImage from "../../assets/contact.png";
import githubImage from "../../assets/contact/github.png";
import linkedInImage from "../../assets/contact/linkedIn.png";
import emailImage from "../../assets/contact/email.png";

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4 relative flex items-center overflow-hidden">
      <img
        src={sunsetImage}
        alt="Beautiful sunset over mountain and ocean"
        className="absolute inset-0 w-full h-full object-cover"
      />

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
          <motion.a
            href="https://github.com/jeanyang0519"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/30 backdrop-blur-md p-4 rounded-xl flex flex-col items-center text-center hover:bg-white/40 transition-all duration-300 group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-transparent p-3 rounded-full mb-3 group-hover:bg-blue-200 transition-all duration-300 w-20 h-20 flex items-center justify-center">
              <img src={githubImage} alt="GitHub" className="w-full h-full object-contain" />
            </div>
            <h3 className="quicksand-font text-xl font-semibold text-white mb-1">GitHub</h3>
            <p className="quicksand-font text-white/90 text-sm">jeanyang0519</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/jeanyang-engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/30 backdrop-blur-md p-4 rounded-xl flex flex-col items-center text-center hover:bg-white/40 transition-all duration-300 group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-transparent p-3 rounded-full mb-3 group-hover:bg-blue-200 transition-all duration-300 w-20 h-20 flex items-center justify-center">
              <img src={linkedInImage} alt="LinkedIn" className="w-full h-full object-contain" />
            </div>
            <h3 className="quicksand-font text-xl font-semibold text-white mb-1">LinkedIn</h3>
            <p className="quicksand-font text-white/90 text-sm">jeanyang-engineer</p>
          </motion.a>

          <motion.a
            href="mailto:jean05192015@gmail.com"
            className="bg-white/30 backdrop-blur-md p-4 rounded-xl flex flex-col items-center text-center hover:bg-white/40 transition-all duration-300 group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-transparent p-3 rounded-full mb-3 group-hover:bg-blue-200 transition-all duration-300 w-20 h-20 flex items-center justify-center">
              <img src={emailImage} alt="Email" className="w-full h-full object-contain" />
            </div>
            <h3 className="quicksand-font text-xl font-semibold text-white mb-1">Email</h3>
            <p className="quicksand-font text-white/90 text-sm">jean05192015@gmail.com</p>
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
  );
}

import { motion } from 'framer-motion';
import sunsetImage from '../../assets/contact/goldenhour.png';
import githubImage from '../../assets/contact/github.png';
import linkedInImage from '../../assets/contact/linkedIn.png';
import emailImage from '../../assets/contact/email.png';

export default function Contact() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${sunsetImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30  z-0"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
      >
        <h2 className="text-white text-3xl md:text-4xl mb-12 quicksand-font drop-shadow-lg">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* GitHub */}
          <motion.a
            href="https://github.com/jeanyang0519"
            target="_blank"
            rel="noopener noreferrer"
            className="  rounded-xl p-6 flex flex-col items-center text-white hover:bg-white/30 transition-all group"
            whileHover={{ y: -5 }}
          >
            <img src={githubImage} alt="GitHub" className="w-16 h-16 object-contain mb-4" />
            <h3 className="text-xl font-semibold mb-1">GitHub</h3>
            <p className="text-sm text-white/90">jeanyang0519</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/jeanyang-engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-6 flex flex-col items-center text-white hover:bg-white/30 transition-all group"
            whileHover={{ y: -5 }}
          >
            <img src={linkedInImage} alt="LinkedIn" className="w-16 h-16 object-contain mb-4" />
            <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
            <p className="text-sm text-white/90">jeanyang-engineer</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:jeanyang0519@gmail.com"
            className=" rounded-xl p-6 flex flex-col items-center text-white hover:bg-white/30 transition-all group"
            whileHover={{ y: -5 }}
          >
            <img src={emailImage} alt="Email" className="w-16 h-16 object-contain mb-4" />
            <h3 className="text-xl font-semibold mb-1">Email</h3>
            <p className="text-sm text-white/90">jeanyang0519@gmail.com</p>
          </motion.a>
        </div>

        <motion.p
          className="text-white text-lg mt-16 quicksand-font"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Excited to connect in this vast chaos we call the internet
        </motion.p>
      </motion.div>
    </div>
  );
}

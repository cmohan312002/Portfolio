import { useState } from 'react';
import { Sun, Moon, Mail, Linkedin, Github, Download, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollTo('hero')}>Mohan Chilivery</h1>
            <div className="hidden md:flex gap-6 items-center text-sm font-medium">
              <button onClick={() => scrollTo('education')} className="hover:text-blue-500 dark:hover:text-blue-400">Education</button>
              <button onClick={() => scrollTo('experience')} className="hover:text-blue-500 dark:hover:text-blue-400">Experience</button>
              <button onClick={() => scrollTo('projects')} className="hover:text-blue-500 dark:hover:text-blue-400">Projects</button>
              <button onClick={() => scrollTo('skills')} className="hover:text-blue-500 dark:hover:text-blue-400">Skills</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-blue-500 dark:hover:text-blue-400">Contact</button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium bg-white dark:bg-gray-900">
              <button onClick={() => scrollTo('education')} className="hover:text-blue-500 dark:hover:text-blue-400">Education</button>
              <button onClick={() => scrollTo('experience')} className="hover:text-blue-500 dark:hover:text-blue-400">Experience</button>
              <button onClick={() => scrollTo('projects')} className="hover:text-blue-500 dark:hover:text-blue-400">Projects</button>
              <button onClick={() => scrollTo('skills')} className="hover:text-blue-500 dark:hover:text-blue-400">Skills</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-blue-500 dark:hover:text-blue-400">Contact</button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          )}
        </nav>

        {/* Hero Section Full Page */}
        <section id="hero" className="flex flex-col items-center justify-center h-screen px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Mohan 👋
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Software Engineer passionate about solving real-world problems through clean code and innovative tech.
          </motion.p>
          <div className="mt-6 flex gap-4">
            <a href="mailto:cmohan312002@gmail.com" className="hover:text-blue-500"><Mail /></a>
            <a href="https://linkedin.com/in/mohan-chilivery" target="_blank" rel="noreferrer" className="hover:text-blue-500"><Linkedin /></a>
            <a href="https://github.com/cmohan312002" target="_blank" rel="noreferrer" className="hover:text-blue-500"><Github /></a>
            <a
              href="/Mohan_Chilivery_Resume.pdf"
              download
              className="flex items-center gap-1 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </section>

      {/* Education & Experience */}
      <section id="education" className="bg-gray-50 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h3 className="text-3xl font-semibold mb-10 text-center" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>Education</motion.h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <h4 className="text-lg font-bold">Master of Computer Application</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">SIES College of Management Studies, Navi Mumbai (2024–26, Pursuing)</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <h4 className="text-lg font-bold">B.Sc. in Information Technology</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">SIES College of Commerce & Economics, Mumbai (2020–23, CGPA: 8.5)</p>
            </div>
          </div>

          <motion.h3 id="experience" className="text-3xl font-semibold mt-16 mb-10 text-center" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>Experience</motion.h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <h4 className="text-lg font-bold">Software Engineer – Carufus, Mumbai</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Dec 2023 – Oct 2024</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-700 dark:text-gray-300">
                <li>Built scalable web and automation tools including a PDF reformatter and booking systems.</li>
                <li>Developed F&B app for BBQ, AI-powered WhatsApp bot, and migrated WOW! MOMO backend to Node.js.</li>
                <li>Integrated Power Automate to extract orders and save them in Excel/SharePoint.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <h4 className="text-lg font-bold">Web Developer Intern – Shammit</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Oct 2023 – Nov 2023</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-700 dark:text-gray-300">
                <li>Created a web tool to scrape and display freelancer profiles for HR keyword search.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h3 className="text-3xl font-semibold mb-10 text-center" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>Projects</motion.h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* ...same projects as before */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 text-center">
        <motion.h3 className="text-3xl font-semibold mb-8" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>Tech Stack</motion.h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {/* ...skills tags */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3 className="text-3xl font-semibold mb-6" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>Get in Touch</motion.h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">Have a question or want to collaborate? Send me a message below!</p>
          <form className="space-y-4" action="https://formspree.io/f/mnqeqgvn" method="POST">
            <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900" />
            <input type="email" name="email" required placeholder="Your Email" className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900" />
            <textarea name="message" required rows="4" placeholder="Your Message" className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t dark:border-gray-700">
        <p className="text-sm">&copy; 2025 Mohan Chilivery. Built with ❤️ using React, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </div>
          </div>
  );
}

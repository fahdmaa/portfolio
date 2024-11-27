import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform",
      tech: ["React Native", "Firebase", "Stripe"],
      link: "#"
    },
    {
      title: "Project Three",
      description: "AI-powered data visualization dashboard",
      tech: ["Python", "TensorFlow", "D3.js"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "GraphQL",
    "Docker",
    "AWS"
  ];

  return (
    <div className="min-h-screen bg-white">
      <header>
        <nav className="fixed w-full bg-white shadow-md z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center space-x-4">
                <a href="#home">
                  <img 
                    src="https://images-platform.99static.com//5BDvCvaRI8b4x3LVBcAmVu9VGRg=/0x0:1969x1969/fit-in/500x500/99designs-contests-attachments/102/102761/attachment_102761163" 
                    alt="Portfolio Logo" 
                    className="h-10 w-auto"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = "/images/fallback-logo.png"; // Optional: fallback image
                    }}
                  />
                </a>
              </div>
              
              <div className="hidden md:flex items-center space-x-12">
                <a href="#home" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
                <a href="#projects" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>
                <a href="#skills" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">Skills</a>
                <a href="#contact" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                Menu
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <nav className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors">Home</a>
                <a href="#projects" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors">Projects</a>
                <a href="#skills" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors">Skills</a>
                <a href="#contact" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors">Contact</a>
              </nav>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="pt-32 pb-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center">
              <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
                Hi, I'm <span className="text-indigo-600">YourName</span>
              </h1>
              <p className="text-xl font-medium text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                A passionate full-stack developer crafting beautiful and functional web experiences
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <li key={techIndex} className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700">
                      View Project
                      <span className="ml-2" aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <li key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-center text-gray-800 font-medium">{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gray-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out if you'd like to connect!
            </p>
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Send Message
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p className="text-sm">© {new Date().getFullYear()} YourName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
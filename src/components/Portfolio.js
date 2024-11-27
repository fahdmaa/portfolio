import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  Dumbbell, 
  Briefcase, 
  Award, 
  User, 
  Mail, 
  Phone, 
  Calendar,
  Menu,
  X,
  ChevronRight,
  MessageSquare,
  Linkedin,
  Instagram,
  Twitter
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'Online',
    fitnessGoals: '',
    careerGoals: ''
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log('Form submitted:', formData);
  };

  const projects = [
    {
      title: "Fitness Transformation Program",
      description: "Comprehensive 12-week program combining strength training and nutritional guidance",
      category: "fitness",
      results: "15% average body fat reduction",
      tech: ["Strength Training", "Nutrition Planning", "Progress Tracking"],
      link: "#"
    },
    {
      title: "Career Transition Success",
      description: "Career coaching program for professionals seeking industry change",
      category: "career",
      results: "85% successful placement rate",
      tech: ["Resume Writing", "Interview Prep", "Job Search Strategy"],
      link: "#"
    },
    {
      title: "Corporate Wellness Initiative",
      description: "Combined fitness and career development program for corporate clients",
      category: "combined",
      results: "90% employee satisfaction",
      tech: ["Workplace Wellness", "Career Development", "Team Building"],
      link: "#"
    }
  ];

  const skills = {
    fitness: [
      "Strength Training",
      "Weight Loss Coaching",
      "Nutritional Guidance",
      "Fitness Assessments"
    ],
    career: [
      "Resume Writing",
      "Job Search Strategies",
      "Interview Coaching",
      "Networking Skills"
    ],
    certifications: [
      "Certified Personal Trainer (NASM)",
      "Career Development Professional (PARW)",
      "Nutrition Coach (PN1)",
      "Life Coach Certification (ICF)"
    ]
  };

  return (
    <>
      <Head>
        <title>John Doe | Personal Trainer & Career Coach | Empowering Your Fitness and Career Journey</title>
        <meta name="description" content="Certified personal trainer and career coach dedicated to helping clients achieve their fitness and professional goals. Transform your life with personalized training and career guidance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="John Doe | Personal Trainer & Career Coach" />
        <meta property="og:description" content="Transform your life with personalized training and career guidance." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="fixed w-full bg-white shadow-md z-50">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center space-x-4">
                <a href="#home" className="flex items-center space-x-2">
                  <Dumbbell className="h-8 w-8 text-indigo-600" />
                  <span className="font-bold text-xl text-gray-900">John Doe</span>
                </a>
              </div>
              
              <div className="hidden md:flex items-center space-x-12">
                <a href="#home" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>Home</span>
                </a>
                <a href="#projects" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1">
                  <Briefcase className="h-4 w-4" />
                  <span>Success Stories</span>
                </a>
                <a href="#skills" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1">
                  <Award className="h-4 w-4" />
                  <span>Expertise</span>
                </a>
                <a href="#contact" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>Contact</span>
                </a>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden border-t border-gray-100">
                <nav className="px-2 pt-2 pb-3 space-y-1">
                  <a href="#home" className="flex items-center space-x-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors">
                    <User className="h-4 w-4" />
                    <span>Home</span>
                  </a>
                  <a href="#projects" className="flex items-center space-x-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors">
                    <Briefcase className="h-4 w-4" />
                    <span>Success Stories</span>
                  </a>
                  <a href="#skills" className="flex items-center space-x-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors">
                    <Award className="h-4 w-4" />
                    <span>Expertise</span>
                  </a>
                  <a href="#contact" className="flex items-center space-x-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>Contact</span>
                  </a>
                </nav>
              </div>
            )}
          </nav>
        </header>

        <main>
          <section id="home" className="pt-32 pb-24 px-4">
            <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
                  Elevate Your <span className="text-indigo-600">Fitness</span> and <span className="text-indigo-600">Career</span>
                  <br />with Expert Guidance
                </h1>
                <p className="text-xl font-medium text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Personalized Training | Career Orientation | Job Search Strategies
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Start Your Journey Today
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </section>

          <section id="projects" className="py-24 bg-gray-50 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Success Stories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <p className="text-indigo-600 font-semibold mb-6">{project.results}</p>
                      <ul className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <li key={techIndex} className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <a href={project.link} className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700">
                        Learn More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="py-24 bg-white px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Expertise</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <Dumbbell className="h-6 w-6 text-indigo-600" />
                    <span>Fitness Training</span>
                  </h3>
                  <ul className="space-y-4">
                    {skills.fitness.map((skill, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-700">
                        <ChevronRight className="h-4 w-4 text-indigo-600" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <Briefcase className="h-6 w-6 text-indigo-600" />
                    <span>Career Coaching</span>
                  </h3>
                  <ul className="space-y-4">
                    {skills.career.map((skill, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-700">
                        <ChevronRight className="h-4 w-4 text-indigo-600" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                    <Award className="h-6 w-6 text-indigo-600" />
                    <span>Certifications</span>
                  </h3>
                  <ul className="space-y-4">
                    {skills.certifications.map((cert, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-700">
                        <ChevronRight className="h-4 w-4 text-indigo-600" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 bg-gray-50 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Get In Touch</h2>
              <p className="text-xl text-center text-gray-600 mb-12 leading-relaxed">
                Ready to transform your fitness and career? Let's work together to achieve your goals!
              </p>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Consultation Type</label>
                  <select 
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  >
                    <option value="Online">Online</option>
                    <option value="In-Person">In-Person</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-700">Fitness Goals</label>
                  <textarea 
                    name="fitnessGoals"
                    value={formData.fitnessGoals}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    rows="3"
                  ></textarea>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-700">Career Goals</label>
                  <textarea 
                    name="careerGoals"
                    value={formData.careerGoals}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    rows="3"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-indigo-600 text-white text-lg font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 mb-6">Connect with me on social media</p>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-white py-12 px-4 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">About</h3>
                <p className="text-gray-600">
                  Dedicated to helping clients achieve their fitness and professional goals through personalized training and career guidance.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Success Stories</a>
                  </li>
                  <li>
                    <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Expertise</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">Subscribe for tips on fitness and career development!</p>
                <form className="flex space-x-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
              <p className="text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
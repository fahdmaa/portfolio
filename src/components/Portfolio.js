import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  Briefcase, 
  Award, 
  User, 
  MessageSquare,
  Menu,
  X,
  ChevronRight,
  Target,
  TrendingUp,
  Users,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  BarChart,
  Lightbulb,
  Rocket
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentRole: '',
    careerGoals: '',
    preferredTime: 'Morning'
  });

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
    console.log('Form submitted:', formData);
  };

  const successStories = [
    {
      title: "Executive Leadership Transition",
      description: "Guided a mid-level manager to a C-suite position within 18 months through strategic career planning and leadership development",
      impact: "150% salary increase",
      strategies: ["Executive Presence Training", "Strategic Networking", "Board Presentation Skills"],
      sector: "Technology"
    },
    {
      title: "Career Pivot Success",
      description: "Facilitated a successful transition from traditional finance to FinTech leadership for a senior professional",
      impact: "Secured role at top-5 FinTech company",
      strategies: ["Industry Analysis", "Skills Translation", "Modern Tech Adaptation"],
      sector: "Finance"
    },
    {
      title: "Scale-up Growth Strategy",
      description: "Developed comprehensive career growth plans for emerging leaders in high-growth startups",
      impact: "90% promotion rate within 12 months",
      strategies: ["Leadership Development", "Team Management", "Growth Strategy"],
      sector: "Startups"
    }
  ];

  const expertise = {
    leadership: [
      "Executive Presence Development",
      "Strategic Decision Making",
      "Change Management",
      "Team Leadership"
    ],
    career: [
      "Career Strategy & Planning",
      "Executive Position Transition",
      "Salary Negotiation",
      "Personal Branding"
    ],
    specializations: [
      "Technology Sector Leadership",
      "Start-up to Scale-up Transition",
      "International Business Development",
      "Digital Transformation"
    ]
  };

  return (
    <>
      <Head>
        <title>John Anderson | Executive Career Strategist | Transforming Leaders & Organizations</title>
        <meta name="description" content="Expert career strategist specializing in executive leadership development, career transitions, and organizational transformation. Transform your professional trajectory with strategic guidance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="John Anderson | Executive Career Strategist" />
        <meta property="og:description" content="Transform your professional trajectory with strategic career guidance and executive development." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="fixed w-full bg-white shadow-md z-50">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center space-x-4">
                <a href="#home" className="flex items-center space-x-2">
                  <img 
                    src="/api/placeholder/200/80" 
                    alt="Anderson Consulting" 
                    className="h-12 w-auto"
                  />
                </a>
              </div>
              
              <div className="hidden md:flex items-center space-x-12">
                <a href="#methodology" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1">
                  <Target className="h-4 w-4" />
                  <span>Methodology</span>
                </a>
                <a href="#success-stories" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>Success Stories</span>
                </a>
                <a href="#expertise" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1">
                  <Award className="h-4 w-4" />
                  <span>Expertise</span>
                </a>
                <a href="#contact" className="text-base font-medium text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>Start Your Journey</span>
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
                  {/* Mobile menu items */}
                </nav>
              </div>
            )}
          </nav>
        </header>

        <main>
          <section id="home" className="pt-32 pb-24 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
                  Transform Your Career Path
                  <br />
                  <span className="text-indigo-600">Elevate Your Impact</span>
                </h1>
                <p className="text-xl font-medium text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Strategic career guidance for ambitious professionals seeking to maximize their potential and accelerate their journey to executive leadership.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Schedule a Strategy Session
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                  <a 
                    href="#success-stories" 
                    className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 text-lg font-medium rounded-xl hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border border-indigo-200"
                  >
                    View Success Stories
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="methodology" className="py-24 bg-white px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Approach to Career Excellence</h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Strategic Planning</h3>
                  <p className="text-gray-600">
                    Develop a clear roadmap for your career progression with actionable milestones and measurable objectives.
                  </p>
                </div>
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Skill Enhancement</h3>
                  <p className="text-gray-600">
                    Identify and develop crucial leadership competencies that set you apart in today's competitive landscape.
                  </p>
                </div>
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Execution Excellence</h3>
                  <p className="text-gray-600">
                    Transform strategy into reality with proven frameworks and ongoing support for sustainable success.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="success-stories" className="py-24 bg-gray-50 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Client Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="p-8">
                      <div className="text-indigo-600 font-semibold mb-4">{story.sector}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                      <p className="text-gray-600 mb-4">{story.description}</p>
                      <p className="text-indigo-600 font-semibold mb-6">{story.impact}</p>
                      <ul className="space-y-2">
                        {story.strategies.map((strategy, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-600">
                            <ChevronRight className="h-4 w-4 text-indigo-600" />
                            <span>{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="expertise" className="py-24 bg-white px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Areas of Expertise</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(expertise).map(([category, skills]) => (
                  <div key={category} className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                      {category === 'leadership' && <Users className="h-6 w-6 text-indigo-600" />}
                      {category === 'career' && <TrendingUp className="h-6 w-6 text-indigo-600" />}
                      {category === 'specializations' && <Award className="h-6 w-6 text-indigo-600" />}
                      <span className="capitalize">{category}</span>
                    </h3>
                    <ul className="space-y-4">
                      {skills.map((skill, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-700">
                          <ChevronRight className="h-4 w-4 text-indigo-600" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 bg-gray-50 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Begin Your Transformation</h2>
              <p className="text-xl text-center text-gray-600 mb-12 leading-relaxed">
                Take the first step towards accelerating your career trajectory. Schedule a complimentary strategy session to discuss your professional goals.
              </p>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
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
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
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
                  <label className="text-sm font-medium text-gray-700">Current Role</label>
                  <input 
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-700">Career Aspirations</label>
                  <textarea 
                    name="careerGoals"
                    value={formData.careerGoals}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    rows="3"
                    placeholder="Tell us about your career goals and what you'd like to achieve"
                    required
                  ></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Consultation Time</label>
                  <select 
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  >
                    <option value="Morning">Morning (9AM - 12PM)</option>
                    <option value="Afternoon">Afternoon (1PM - 5PM)</option>
                    <option value="Evening">Evening (6PM - 8PM)</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-indigo-600 text-white text-lg font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Schedule Strategy Session</span>
                  </button>
                </div>
              </form>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 mb-6">Connect with me on professional networks</p>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="mailto:contact@andersonconsulting.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <Mail className="h-6 w-6" />
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
                <h3 className="font-bold text-lg text-gray-900 mb-4">About Anderson Consulting</h3>
                <p className="text-gray-600">
                  Leading career strategy firm specializing in executive development, leadership transitions, and organizational transformation. Our proven methodologies drive measurable results.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#methodology" className="text-gray-600 hover:text-indigo-600 transition-colors">Our Methodology</a>
                  </li>
                  <li>
                    <a href="#success-stories" className="text-gray-600 hover:text-indigo-600 transition-colors">Success Stories</a>
                  </li>
                  <li>
                    <a href="#expertise" className="text-gray-600 hover:text-indigo-600 transition-colors">Areas of Expertise</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-4">Receive expert insights on career development and leadership strategies</p>
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
              <p className="text-sm">© {new Date().getFullYear()} Anderson Consulting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Portfolio;
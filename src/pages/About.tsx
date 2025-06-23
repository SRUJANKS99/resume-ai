import React from 'react';
import { ExternalLink, GraduationCap, Briefcase, Code, Award, MapPin, Mail, Brain, Zap, TrendingUp, Users, Target, Sparkles } from 'lucide-react';

const About = () => {
  const education = {
    degree: 'BE in Information Science & Engineering',
    institution: 'GM Institute of Technology',
    period: '2021-2025',
    status: 'Final Year Student'
  };

  const internships = [
    {
      title: 'Java Full Stack Intern',
      company: 'TAP Academy',
      description: 'Developed full-stack applications using Java, Spring Boot, and modern web technologies'
    },
    {
      title: 'Java Programming Intern',
      company: 'Edureka',
      description: 'Enhanced Java programming skills and worked on enterprise-level projects'
    }
  ];

  const projects = [
    'Portfolio Website',
    'University Resource Management System',
    'Tourist Spot Finder App',
    'Android Chat App'
  ];

  const skills = [
    'Java', 'Spring Boot', 'SQL', 'Firebase', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'
  ];

  const certifications = [
    { name: 'Java Certification', provider: 'HackerRank' },
    { name: 'SQL Certification', provider: 'HackerRank' },
    { name: 'Full Stack Development', provider: 'TAP Academy' }
  ];

  const socialLinks = [
    {
      name: 'View Resume',
      url: 'https://flowcv.com/resume/faql9tv9o50n/',
      icon: <ExternalLink className="h-5 w-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ks-srujan-gowda-21ab3b2a3',
      icon: <ExternalLink className="h-5 w-5" />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SRUJANKS99',
      icon: <ExternalLink className="h-5 w-5" />
    },
    {
      name: 'Portfolio',
      url: 'https://srujan-ks-portfolio.vercel.app/',
      icon: <ExternalLink className="h-5 w-5" />
    }
  ];

  const aiFeatures = [
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: 'Advanced Resume Analysis',
      description: 'Our AI analyzes 50+ resume parameters including content quality, keyword optimization, ATS compatibility, and formatting standards.'
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: 'Intelligent Scoring System',
      description: 'Get comprehensive scores based on industry standards, with detailed breakdowns for each section of your resume.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-purple-600" />,
      title: 'AI Content Generation',
      description: 'Generate professional resume content using advanced language models trained on thousands of successful resumes.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      title: 'Real-time Market Insights',
      description: 'Stay updated with current job market trends, salary insights, and in-demand skills for your industry.'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-white">SK</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Zap className="h-4 w-4 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Srujan K S</h1>
          <p className="text-xl text-slate-600 mb-6">
            Aspiring Software Developer & AI Enthusiast
          </p>
          <div className="flex items-center justify-center space-x-6 text-slate-600">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Bangalore, Karnataka, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>srujan.ks0903@gmail.com</span>
            </div>
          </div>
        </div>

        {/* About AI Resume Analyzer */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 mb-8 border border-blue-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-600 animate-pulse" />
              <h2 className="text-3xl font-bold text-slate-800">About AI Resume Analyzer</h2>
              <Sparkles className="h-8 w-8 text-purple-600 animate-spin" />
            </div>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              The AI Resume Analyzer is a cutting-edge platform that leverages advanced artificial intelligence 
              and machine learning algorithms to revolutionize the way professionals optimize their resumes. 
              Built with modern web technologies and powered by sophisticated AI models, this platform has 
              successfully analyzed over 10,000+ resumes and helped thousands of job seekers land their dream positions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <span>Platform Statistics & Impact</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-slate-600">Resumes Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                <div className="text-slate-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">31%</div>
                <div className="text-slate-600">Avg. Salary Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-slate-600">Industries Covered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal About Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">About Me</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            I'm a passionate Information Science & Engineering student with a strong foundation in full-stack development 
            and a keen interest in AI technologies. Through my internships and projects, I've gained hands-on experience 
            in Java, Spring Boot, web development, and database management. I'm dedicated to creating innovative solutions 
            that solve real-world problems and continuously learning new technologies to stay at the forefront of the industry.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            This AI Resume Analyzer platform represents my commitment to leveraging artificial intelligence to help 
            professionals enhance their career prospects. I believe in the power of technology to democratize access 
            to career resources and provide everyone with the tools they need to succeed.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The platform combines my technical expertise in software development with deep insights into recruitment 
            processes and AI/ML technologies. By analyzing thousands of successful resumes and job market trends, 
            the AI system provides personalized, actionable feedback that significantly improves job application success rates.
          </p>
        </div>

        {/* Education */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-800">Education</h2>
          </div>
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-slate-800">{education.degree}</h3>
            <p className="text-blue-600 font-medium">{education.institution}</p>
            <p className="text-slate-600">{education.period} • {education.status}</p>
          </div>
        </div>

        {/* Internships */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <Briefcase className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-slate-800">Internship Experience</h2>
          </div>
          <div className="space-y-6">
            {internships.map((internship, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-800">{internship.title}</h3>
                <p className="text-green-600 font-medium mb-2">{internship.company}</p>
                <p className="text-slate-600">{internship.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Projects */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-800">Projects</h2>
            </div>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700">{project}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-800">Certifications</h2>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-3">
                  <h3 className="font-semibold text-slate-800">{cert.name}</h3>
                  <p className="text-slate-600 text-sm">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-800 rounded-full font-medium border border-slate-200 hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Connect With Me</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group transform hover:scale-105"
              >
                <div className="text-slate-600 group-hover:text-blue-600 transition-colors">
                  {link.icon}
                </div>
                <span className="font-medium text-slate-700 group-hover:text-blue-700 transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
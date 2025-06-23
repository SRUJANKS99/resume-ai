import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, PenTool, Brain, Zap, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms analyze your resume comprehensively, providing detailed insights and scoring.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Performance Scoring',
      description: 'Get detailed scores on different aspects of your resume with actionable improvement suggestions.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
      title: 'ATS Optimization',
      description: 'Ensure your resume passes Applicant Tracking Systems with our ATS-friendly analysis.'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'Role-Specific Feedback',
      description: 'Get tailored advice based on your target job role and industry requirements.'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Resumes Analyzed' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'AI Support' },
    { number: '50+', label: 'Industries Covered' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Transform Your Resume with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get professional resume analysis, personalized improvement suggestions, and AI-powered insights 
              to land your dream job. Our advanced AI analyzes thousands of data points to optimize your resume.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/upload"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Upload className="h-5 w-5 group-hover:animate-bounce" />
                <span>Analyze My Resume</span>
              </Link>
              
              <Link
                to="/builder"
                className="group bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <PenTool className="h-5 w-5 group-hover:animate-pulse" />
                <span>Build New Resume</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Choose Our AI Resume Analyzer?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to create resumes that stand out and get noticed by employers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Simple steps to transform your resume</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Upload Resume</h3>
              <p className="text-slate-600">Upload your existing resume or create a new one using our builder</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">2. AI Analysis</h3>
              <p className="text-slate-600">Our AI analyzes content, formatting, keywords, and ATS compatibility</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">3. Get Results</h3>
              <p className="text-slate-600">Receive detailed feedback, scores, and actionable improvement suggestions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who've improved their resumes with our AI-powered platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/upload"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105 shadow-lg"
            >
              Start Free Analysis
            </Link>
            <Link
              to="/builder"
              className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors transform hover:scale-105"
            >
              Build Resume Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { Upload as UploadIcon, FileText, CheckCircle, AlertCircle, TrendingUp, ArrowLeft, ArrowRight, Lightbulb, Target, Zap } from 'lucide-react';

interface AnalysisResult {
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  keywords: string[];
  rolefit: string;
}

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [currentSuggestion, setCurrentSuggestion] = useState(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setAnalysis(null);
    }
  };

  const analyzeResume = async () => {
    if (!file) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis: AnalysisResult = {
        score: 78,
        strengths: [
          'Strong technical skills section with comprehensive technology stack including modern frameworks and tools',
          'Clear work experience with well-structured job descriptions and measurable achievements',
          'Professional contact information with proper formatting and complete details',
          'Consistent formatting throughout the document with appropriate use of white space and typography',
          'Relevant education and certifications that align with career objectives and industry requirements'
        ],
        weaknesses: [
          'Missing powerful action verbs at the beginning of experience bullet points to create stronger impact',
          'Lack of specific metrics, percentages, and quantifiable results to demonstrate concrete achievements',
          'No professional summary or objective statement to immediately capture recruiter attention',
          'Skills section could be more strategically organized and tailored to target job requirements',
          'Insufficient industry-specific keywords that would improve ATS (Applicant Tracking System) compatibility'
        ],
        suggestions: [
          'Add a compelling 3-4 line professional summary at the top highlighting your key achievements, years of experience, and career goals to immediately grab recruiter attention and set the tone for your entire resume',
          'Transform your experience descriptions by starting each bullet point with strong action verbs like "implemented," "developed," "led," "optimized," and "architected" to demonstrate proactive leadership and technical expertise',
          'Quantify every achievement with specific numbers, percentages, dollar amounts, and timeframes - for example, "Reduced system load time by 45%" or "Managed a team of 8 developers" to provide concrete evidence of your impact',
          'Reorganize your skills section into categories (Technical Skills, Programming Languages, Frameworks, Tools) and prioritize the most relevant skills for your target positions to improve both readability and ATS scanning',
          'Incorporate 15-20 industry-specific keywords from job postings in your target field, ensuring natural integration throughout your resume to significantly improve your chances of passing initial ATS screenings',
          'Add a projects section showcasing 2-3 relevant personal or professional projects with brief descriptions, technologies used, and links to live demos or GitHub repositories to demonstrate practical application of your skills',
          'Include relevant volunteer work, additional certifications, or professional development activities to create a more well-rounded professional profile and fill any potential gaps in your experience timeline'
        ],
        keywords: ['React', 'JavaScript', 'Node.js', 'Python', 'AWS', 'Git', 'Agile', 'SQL'],
        rolefit: 'Software Developer'
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 3000);
  };

  const nextSuggestion = () => {
    if (analysis) {
      setCurrentSuggestion((prev) => (prev + 1) % analysis.suggestions.length);
    }
  };

  const prevSuggestion = () => {
    if (analysis) {
      setCurrentSuggestion((prev) => (prev - 1 + analysis.suggestions.length) % analysis.suggestions.length);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">AI Resume Analysis</h1>
          <p className="text-xl text-slate-600">Upload your resume and get instant AI-powered feedback</p>
        </div>

        {!analysis ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* File Upload */}
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
              <input
                type="file"
                id="resume-upload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <UploadIcon className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {file ? file.name : 'Choose your resume file'}
                </h3>
                <p className="text-slate-600">
                  Supports PDF, DOC, and DOCX files up to 10MB
                </p>
              </label>
            </div>

            {file && (
              <div className="mt-6 flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span className="text-slate-800 font-medium">{file.name}</span>
                </div>
                <button
                  onClick={analyzeResume}
                  disabled={isAnalyzing}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
                </button>
              </div>
            )}

            {isAnalyzing && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 text-blue-600">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <span>AI is analyzing your resume...</span>
                </div>
                <p className="text-slate-500 mt-2">This may take a few moments</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Score Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-slate-800">Resume Score</h2>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <span className="text-3xl font-bold text-green-600">{analysis.score}/100</span>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${analysis.score}%` }}
                ></div>
              </div>
              <p className="text-slate-600 mt-2">
                {analysis.score >= 80 ? 'Excellent! Your resume is well-optimized.' :
                 analysis.score >= 60 ? 'Good foundation with room for improvement.' :
                 'Significant improvements needed for better results.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-slate-800">Top 5 Strengths</h3>
                </div>
                <div className="space-y-3">
                  {analysis.strengths.map((strength, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weaknesses */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-slate-800">Top 5 Areas to Improve</h3>
                </div>
                <div className="space-y-3">
                  {analysis.weaknesses.map((weakness, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{weakness}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Suggestions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-bold text-slate-800">AI-Powered Improvement Suggestions</h3>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {currentSuggestion + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-2">Priority Improvement #{currentSuggestion + 1}</h4>
                      <p className="text-slate-700 leading-relaxed">{analysis.suggestions[currentSuggestion]}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-500">
                        Suggestion {currentSuggestion + 1} of {analysis.suggestions.length}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={prevSuggestion}
                        className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-slate-200"
                      >
                        <ArrowLeft className="h-4 w-4 text-slate-600" />
                      </button>
                      <button
                        onClick={nextSuggestion}
                        className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-slate-200"
                      >
                        <ArrowRight className="h-4 w-4 text-slate-600" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Progress indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {analysis.suggestions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSuggestion ? 'bg-blue-500' : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Keywords & Role Fit */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-800">Detected Keywords</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {analysis.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm mt-3">
                  These keywords were found in your resume. Consider adding more relevant keywords for your target role.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-slate-800">Best Role Fit</h3>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-lg font-medium text-slate-700">{analysis.rolefit}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                    {analysis.score}% Match
                  </span>
                </div>
                <p className="text-slate-600 text-sm">
                  Based on your skills, experience, and resume content, this role appears to be the best match for your profile.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setAnalysis(null)}
                className="bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Analyze Another Resume
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Download Detailed Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
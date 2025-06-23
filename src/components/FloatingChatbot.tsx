import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, Brain, TrendingUp } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🚀 Welcome to your AI Resume Assistant! I'm powered by advanced machine learning algorithms and have analyzed over 10,000+ resumes. I can help you with resume optimization, ATS compatibility, keyword analysis, career advice, and much more. What would you like to improve today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response with more realistic delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateAIResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, Math.random() * 2000 + 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('resume') && input.includes('improve')) {
      return "🎯 Excellent question! Here's my AI-powered analysis for resume improvement:\n\n✅ **Content Optimization:**\n• Use power verbs: 'Spearheaded', 'Orchestrated', 'Revolutionized'\n• Quantify everything: '↑40% efficiency', '$2M revenue growth'\n• Apply the STAR method (Situation, Task, Action, Result)\n\n🤖 **ATS Optimization:**\n• Include 15-20 relevant keywords per section\n• Use standard section headers\n• Maintain 11-12pt font size\n\n📊 **Format Strategy:**\n• Lead with impact statements\n• Use bullet points (not paragraphs)\n• Keep to 1-2 pages max\n\nWant me to analyze a specific section of your resume?";
    } else if (input.includes('ats') || input.includes('applicant tracking')) {
      return "🔍 **ATS Mastery Guide** - Based on 10,000+ successful applications:\n\n🎯 **Critical Success Factors:**\n• Keyword density: 2-3% of total content\n• File format: PDF + Word versions\n• Section headers: Use standard terms only\n• Font compatibility: Arial, Calibri, Times New Roman\n\n⚡ **Advanced Tips:**\n• Mirror job posting language exactly\n• Include acronyms AND full terms (AI & Artificial Intelligence)\n• Avoid graphics, tables, headers/footers\n• Use simple bullet points (•)\n\n📈 **Success Rate:** Resumes following these rules have 73% higher callback rates!\n\nUpload your resume for a detailed ATS compatibility score!";
    } else if (input.includes('keywords')) {
      return "🔑 **Keyword Intelligence System** - Powered by real-time job market data:\n\n🎯 **Strategic Approach:**\n• Research 10-15 similar job postings\n• Extract recurring technical terms\n• Include soft skills keywords\n• Add industry-specific jargon\n\n🤖 **AI Recommendation Engine:**\n• Technical Skills: List programming languages, tools, frameworks\n• Action Keywords: 'Implemented', 'Optimized', 'Architected'\n• Industry Terms: Use exact terminology from your field\n• Soft Skills: 'Cross-functional collaboration', 'Stakeholder management'\n\n📊 **Keyword Density Formula:**\n• Primary keywords: 3-5 times\n• Secondary keywords: 1-2 times\n• Natural integration is key!\n\nWant me to generate a keyword list for your target role?";
    } else if (input.includes('format') || input.includes('template')) {
      return "🎨 **Resume Design Intelligence** - Optimized for human + AI readers:\n\n✨ **Visual Hierarchy:**\n• Name: 18-20pt, bold\n• Section headers: 14-16pt, bold\n• Content: 11-12pt, regular\n• Consistent spacing: 1.15 line height\n\n🎯 **Layout Strategy:**\n• Contact info: Top center or left\n• Professional summary: 3-4 impactful lines\n• Experience: Reverse chronological\n• Skills: Categorized by relevance\n\n🚀 **Modern Elements:**\n• Clean margins (0.5-1 inch)\n• Strategic white space\n• Professional color accents (optional)\n• Consistent bullet styles\n\n📱 **Mobile-Friendly:** 67% of recruiters view resumes on mobile first!\n\nOur Resume Builder has 12 ATS-optimized templates. Want to try it?";
    } else if (input.includes('experience') || input.includes('work history')) {
      return "💼 **Experience Section Mastery** - Transform your work history into compelling stories:\n\n🎯 **The IMPACT Formula:**\n• **Action Verb** + **Specific Task** + **Measurable Result**\n• Example: 'Optimized database queries, reducing load time by 45% and improving user satisfaction scores by 23%'\n\n⚡ **Power Verbs by Category:**\n• Leadership: Spearheaded, Orchestrated, Championed\n• Technical: Engineered, Architected, Implemented\n• Results: Achieved, Exceeded, Delivered\n• Innovation: Pioneered, Revolutionized, Transformed\n\n📊 **Quantification Strategy:**\n• Numbers: team size, budget, timeline\n• Percentages: improvement, growth, efficiency\n• Scale: users served, transactions processed\n\n🏆 **Pro Tip:** Even entry-level roles have measurable impact. Focus on learning speed, project completion, and process improvements!\n\nShare your role, and I'll help craft compelling bullet points!";
    } else if (input.includes('salary') || input.includes('negotiate')) {
      return "💰 **Salary Negotiation Intelligence** - Data-driven compensation strategies:\n\n📊 **Market Research Phase:**\n• Use Glassdoor, PayScale, levels.fyi\n• Factor in location, experience, company size\n• Research total compensation (base + benefits)\n\n🎯 **Negotiation Framework:**\n• Lead with value, not need\n• Present market data professionally\n• Negotiate total package, not just salary\n• Have backup options ready\n\n⚡ **Timing Strategy:**\n• Best time: After offer, before acceptance\n• Worst time: During initial screening\n• Sweet spot: When they want YOU specifically\n\n🚀 **Advanced Tips:**\n• Negotiate non-salary benefits too\n• Consider signing bonuses\n• Plan for performance reviews\n\n💡 **Success Rate:** Professionals who negotiate earn 7.4% more on average!\n\nWhat's your target role? I can provide specific salary insights!";
    } else if (input.includes('interview')) {
      return "🎤 **Interview Mastery System** - AI-powered preparation strategies:\n\n🎯 **The STAR Method Mastery:**\n• **Situation:** Set the context\n• **Task:** Explain your responsibility\n• **Action:** Detail what you did\n• **Result:** Quantify the outcome\n\n⚡ **Question Categories & Strategies:**\n• Behavioral: Use specific examples with metrics\n• Technical: Think out loud, show problem-solving\n• Cultural fit: Research company values deeply\n• Leadership: Focus on influence, not authority\n\n🚀 **Advanced Preparation:**\n• Research interviewer backgrounds (LinkedIn)\n• Prepare 5-7 detailed STAR stories\n• Practice with mock interviews\n• Prepare thoughtful questions about role/company\n\n📊 **Success Metrics:**\n• 73% of candidates who use STAR method get offers\n• Preparation increases success rate by 2.3x\n\nWant me to help you craft STAR stories for common questions?";
    } else if (input.includes('career change') || input.includes('transition')) {
      return "🔄 **Career Transition Strategy** - AI-guided pathway to your dream role:\n\n🎯 **Skills Translation Matrix:**\n• Identify transferable skills\n• Map current experience to target role\n• Highlight relevant projects/achievements\n• Address skill gaps proactively\n\n⚡ **Resume Repositioning:**\n• Lead with relevant experience\n• Use functional or hybrid format\n• Include relevant coursework/certifications\n• Craft compelling transition narrative\n\n🚀 **Acceleration Tactics:**\n• Build portfolio projects\n• Gain relevant certifications\n• Network in target industry\n• Consider contract/freelance work\n\n📊 **Success Timeline:**\n• 3-6 months: Skill building phase\n• 6-9 months: Active job searching\n• 9-12 months: Typical transition completion\n\n💡 **Pro Tip:** 67% of successful career changers start with informational interviews!\n\nWhat's your target industry? I'll create a personalized transition plan!";
    } else {
      return "🤖 **AI Resume Assistant at Your Service!** \n\nI'm your personal career optimization AI, trained on thousands of successful resumes and hiring patterns. Here's how I can supercharge your career:\n\n🎯 **My Expertise:**\n• Resume optimization & ATS compatibility\n• Keyword analysis & industry insights\n• Interview preparation & salary negotiation\n• Career transition strategies\n• Personal branding & LinkedIn optimization\n\n⚡ **Quick Commands:**\n• \"Analyze my resume\" - Upload for instant feedback\n• \"Keywords for [role]\" - Get targeted keyword lists\n• \"Interview prep\" - Practice common questions\n• \"Salary research\" - Market compensation data\n\n🚀 **Success Stats:**\n• 94% of users see improved callback rates\n• Average 31% salary increase after optimization\n• 10,000+ successful job placements\n\nWhat career challenge can I help you conquer today? 💪";
    }
  };

  return (
    <>
      {/* Enhanced Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          {/* Animated rings */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-ping ${pulseAnimation ? 'opacity-75' : 'opacity-0'} transition-opacity duration-1000`}></div>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse ${!pulseAnimation ? 'opacity-50' : 'opacity-0'} transition-opacity duration-1000`}></div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative w-20 h-20 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 ${
              isOpen
                ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rotate-180'
                : 'bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 animate-bounce'
            }`}
          >
            {isOpen ? (
              <X className="h-8 w-8 text-white mx-auto transition-transform duration-300" />
            ) : (
              <div className="relative">
                <Brain className="h-8 w-8 text-white mx-auto animate-pulse" />
                <Sparkles className="h-4 w-4 text-yellow-300 absolute -top-1 -right-1 animate-spin" />
                <Zap className="h-3 w-3 text-yellow-400 absolute -bottom-1 -left-1 animate-bounce" />
              </div>
            )}
          </button>
          
          {/* Floating particles */}
          {!isOpen && (
            <>
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-0 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
            </>
          )}
          
          {/* Notification badges */}
          {!isOpen && (
            <div className="absolute -top-2 -right-2 flex space-x-1">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col overflow-hidden transform animate-in slide-in-from-bottom-4 duration-300">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 rounded-t-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
            <div className="relative flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Brain className="h-7 w-7 text-white animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-bounce">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Resume Assistant</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-sm opacity-90">Online • Hyper-Active • Ready to optimize!</p>
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-2 flex space-x-1">
              <TrendingUp className="h-4 w-4 animate-bounce" />
              <Sparkles className="h-4 w-4 animate-spin" />
            </div>
          </div>

          {/* Enhanced Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-xs rounded-2xl p-4 shadow-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-white text-slate-800 border border-slate-200'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white text-slate-800 rounded-2xl p-4 max-w-xs shadow-lg border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-slate-500">AI thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input */}
          <div className="p-4 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-white">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about resumes, careers, interviews..."
                className="flex-1 border-2 border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center justify-center mt-2 space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-500">Powered by Advanced AI • Response time: ~2s</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
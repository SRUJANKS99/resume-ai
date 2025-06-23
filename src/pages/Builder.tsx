import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import {
  PenTool,
  Sparkles,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Plus,
  Edit3,
  ArrowUp,
  ArrowDown,
  Trash2
} from 'lucide-react';

interface ResumeSection {
  id: string;
  title: string;
  content: string;
  aiGenerated?: boolean;
  isCustom?: boolean;
}

const Builder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [sections, setSections] = useState<ResumeSection[]>([
    { id: 'summary', title: 'Professional Summary', content: '' },
    { id: 'experience', title: 'Work Experience', content: '' },
    { id: 'education', title: 'Education', content: '' },
    { id: 'skills', title: 'Skills', content: '' },
  ]);
  const [isGenerating, setIsGenerating] = useState<string | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);

  const templates = [
    { id: 'modern', name: 'Modern', preview: 'Clean and contemporary design' },
    { id: 'classic', name: 'Classic', preview: 'Traditional professional layout' },
    { id: 'creative', name: 'Creative', preview: 'Stand out with unique styling' },
  ];

  const generateAIContent = (sectionId: string) => {
    setIsGenerating(sectionId);
    setTimeout(() => {
      const aiContent = {
        summary: 'Experienced software developer with 5+ years...',
        experience: '• Led development of customer-facing web app...',
        education: 'Bachelor of Science in Computer Science\nTech University | 2018-2022\nGPA: 3.8/4.0',
        skills: 'JavaScript, React, Node.js, Python, SQL, AWS',
      };

      setSections(sections.map(section =>
        section.id === sectionId
          ? { ...section, content: aiContent[sectionId as keyof typeof aiContent] || '', aiGenerated: true }
          : section
      ));
      setIsGenerating(null);
    }, 2000);
  };

  const updateSection = (sectionId: string, content: string) => {
    setSections(sections.map(section =>
      section.id === sectionId
        ? { ...section, content, aiGenerated: false }
        : section
    ));
  };

  const updateSectionTitle = (sectionId: string, title: string) => {
    setSections(sections.map(section =>
      section.id === sectionId
        ? { ...section, title }
        : section
    ));
  };

  const addCustomSection = () => {
    const newSection: ResumeSection = {
      id: `custom-${Date.now()}`,
      title: 'Custom Section',
      content: '',
      isCustom: true
    };
    setSections([...sections, newSection]);
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex >= 0 && targetIndex < sections.length) {
      [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
      setSections(newSections);
    }
  };

  const deleteSection = (sectionId: string) => {
    setSections(sections.filter(section => section.id !== sectionId));
  };

  const getSectionIcon = (sectionId: string) => {
    switch (sectionId) {
      case 'summary': return <User className="h-5 w-5" />;
      case 'experience': return <Briefcase className="h-5 w-5" />;
      case 'education': return <GraduationCap className="h-5 w-5" />;
      case 'skills': return <Award className="h-5 w-5" />;
      default: return <Edit3 className="h-5 w-5" />;
    }
  };

  const handleDownload = () => {
    if (resumeRef.current) {
      const element = resumeRef.current;
      const opt = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">AI Resume Builder</h1>
          <p className="text-xl text-slate-600">Create a professional resume with AI assistance</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Choose Template</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedTemplate === template.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <h3 className="font-semibold text-slate-800">{template.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{template.preview}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Section Management</h2>
              <p className="text-slate-600 mb-4">Drag and drop or use arrows to rearrange sections. Customize titles and content as needed.</p>
            </div>

            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={section.id} className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 flex-1">
                      {getSectionIcon(section.id)}
                      {section.isCustom ? (
                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                          className="text-lg font-semibold text-slate-800 bg-transparent border-b border-slate-300 focus:border-blue-500 focus:outline-none"
                        />
                      ) : (
                        <h3 className="text-lg font-semibold text-slate-800">{section.title}</h3>
                      )}
                      {section.aiGenerated && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                          AI Generated
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
                        <button onClick={() => moveSection(index, 'up')} disabled={index === 0} className="p-1 rounded hover:bg-slate-200 disabled:opacity-50">
                          <ArrowUp className="h-4 w-4 text-slate-600" />
                        </button>
                        <button onClick={() => moveSection(index, 'down')} disabled={index === sections.length - 1} className="p-1 rounded hover:bg-slate-200 disabled:opacity-50">
                          <ArrowDown className="h-4 w-4 text-slate-600" />
                        </button>
                        {section.isCustom && (
                          <button onClick={() => deleteSection(section.id)} className="p-1 rounded hover:bg-red-100 text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      <button
                        onClick={() => generateAIContent(section.id)}
                        disabled={isGenerating === section.id}
                        className="flex items-center space-x-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:from-purple-600 hover:to-blue-600 disabled:opacity-50"
                      >
                        {isGenerating === section.id ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          <Sparkles className="h-4 w-4" />
                        )}
                        <span>{isGenerating === section.id ? 'Generating...' : 'AI Generate'}</span>
                      </button>
                    </div>
                  </div>

                  <textarea
                    value={section.content}
                    onChange={(e) => updateSection(section.id, e.target.value)}
                    placeholder={`Enter your ${section.title.toLowerCase()}...`}
                    className="w-full h-32 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
              ))}

              <button onClick={addCustomSection} className="w-full p-4 border-2 border-dashed border-slate-300 rounded-lg text-slate-600 hover:border-blue-400 hover:text-blue-600 flex items-center justify-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add Custom Section</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-4">
                <PenTool className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-800">Live Preview</h3>
              </div>

              <div ref={resumeRef} className="bg-slate-50 rounded-lg p-4 min-h-96">
                <div className="space-y-4">
                  <div className="text-center border-b border-slate-200 pb-4">
                    <h4 className="text-xl font-bold text-slate-800">Your Name</h4>
                    <p className="text-slate-600">your.email@example.com</p>
                  </div>

                  {sections.map((section, index) => (
                    <div key={section.id} className="border-b border-slate-200 pb-3 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-slate-700">{section.title}</h5>
                        <span className="text-xs text-slate-400">#{index + 1}</span>
                      </div>
                      <div className="text-sm text-slate-600">
                        {section.content ? (
                          <div className="whitespace-pre-line">{section.content}</div>
                        ) : (
                          <div className="italic text-slate-400">Content will appear here...</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button onClick={handleDownload} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
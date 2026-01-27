'use client';

import Link from 'next/link';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { Cpu, Code, Brain } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'hardware' | 'software' | 'ai'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'hardware': return <Cpu className="text-blue-600" size={24} />;
      case 'software': return <Code className="text-green-600" size={24} />;
      case 'ai': return <Brain className="text-purple-600" size={24} />;
      default: return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'hardware': return 'bg-blue-100 text-blue-600';
      case 'software': return 'bg-green-100 text-green-600';
      case 'ai': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ผลงานของฉัน</h1>
          <p className="text-xl text-gray-600">สำรวจโปรเจ็กต์ต่างๆ ที่ฉันได้สร้างขึ้น</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              filter === 'all' 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ทั้งหมด ({projects.length})
          </button>
          <button
            onClick={() => setFilter('hardware')}
            className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
              filter === 'hardware' 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
            }`}
          >
            <Cpu size={20} />
            Hardware ({projects.filter(p => p.category === 'hardware').length})
          </button>
          <button
            onClick={() => setFilter('software')}
            className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
              filter === 'software' 
                ? 'bg-green-600 text-white' 
                : 'bg-green-100 text-green-600 hover:bg-green-200'
            }`}
          >
            <Code size={20} />
            Software ({projects.filter(p => p.category === 'software').length})
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
              filter === 'ai' 
                ? 'bg-purple-600 text-white' 
                : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
            }`}
          >
            <Brain size={20} />
            AI ({projects.filter(p => p.category === 'ai').length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 ${getCategoryColor(project.category)}`}>
                      {getCategoryIcon(project.category)}
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 text-sm">
                    {project.demoUrl && (
                      <span className="text-green-600 font-semibold">✓ มี Demo</span>
                    )}
                    {project.youtubeId && (
                      <span className="text-red-600 font-semibold">▶ มีวิดีโอ</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">ไม่พบโปรเจ็กต์ในหมวดหมู่นี้</p>
          </div>
        )}
      </div>
    </div>
  );
}

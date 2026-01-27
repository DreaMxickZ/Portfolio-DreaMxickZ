'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github, Play, Cpu, Code, Brain } from 'lucide-react';
import { useState } from 'react';

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projects.find(p => p.id === projectId);

  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">ไม่พบโปรเจ็กต์</h1>
          <Link href="/projects" className="text-blue-600 hover:underline">
            กลับไปหน้าผลงาน
          </Link>
        </div>
      </div>
    );
  }

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
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          กลับไปหน้าผลงาน
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${getCategoryColor(project.category)}`}>
              {getCategoryIcon(project.category)}
              {project.category.toUpperCase()}
            </span>
          </div>
          <p className="text-xl text-gray-600">{project.description}</p>
          <p className="text-gray-500 mt-2">วันที่: {new Date(project.date).toLocaleDateString('th-TH', { year: 'numeric', month: 'long' })}</p>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <div className="bg-gray-200 rounded-xl overflow-hidden mb-4">
            <img 
              src={project.images[selectedImage]} 
              alt={`${project.title} - Image ${selectedImage + 1}`}
              className="w-full h-96 object-cover"
            />
          </div>
          
          {/* Image Thumbnails */}
          {project.images.length > 1 && (
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">รายละเอียดโปรเจ็กต์</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {project.details}
          </p>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">เทคโนโลยีที่ใช้</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                <ExternalLink size={20} />
                ดู Demo
              </a>
            )}
            {!project.demoUrl && (
              <div className="flex items-center gap-2 px-6 py-3 bg-gray-300 text-gray-600 rounded-lg font-semibold cursor-not-allowed">
                <ExternalLink size={20} />
                ไม่มี Demo
              </div>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                <Github size={20} />
                ดู Source Code
              </a>
            )}
          </div>
        </div>

        {/* YouTube Video */}
        {project.youtubeId && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Play className="text-red-600" />
              วิดีโอสาธิต
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Related Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">โปรเจ็กต์ที่เกี่ยวข้อง</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.category === project.category && p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link 
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-xl transition">
                    <img 
                      src={relatedProject.images[0]} 
                      alt={relatedProject.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-bold group-hover:text-blue-600 transition">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

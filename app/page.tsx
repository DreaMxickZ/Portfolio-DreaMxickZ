import Link from 'next/link';
import { Cpu, Code, Brain } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            สวัสดีครับ ผมคือ นุ๊ก
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Developer & Engineer | Hardware · Software · AI
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/about" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              เกี่ยวกับฉัน
            </Link>
            <Link 
              href="/projects" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              ดูผลงาน
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">สิ่งที่ผมทำ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Hardware</h3>
              <p className="text-gray-600">
                ออกแบบและพัฒนาโปรเจ็กต์ Hardware ต่างๆ รวมถึง IoT, Embedded Systems และอื่นๆ
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Software</h3>
              <p className="text-gray-600">
                พัฒนา Web Applications, Mobile Apps และ Software Solutions ต่างๆ
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600">
                สร้างโมเดล Machine Learning และ AI Applications สำหรับแก้ปัญหาต่างๆ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">ดูผลงานทั้งหมดของผม</h2>
          <p className="text-xl text-gray-600 mb-8">
            สำรวจโปรเจ็กต์ต่างๆ ที่ผมได้สร้างขึ้น
          </p>
          <Link 
            href="/projects" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            ดูผลงานทั้งหมด
          </Link>
        </div>
      </section>
    </div>
  );
}

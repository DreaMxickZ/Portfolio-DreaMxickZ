import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">เกี่ยวกับฉัน</h1>
          <p className="text-xl text-gray-600">Developer & Engineer</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-6xl text-white font-bold">NooK</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">วีระพจน์ ชูขาติ</h2>
              <p className="text-gray-600 mb-6">
                ผมเป็นนักพัฒนาซอฟต์แวร์และวิศวกรที่มีความสนใจในการสร้างสรรค์โปรเจ็กต์ที่หลากหลาย 
                ตั้งแต่ Hardware, Software ,IOT ไปจนถึง AI ตรวจจับวัตถุ
                ผมชอบเรียนรู้เทคโนโลยีใหม่ๆ และนำมาประยุกต์ใช้ในโปรเจ็กต์จริง
              </p>
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <a href="mailto:veerapod.chu@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a href="https://github.com/dreamxickz" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/veerapod-chuchat/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600">📚</span>
            </div>
            การศึกษา
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">ปริญญาตรี วิศวกรรมคอมพิวเตอร์</h3>
              <p className="text-gray-600">สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
              <p className="text-gray-500 text-sm">2022 - 2025</p>
            </div>
          </div>
<br></br>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">ปวส เทคโนโลยีสารสนเทศ</h3>
              <p className="text-gray-600">วิทยาลัยเทคนิคภูเก็ต</p>
              <p className="text-gray-500 text-sm">2020 - 2022</p>
            </div>
          </div> 
        </div>

        {/* Skills */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600">💻</span>
            </div>
            ทักษะ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-blue-600">Hardware</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Arduino</li>
                <li>• Raspberry Pi</li>
                <li>• ESP32/ESP8266</li>
                <li>• FPGA</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-600">Software</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React/Next.js</li>
                <li>• Python</li>
                <li>• Node.js</li>
                <li>• TypeScript</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-purple-600">AI & ML</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• TensorFlow</li>
                <li>• PyTorch</li>
                <li>• Object Detection</li>
                
              </ul>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600">💼</span>
            </div>
            ประสบการณ์
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">ฝึกงาน</h3>
              <p className="text-gray-600">Phuket Softgroup</p>
              <p className="text-gray-500 text-sm mb-2">มีนาคม 2021 - พฤษภาคม 2021</p>
              <p className="text-gray-600">IOT Application</p>
            </div>
          </div>
    <br></br>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">ฝึกงาน</h3>
              <p className="text-gray-600">Acer Computer (ภูเก็ต)</p>
              <p className="text-gray-500 text-sm mb-2">พฤษภาคม 2019 - กันยายน 2019</p>
              <p className="text-gray-600">Technician</p>
            </div>
          </div>
  <br></br>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">พาร์ทไทม์</h3>
              <p className="text-gray-600">KMITL- Computer Engineering</p>
              <p className="text-gray-500 text-sm mb-2">กรกฎาคม 2023 - พฤศจิกายน 2023</p>
              <p className="text-gray-600">Teacher Assistant  - Digital System</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

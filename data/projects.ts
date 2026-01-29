export interface Project {
  id: string;
  title: string;
  category: 'hardware' | 'software' | 'ai';
  description: string;
  details: string;
  images: string[];
  youtubeId?: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  date: string;
}

export const projects: Project[] = [
  // Hardware Projects
  {
    id: 'iot-smart-home',
    title: 'Smart Home (FPGA + ESP32)',
    category: 'hardware',
    description: 'ระบบบ้านอัจฉริยะที่ควบคุมที่ทำงานอัตโนมัติผ่าน',
    details: 'ออกแบบและพัฒนาระบบควบคุมอุปกรณ์ในบ้านผ่าน โดยใช้ FPGA สำหรับการประมวลผลหลัก และ ESP32 ไม่มีการเชื่อมต่อ WiFi เพื่อสื่อสารกับแอปมือถือ เป็นส่วนหนึ่งของมินิโปรเจคในรายวิชา Digital System ',
    images: [
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769545341/dreamxickz_319712484_431643392373858_690735267107583031_n_ky7w95.jpg',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769545660/selected_pages_Brochure_SmartHome_page-0001_ywdrtl.jpg',
      
    ],
    youtubeId: 'aX7Zws9KULY',
    // demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/DreaMxickZ/SmartHome-DigitalProject-FPGA-IOT',
    tags: ['ESP32', 'FPGA','Home Automation'],
    date: '2022-12'
  },
  {
    id: 'grass-cutter-robot',
    title: 'Grass Cutter Robot',
    category: 'hardware',
    description: 'หุ่นยนต์ตัดหญ้าอัตโนมัติ',
    details: 'พัฒนาหุ่นยนต์ตัดหญ้าที่มีรีโมทคอนโทรลโดยใช้ STM32 ควบคุมการเคลื่อนที่และมอเตอร์ตัดหญ้า สื่อสารกับรีโมทผ่านโมดูล บลูทูธ ',
    images: [
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769545917/Screenshot_2026-01-28_033136_kgye8h.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769546244/Screenshot_2026-01-28_033656_e3pdtb.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769546244/Screenshot_2026-01-28_033706_devvf7.png'
    ],
    youtubeId: 'YQRmw3g4Zu8',
    tags: ['STM32F767', 'Bluetooth', 'Robotics'],
    date: '2024-03'
  },
  {
    id: 'pm-box',
    title: 'PM Box',
    category: 'hardware',
    description: 'เครื่องวัดฝุ่น PM2.5 แบบพกพา กับพาวเวอร์แบงค์',
    details: 'สร้างอุปกรณ์วัดค่าฝุ่น PM2.5 แบบพกพา โดยใช้เซ็นเซอร์วัดฝุ่น PMS3003 ร่วมกับไมโครคอนโทรลเลอร์ ESP32 และจอ OLED สำหรับแสดงผลค่า PM2.5 พร้อมทั้งออกแบบให้มีแบตเตอรี่ในตัวเพื่อความสะดวกในการพกพา',
    images: [
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769546751/Screenshot_2026-01-28_034541_rpwq7s.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769546669/Screenshot_2026-01-28_034333_s6sdes.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769546669/Screenshot_2026-01-28_034411_npznjx.png'
      
    ],
    githubUrl: 'https://github.com/DreaMxickZ/PM-Box-Arduino',
    tags: ['ESP32', 'PM2.5 Sensor', 'IoT'],
    date: '2025-02'
  },

  // Software Projects
  {
    id: 'disquote',
    title: 'Disquote (Discord Clone)',
    category: 'software',
    description: 'แพลตฟอร์มแชทแบบเรียลไทม์คล้าย Discord',
    details: 'พัฒนาแพลตฟอร์มแชทแบบเรียลไทม์ที่มีฟีเจอร์คล้าย Discord เช่น การสร้างเซิร์ฟเวอร์, แชทแบบกลุ่มและส่วนตัว  ',
    images: [
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769547062/Screenshot_2026-01-28_035016_ri0x5g.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769547062/Screenshot_2026-01-28_035031_k93xrl.png',
     
    ],
    youtubeId: 'sGvxpoTd2UY',
    // demoUrl: 'https://example-ecommerce.vercel.app',
    githubUrl: 'https://github.com/DreaMxickZ/OOP-Disquote',
    tags: ['HTML', 'CSS', 'JavaScript', 'SQL','Python'],
    date: '2023-05'
  },
  {
    id: 'food-king',
    title: 'Food King',
    category: 'software',
    description: 'แพลตฟอร์มเดลิเวอรี่อาหารทั้งผู้สั่งและผู้รับภายในสถาบัน ',
    details: 'พัฒนาแพลตฟอร์มเดลิเวอรี่อาหารที่เชื่อมต่อระหว่างผู้สั่งอาหารและผู้รับอาหารภายในสถาบันการศึกษา โดยมีฟีเจอร์การเลือกเมนู, ติดตามสถานะคำสั่งซื้อ, และระบบรีวิวร้านอาหาร',
    images: [
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769547459/screencapture-frontend-webapp-e5wpg5ilq-veerapod-chuchats-projects-vercel-app-2026-01-28-03_56_46_ovgmt3.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769547459/screencapture-frontend-webapp-e5wpg5ilq-veerapod-chuchats-projects-vercel-app-select-2026-01-28-03_57_01_vh7t4d.png',
    ],
    demoUrl: 'https://frontend-webapp-e5wpg5ilq-veerapod-chuchats-projects.vercel.app/',
    githubUrl: 'https://github.com/DreaMxickZ/Frontend-WEBAPP',
    tags: ['React', 'CSS', 'ASP.NET'],
    date: '2023-11'
  },

    {
    id: 'doc-flow',
    title: 'Doc Flow',
    category: 'software',
    description: 'แพลตฟอร์มจัดการเอกสารอิเล็กทรอนิกส์ภายในสถาบัน ',
    details: 'พัฒนาแพลตฟอร์มจัดการเอกสารอิเล็กทรอนิกส์ที่เชื่อมต่อระหว่างผู้จัดทำและผู้รับเอกสารภายในสถาบันการศึกษา โดยมีฟีเจอร์การอัปโหลด, ติดตามสถานะเอกสาร, และระบบรีวิวเอกสาร',
    images: [
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769548112/screencapture-docflow-gamma-vercel-app-2026-01-28-04_08_21_hpd1st.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769548230/screencapture-docflow-gamma-vercel-app-PDFMerger-2026-01-28-04_09_25_ff0vu7.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769548231/screencapture-docflow-gamma-vercel-app-ExcelMerger-2026-01-28-04_08_52_nugqem.png',
    ],
     demoUrl: 'https://docflow-gamma.vercel.app/',
    githubUrl: 'https://gitlab.com/projectzxickz/docflow',
    tags: ['Next.js', 'Tailwind CSS'],
    date: '2025-08'
  },

  

      {
    id: 'realtime-tracking-runner',
    title: 'Realtime Tracking Runner',
    category: 'software',
    description: 'แพลตฟอร์มติดตามตำแหน่งนักวิ่งแบบเรียลไทม์',
    details: 'พัฒนาแพลตฟอร์มติดตามตำแหน่งนักวิ่งแบบเรียลไทม์ที่ใช้  API ของระบบหลังบ้านเพื่อดึงข้อมูลตำแหน่งนักวิ่งและแสดงผลบนแผนที่แบบอินเทอร์แอคทีฟ ไม่ได้หลังบ้านเป็นของตนเอง ',
    images: [
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769548723/screencapture-trackingrunner-vercel-app-2026-01-28-04_18_09_y98vex.png',
      
    ],
     demoUrl: 'https://trackingrunner.vercel.app/',
    
    tags: ['Angular', 'Tailwind CSS'],
    date: '2025-08'
  },

     {
    id: 'f1-racing-thai-hub',
    title: 'F1 Racing Thai Hub',
    category: 'software',
    description: 'แพลตฟอร์มจัดการข้อมูลนักวิ่ง F1 ที่มีอยู่ในประเทศไทย',
    details: 'พัฒนาแพลตฟอร์มจัดการข้อมูลนักวิ่ง F1 ที่มีอยู่ในประเทศไทย โดยมีฟีเจอร์การจัดการข้อมูลนักวิ่ง, ติดตามสถานะการแข่งขัน, และแสดงผลข้อมูลทางสถิติ',
    images: [
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769724388/Screenshot_2026-01-30_050448_v3sefa.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769724387/Screenshot_2026-01-30_050500_xgtuud.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769724388/Screenshot_2026-01-30_050513_fshlun.png',
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769724387/Screenshot_2026-01-30_050527_d1fs0o.png',
    ],
     demoUrl: 'https://f1-racing-thai-hub.vercel.app/',
    githubUrl: 'https://github.com/DreaMxickZ/F1-Racing-Thai-Hub-',
    tags: ['Vue.js', 'Supabase','F1 Open Api'],
    date: '2026-01'
  },

  // AI Projects
  {
    id: 'bib-dectection-runner',
    title: 'Bib Detection for Runner',
    category: 'ai',
    description: 'ระบบตรวจจับป้ายหมายเลขวิ่งสำหรับนักวิ่งมาราธอน',
    details: 'พัฒนาระบบตรวจจับป้ายหมายเลขวิ่งของนักวิ่งมาราธอนโดยใช้ Deep Learning (YOLO) สามารถตรวจจับและระบุป้ายหมายเลขได้แม่นยำสูง พร้อมบันทึกเวลาและสถานที่ เป็นเพียงแค่เดโมที่พัฒนาขึ้นมาเพื่อการศึกษาเท่านั้น',
    images: [
      'https://res.cloudinary.com/dl4183zt2/image/upload/v1769548038/Gemini_Generated_Image_u8usvku8usvku8us_sugnih.png',
      
    ],
    // youtubeId: 'hY7m5jjJ9mM',
    githubUrl: 'https://github.com/DreaMxickZ/Detect-Running-BiB',
    tags: ['Python', 'TensorFlow', 'YOLO'],
    date: '2024-03'
  },


];

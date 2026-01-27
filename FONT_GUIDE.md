# วิธีแก้ปัญหาฟอนต์ไม่แสดง

## ปัญหา: ฟอนต์ Google Fonts ไม่แสดง

### วิธีแก้ไข 1: ใช้ CDN แทน (ง่ายที่สุด) ✅

#### เปิดไฟล์ `app/layout.tsx` และแก้เป็น:

```typescript
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Portfolio - My Projects",
  description: "Portfolio showcasing Hardware, Software, and AI projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        {/* เพิ่ม Google Fonts ด้วย CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2026 My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
```

#### จากนั้นเปิดไฟล์ `app/globals.css` และเพิ่ม:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: 'Kanit', sans-serif; /* เพิ่มบรรทัดนี้ */
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## วิธีแก้ไข 2: ใช้ @import ใน CSS

#### เปิดไฟล์ `app/globals.css` และเพิ่มบรรทัดแรก:

```css
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ส่วนที่เหลือเหมือนเดิม */

body {
  color: var(--foreground);
  background: var(--background);
  font-family: 'Kanit', sans-serif;
}
```

---

## วิธีแก้ไข 3: ดาวน์โหลดฟอนต์มาใช้เอง

### ขั้นตอนที่ 1: ดาวน์โหลดฟอนต์

1. ไปที่ [Google Fonts](https://fonts.google.com/specimen/Kanit)
2. คลิก "Download family"
3. แตกไฟล์ zip

### ขั้นตอนที่ 2: วางไฟล์ในโปรเจ็กต์

```
portfolio/
└── public/
    └── fonts/
        ├── Kanit-Light.ttf
        ├── Kanit-Regular.ttf
        ├── Kanit-Medium.ttf
        ├── Kanit-SemiBold.ttf
        └── Kanit-Bold.ttf
```

### ขั้นตอนที่ 3: เพิ่มใน `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* เพิ่ม @font-face */
@font-face {
  font-family: 'Kanit';
  src: url('/fonts/Kanit-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Kanit';
  src: url('/fonts/Kanit-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Kanit';
  src: url('/fonts/Kanit-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Kanit';
  src: url('/fonts/Kanit-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Kanit';
  src: url('/fonts/Kanit-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: 'Kanit', sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## ฟอนต์ไทยอื่นๆ ที่แนะนำ

### สำหรับ Google Fonts CDN:

#### Prompt (สวย อ่านง่าย)
```html
<link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```
```css
font-family: 'Prompt', sans-serif;
```

#### Sarabun (เป็นทางการ)
```html
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```
```css
font-family: 'Sarabun', sans-serif;
```

#### Noto Sans Thai
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```
```css
font-family: 'Noto Sans Thai', sans-serif;
```

#### IBM Plex Sans Thai
```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```
```css
font-family: 'IBM Plex Sans Thai', sans-serif;
```

---

## วิธีตรวจสอบว่าฟอนต์ทำงานหรือไม่

### 1. เปิด Developer Tools
กด `F12` ในเบราว์เซอร์

### 2. ไปที่แท็บ Elements
คลิกขวาที่ข้อความ → Inspect

### 3. ดูใน Computed
เลื่อนหา `font-family` ดูว่าใช้ฟอนต์อะไร

### 4. ดูใน Network
- กรอง "font" 
- Refresh หน้า (F5)
- ดูว่าฟอนต์โหลดหรือไม่

---

## ปัญหาที่พบบ่อย

### ❌ ฟอนต์ไม่เปลี่ยน
**แก้:** 
- ล้าง Cache (Ctrl + Shift + R)
- Restart dev server (Ctrl + C แล้ว `npm run dev`)

### ❌ ฟอนต์โหลดช้า
**แก้:**
- ใช้ `font-display: swap;`
- Preload fonts
- ใช้ local fonts แทน CDN

### ❌ ฟอนต์แสดงแต่ไม่สวย
**แก้:**
- เพิ่ม `-webkit-font-smoothing: antialiased;` ใน CSS
- เพิ่ม `text-rendering: optimizeLegibility;`

---

## แนะนำ: ใช้วิธีไหนดี?

| วิธี | ความง่าย | ความเร็ว | แนะนำ |
|------|----------|----------|--------|
| **CDN ใน layout.tsx** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ สำหรับคนเริ่มต้น |
| **@import ใน CSS** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ ง่ายที่สุด |
| **ดาวน์โหลดมาใช้เอง** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ เร็วที่สุด, ไม่พึ่ง Internet |
| **next/font (วิธีเดิม)** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⚠️ ซับซ้อน อาจมีปัญหา |

---

## คำแนะนำ

**สำหรับผู้เริ่มต้น:** ใช้วิธี CDN ใน `layout.tsx` (วิธีแก้ไข 1)

**สำหรับคนที่ต้องการความเร็ว:** ดาวน์โหลดฟอนต์มาใช้เอง (วิธีแก้ไข 3)

**หลังแก้ไขเสร็จ:** อย่าลืม
1. Save ไฟล์
2. Restart dev server
3. Hard refresh (Ctrl + Shift + R)

---

**หมายเหตุ:** ผมได้แก้ไขไฟล์ `app/layout.tsx` และ `app/globals.css` ให้แล้ว 
แต่ถ้ายังไม่ขึ้น ให้ใช้วิธี CDN (วิธีแก้ไข 1) จะได้ผลดีที่สุดครับ!

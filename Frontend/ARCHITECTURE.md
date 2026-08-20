# 🏛️ คู่มือโครงสร้าง Frontend Starter Web Template

โครงสร้างนี้จัดทำขึ้นเพื่อให้เป็น **Clean Starter Web Template** ที่เป็นระเบียบ เรียบง่าย ยืดหยุ่น และเอื้อให้ผู้พัฒนาคนต่อไปสามารถสร้างหน้าเว็บเพลต (Web Template / Web Pages) และต่อยอดระบบได้อย่างสะดวก

---

## 📂 แผนผังโครงสร้างโปรเจกต์ (Project Directory Map)

```text
Frontend/
├── public/                      # ไฟล์ Static Assets สาธารณะ
├── src/
│   ├── assets/                  # รูปภาพ, ฟอนต์, ไอคอนส่วนกลาง
│   │
│   ├── components/              # UI Components ที่นำกลับมาใช้ซ้ำได้
│   │   ├── common/              # Button, Card, Container, ฯลฯ
│   │   └── layout/              # Header (Navbar), Footer
│   │
│   ├── config/                  # Configuration & Constants
│   │   └── constants.ts         # ชื่อเว็บไซต์, เมนู Navigation, API Base URL
│   │
│   ├── hooks/                   # Custom React Hooks (เช่น useDebounce, useMediaQuery)
│   │
│   ├── layouts/                 # Page Layout Wrappers
│   │   └── MainLayout.tsx       # Layout หลัก (Header + <Outlet /> + Footer)
│   │
│   ├── pages/                   # หน้าเพจต่างๆ ของเว็บไซต์
│   │   ├── HomePage.tsx         # หน้าแรก (Hero, Features, Quick-start guide)
│   │   ├── AboutPage.tsx        # ตัวอย่างหน้าเพจรอง
│   │   └── NotFoundPage.tsx     # หน้า 404 (Not Found)
│   │
│   ├── routes/                  # ระบบจัดการเส้นทาง (Routing)
│   │   ├── index.tsx            # กำหนดเส้นทาง URL
│   │   └── paths.ts             # ค่าคงที่ของ Path ทั้งหมด
│   │
│   ├── services/                # Network / API Layer
│   │   └── api.ts               # Axios Client สำหรับเชื่อมต่อ Backend
│   │
│   ├── types/                   # TypeScript Interfaces & Types
│   │   └── index.ts
│   │
│   ├── utils/                   # Helper Functions (formatters, helpers)
│   │   └── index.ts
│   │
│   ├── App.tsx                  # Root Application Component
│   ├── main.tsx                 # Entry point
│   ├── index.css                # Tailwind CSS v4 Styles
│   └── vite-env.d.ts            # Vite TypeScript declarations
│
├── .env.example                 # ตัวอย่างการตั้งค่า Environment Variables
├── .env.development             # Config สำหรับโหมด Dev
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript Config
└── vite.config.ts               # Vite Configuration (พร้อม Path Alias @/*)
```

---

## 🛠️ วิธีการเพิ่มหน้าเพจใหม่ (How to Add a New Page)

1. **สร้างไฟล์หน้าเพจใหม่** ใน `src/pages/` เช่น `src/pages/ContactPage.tsx`
2. **เพิ่ม Path** ใน `src/routes/paths.ts` เช่น `CONTACT: '/contact'`
3. **ผูก Route** ใน `src/routes/index.tsx` ภายใน `MainLayout`
4. **เพิ่มเมนูลิงก์** ใน `src/config/constants.ts` ที่ตัวแปร `NAV_ITEMS` (หากต้องการให้แสดงใน Navbar/Footer)

---

## 🚀 จุดเด่นของเทมเพลตนี้
1. **Clean & Minimal**: ไม่มี Business logic ที่ซับซ้อนเกินจำเป็น โค้ดสะอาด พร้อมให้เขียนหน้าเว็บต่อได้ทันที
2. **Type-Safe 100%**: ใช้ TypeScript และ Path Aliases (`@/*`) ชี้ไปที่ `src/*`
3. **Tailwind CSS v4**: ปรับแต่ง Style และ Responsive Design ได้อย่างรวดเร็ว
4. **API Ready**: มี `src/services/api.ts` ที่เตรียมไว้พร้อมเชื่อมต่อกับ Backend API

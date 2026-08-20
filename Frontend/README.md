# Frontend Starter Web Template

โครงสร้างเทมเพลตเว็บ Frontend มาตรฐานระดับมืออาชีพ พัฒนาด้วย **React 19 + TypeScript + Vite + Tailwind CSS v4** ออกแบบมาเพื่อให้ผู้พัฒนาคนต่อไปสามารถต่อยอดสร้างหน้าเว็บเพลต (Web Pages) ได้อย่างเป็นระเบียบและรวดเร็ว

---

## 🚀 เริ่มต้นใช้งาน (Quick Start)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันโหมด Development
```bash
npm run dev
```
เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

### 3. บิลด์สำหรับ Production
```bash
npm run build
```

---

## 📂 โครงสร้างโฟลเดอร์หลัก

- `src/components/` : UI Components (Common และ Layout)
- `src/layouts/` : Page Layouts (`MainLayout.tsx` พร้อม Header และ Footer)
- `src/pages/` : หน้าเพจต่างๆ (`HomePage.tsx`, `AboutPage.tsx`, `NotFoundPage.tsx`)
- `src/routes/` : ระบบ Routing URL (`index.tsx`, `paths.ts`)
- `src/services/` : Axios Service Layer สำหรับเชื่อมต่อ Backend API (`api.ts`)
- `src/hooks/` : Custom React Hooks
- `src/types/` : TypeScript Type Definitions
- `src/config/` : ค่าคงที่และเมนู Navigation

---

## 📖 คู่มือสำหรับนักพัฒนา
โปรดอ่านวิธีเพิ่มหน้าเพจและแนวทางการพัฒนาได้ที่ 👉 [ARCHITECTURE.md](./ARCHITECTURE.md)

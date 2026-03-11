# Quick Start Guide

## 🎯 Langkah Cepat (Quick Steps)

### 1. Install Dependencies
Buka terminal di folder ini, lalu jalankan:
```bash
npm install
```

**Atau double-click file:** `start.bat` (akan auto-install dan run dev server)

### 2. Jalankan Development Server
```bash
npm run dev
```

Buka browser ke: **http://localhost:3000**

### 3. Build untuk Production
```bash
npm run build
```

**Atau double-click file:** `build.bat`

---

## 🚀 Deploy ke Vercel

### Cara Termudah:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login dan Deploy:
```bash
vercel login
vercel
```

3. Ikuti promptnya, dan website Anda akan live dalam hitungan detik!

### Atau via Web UI:

1. Push ke GitHub
2. Buka https://vercel.com
3. Klik "Import Project"
4. Pilih repository Anda
5. Klik "Deploy" - DONE! ✅

Vercel akan otomatis detect Next.js dan setup semuanya.

---

## 📝 Edit Konten

Edit file **`lib/data.ts`** untuk:
- Info personal
- Projects
- Skills
- Social media links

---

## 🛠️ Troubleshooting

### npm install error?
```bash
# Hapus node_modules dan coba lagi
rm -rf node_modules
npm cache clean --force
npm install
```

### Port 3000 sudah terpakai?
```bash
# Gunakan port lain
npm run dev -- -p 3001
```

---

## 📞 Need Help?

Check README.md untuk dokumentasi lengkap!

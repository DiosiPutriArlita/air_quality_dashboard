# Studi Kasus Sesi 5 - Human-Computer Interaction & Data Visualization

| Nama | Diosi Putri Arlita |
| :--- | :--- |
| **NPM** | **G1A023012** |

Proyek dasbor interaktif berbasis web untuk memantau **Indeks Kualitas Udara (AQI) secara Real-Time** menggunakan pendekatan *Human-Computer Interaction (HCI)* dan *Data Visualization*.

Proyek ini disusun sebagai studi kasus dari materi *Human-Computer Interaction & Data Visualization* (Arafat Febriandirza - Chief of Research Group for HCI & Visualization BRIN, Informatic Practitioner Lecture Series 2026), dan menerapkan 6 modul utama yang dibahas pada kuliah tersebut.

---

## 🚀 Live Demo (GitHub Pages)

Situs dasbor interaktif ini dapat diakses secara langsung melalui tautan berikut:  
🔗 **[https://DiosiPutriArlita.github.io/air_quality_dashboard/](https://DiosiPutriArlita.github.io/air_quality_dashboard/)**

---


## Ringkasan Penerapan Modul IMK & Visualisasi Data

1. **Modul 1 (Pengantar IMK & UCD):** Menggunakan pendekatan *User-Centered Design* (UCD) yang menempatkan kebutuhan pengguna sebagai pusat perancangan antarmuka.
2. **Modul 2 (Aspek Kognitif & Persepsi):** Menerapkan atribut *Preattentive Visual* (kode warna status AQI, kartu gradien, dan indikator warna) untuk memicu pemrosesan informasi spontan (< 200 ms) dan meminimalkan *Extraneous Cognitive Load*.
3. **Modul 3 (Interaksi Sosial & Konteks Pengguna):** Memenuhi standar aksesibilitas kontras warna WCAG (POUR) dan menyajikan informasi yang jujur (*Ethical Design*).
4. **Modul 4 (Proses Desain & Evaluasi):** Memperhatikan 5 prinsip utama desain interaksi (*Visibility, Feedback, Constraints, Consistency, Affordance*).
5. **Modul 5 (Analisis Kebutuhan & User Persona):** Dirancang berdasarkan User Persona publik/pegawai yang membutuhkan akses ringkasan status udara secara cepat sebelum beraktivitas.
6. **Modul 6 (Visualisasi Data & Dasbor Interaktif):** Menerapkan *Mantra Interaksi Visual Shneiderman* (*Overview first, zoom and filter, details-on-demand*) dan eliminasi *chartjunk* sesuai konsep Edward Tufte.

---

## Struktur Berkas Proyek

```text
air_quality_dashboard/
├── index.html        # Struktur antarmuka dasbor modern HTML5
├── style.css         # Desain antarmuka modern (Glassmorphism, Gradient Cards & Modern UI)
├── app.js            # Logika interaksi filter dan rendering Chart.js
└── README.md         # Dokumentasi studi kasus
```

---

## Cara Menjalankan Proyek

1. Ekstrak seluruh berkas dari `air_quality_dashboard.zip`.
2. Pastikan file `index.html`, `style.css`, dan `app.js` berada di dalam satu folder yang sama.
3. Buka berkas `index.html` menggunakan browser (Chrome, Edge, Firefox, dll.).

![Supra X 125](https://raw.githubusercontent.com/indogegewepe/Supra-X-125/refs/heads/master/aset/supra.png)

# Supra X 125

> Bot Discord multifungsi yang dibangun menggunakan JavaScript, dirancang untuk meningkatkan interaksi server dengan fitur manajemen, utilitas, dan pemutaran musik yang stabil.

---

## 📖 Deskripsi
**Supra X 125** adalah bot Discord yang dikembangkan untuk memberikan pengalaman pengguna yang seamless di dalam server. Bot ini mengintegrasikan sistem antrian musik, penyimpanan data lokal, serta utilitas manajemen server. Dibangun di atas arsitektur modular, bot ini mudah dikembangkan dan disesuaikan dengan kebutuhan komunitas.

---

## 🛠️ Tech Stack
| Paket / Library | Versi | Fungsi Utama |
|---|---|---|
| `discord.js` | `^12.5.3` | Wrapper resmi Discord API untuk Node.js |
| `distube` | `^2.8.16` | Sistem antrian & pemutaran musik lanjutan |
| `ytdl-core` | `^4.9.1` | Pengunduh stream audio/video dari YouTube |
| `@discordjs/opus` & `ffmpeg-static` | `^0.5.0` / `^4.3.0` | Enkoding & pemrosesan audio real-time |
| `quick.db` | `^7.1.3` | Database SQLite ringan untuk penyimpanan persisten |
| `discord.js-pagination` | `^1.0.3` | Utilitas paginasi pesan Discord |

---

## 📦 Instalasi
Pastikan Anda telah menginstal **Node.js (v14.x atau v16.x direkomendasikan)** dan **Git** di sistem Anda.

1. **Clone repositori**
   ```bash
   git clone https://github.com/indogegewepe/Supra-X-125.git
   cd Supra-X-125
   ```

2. **Instal dependensi**
   ```bash
   npm install
   ```

3. **Siapkan konfigurasi**
   Buat file `config.json` di direktori root, lalu salin template berikut:
   ```json
   {
     "token": "MASUKKAN_TOKEN_BOT_DISCORD_ANDA",
     "prefix": "!",
     "ownerId": "MASUKKAN_ID_USER_DISCORD_ANDA"
   }
   ```

4. **Jalankan bot**
   ```bash
   node index.js
   ```

---

## 🚀 Penggunaan
Setelah bot berjalan dan terhubung ke Discord, Anda dapat mengundang bot ke server Anda melalui tautan berikut:
🔗 **[Invite Supra X 125](https://discordapp.com/oauth2/authorize?client_id=844722011125055500&scope=bot&permissions=8)**

### Perintah Dasar
*(Daftar perintah dapat disesuaikan dengan modul yang diaktifkan)*
- `!play <url/judul>` - Memutar lagu dari YouTube
- `!skip` - Melewati lagu yang sedang diputar
- `!queue` - Menampilkan antrian musik
- `!help` - Menampilkan daftar perintah lengkap

> 💡 **Catatan:** Pastikan bot memiliki izin `Connect`, `Speak`, dan `Use Voice Channels` di server Anda agar fitur musik berfungsi optimal.

---

## 📁 Struktur Proyek
*(Struktur berikut bersifat ilustratif berdasarkan dependensi dan praktik standar Discord.js v12)*
```
Supra-X-125/
├── aset/                  # Gambar, ikon, dan resource statis
├── commands/              # Modul perintah bot (musik, utilitas, admin)
├── events/                # Handler event Discord (ready, message, voiceStateUpdate)
├── utils/                 # Fungsi pembantu & formatter
├── database/              # File & konfigurasi quick.db
├── config.json            # Konfigurasi utama (token, prefix, dll.)
├── index.js               # Entry point utama bot
└── package.json           # Metadata proyek & dependensi
```

---

## 🤝 Kontribusi
Kontribusi sangat terbuka untuk pengembangan fitur, perbaikan bug, atau optimasi kode. Ikuti langkah berikut:
1. **Fork** repositori ini.
2. Buat branch fitur baru: `git checkout -b fitur/nama-fitur`
3. Commit perubahan: `git commit -m 'feat: menambahkan fitur X'`
4. Push ke branch: `git push origin fitur/nama-fitur`
5. Buka **Pull Request** dengan deskripsi perubahan yang jelas.

> 📌 Pastikan kode mengikuti standar penulisan yang konsisten dan telah diuji secara lokal sebelum mengajukan PR.

---

## 📜 Lisensi
Proyek ini dilisensikan di bawah **ISC License**. Lihat file `LICENSE` untuk detail lebih lanjut.

---

## 🔗 Tautan Penting
- 💬 **Discord Server:** [Gabung Komunitas](https://discord.gg/B2NznnMmuB)
- 🤖 **Invite Bot:** [Tambahkan ke Server](https://discordapp.com/oauth2/authorize?client_id=844722011125055500&scope=bot&permissions=8)
- 📦 **NPM Dependencies:** Lihat `package.json` untuk daftar lengkap dependensi.

*Dikembangkan oleh [Tsiqoh](https://github.com/indogegewepe)*

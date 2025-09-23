// Ambil elemen tujuan
const titleEl = document.getElementById("materi-title");
const descEl = document.getElementById("materi-desc");

// Data materi (bisa ditambah lagi nanti)
const materiData = {
  jaringan: {
    title: "Materi Jaringan Komputer",
    sections: [
      {
        subtitle: "1. Pengertian Jaringan Komputer",
        content: `
          <p>Jaringan komputer adalah sekumpulan komputer atau perangkat lain yang
          saling terhubung agar bisa berkomunikasi dan berbagi sumber daya.</p>
          <ul>
            <li><b>Data & File</b> → dokumen, musik, video bisa diakses bersama.</li>
            <li><b>Perangkat keras</b> → printer, scanner, penyimpanan server.</li>
            <li><b>Koneksi internet</b> → banyak perangkat bisa memakai satu jaringan internet.</li>
          </ul>
          <p><i>Tujuan utama:</i> efisiensi, kemudahan akses informasi, dan komunikasi cepat.</p>
        `
      },
      {
        subtitle: "2. Jenis-Jenis Jaringan (berdasarkan jangkauan)",
        content: `
          <ul>
            <li><b>LAN</b> → area kecil seperti rumah, sekolah, kantor.</li>
            <li><b>MAN</b> → mencakup kota atau kampus besar.</li>
            <li><b>WAN</b> → sangat luas, bahkan antar negara. Internet = WAN terbesar.</li>
          </ul>
        `
      },
      {
        subtitle: "3. Topologi Jaringan",
        content: `
          <ul>
            <li><b>Bus</b> → semua perangkat terhubung ke satu kabel utama. Murah tapi rawan.</li>
            <li><b>Star</b> → semua perangkat ke switch/hub. Paling populer, mudah dikelola.</li>
            <li><b>Ring</b> → melingkar, data satu arah. Kalau satu rusak, bisa terganggu.</li>
            <li><b>Mesh</b> → semua perangkat saling terhubung. Handal tapi mahal.</li>
          </ul>
        `
      },
      {
        subtitle: "4. Perangkat Jaringan",
        content: `
          <ul>
            <li><b>Router</b> → hubungkan jaringan & internet.</li>
            <li><b>Switch</b> → hubungkan banyak perangkat dalam LAN.</li>
            <li><b>Hub</b> → mirip switch tapi kurang efisien.</li>
            <li><b>Modem</b> → hubungkan komputer ke internet via ISP.</li>
            <li><b>Access Point</b> → sediakan koneksi Wi-Fi.</li>
          </ul>
        `
      },
      {
        subtitle: "5. Protokol dan Alamat Jaringan",
        content: `
          <p><b>Protokol:</b></p>
          <ul>
            <li>TCP/IP → dasar komunikasi internet</li>
            <li>HTTP/HTTPS → buka website</li>
            <li>FTP → transfer file</li>
            <li>SMTP, POP3, IMAP → email</li>
          </ul>
          <p><b>Alamat:</b></p>
          <ul>
            <li>IP Address → contoh IPv4: 192.168.1.1 | IPv6: 2001:0db8::1</li>
            <li>MAC Address → alamat fisik kartu jaringan</li>
            <li>DNS → ubah domain ke IP (contoh: google.com → 142.250.190.78)</li>
          </ul>
        `
      }
    ]
  },

sistemoperasi: {
    title: "Sistem Operasi",
    sections: [
      {
        subtitle: "1. Pengertian Sistem Operasi",
        content: `
          <p>Sistem operasi (OS) adalah perangkat lunak utama yang menghubungkan pengguna,
           aplikasi, dan perangkat keras. Tanpa OS, komputer atau ponsel tidak dapat 
           digunakan dengan efektif.</p>
        `
      },
      {
        subtitle: "2. Fungsi Utama Sistem Operasi",
        content: `
          <ul>
            <li><b>Manajemen Proses</b> → mengatur jalannya program (multitasking).</li>
            <li><b>Manajemen Memori</b> → mengalokasikan RAM untuk aplikasi.</li>
            <li><b>Manajemen File</b> → mengatur penyimpanan, baca/tulis, hapus file.</li>
            <li><b>Manajemen Perangkat</b> → menghubungkan hardware (keyboard, printer, dll)</li>
            <li><b>Keamanan & Akses</b> → melindungi data dengan password/hak akses.</li>
            <li><b>User Interface</b> → menyediakan antarmuka (CLI/GUI).</li>
          </ul>
        `
      },
      {
        subtitle: "3. Jenis Sistem Operasi",
        content: `
          <ul>
            <li><b>Batch Processing</b> → proses berkelompok tanpa interaksi langsung.</li>
            <li><b>Time Sharing</b> → banyak pengguna bergantian dalam waktu singkat.</li>
            <li><b>Distributed</b> → beberapa komputer bekerja seolah satu sistem.</li>
            <li><b>Real-Time</b> → respon cepat (robot, pesawat, medis).</li>
            <li><b>Embedded</b> → untuk perangkat khusus (ATM, IoT, smartphone).</li>
          </ul>
        `
      },
      {
        subtitle: "4. Contoh OS",
        content: `
          <ul>
            <li><b>Komputer</b> → Windows,Linux,macOS</li>
            <li><b>Mobile</b> → Android,iOS</li>
            <li><b>Server</b> → Unix,Linux,Server</li>
            <li><b>Embedded</b> → RTOS, VxWorks</li>
          </ul>
        `
      },
      {
        subtitle: "5. Struktur OS",
        content: `
          <ul>
            <li><b>Kernel</b> → Inti Sistem Operasi</li>
            <li><b>Shell</b> → Penghubung pengguna dengan kernel</li>
            <li><b>File System</b> → Pengelolaan Data</li>
            <li><b>Device Driver</b> → Pengendali perangkat Keras</li>
          </ul>
        `
      }
    ]
  }
};


// ambil parameter dari URL, contoh: materi.html?materi=jaringan
const params = new URLSearchParams(window.location.search);
const materiKey = params.get("materi") || "jaringan"; // default: jaringan

// render materi
if (materiData[materiKey]) {
  const materi = materiData[materiKey];
  titleEl.textContent = materi.title;

  materi.sections.forEach(sec => {
    const sectionEl = document.createElement("div");

    const subtitleEl = document.createElement("h3");
    subtitleEl.textContent = sec.subtitle;

    const contentEl = document.createElement("div");
    contentEl.innerHTML = sec.content;

    sectionEl.appendChild(subtitleEl);
    sectionEl.appendChild(contentEl);
    descEl.appendChild(sectionEl);
  });
} else {
  titleEl.textContent = "Materi Tidak Ditemukan";
  descEl.innerHTML = "<p style='color:red'>Silakan pilih materi yang tersedia.</p>";
}

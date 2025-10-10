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
        `,
      },
      {
        subtitle: "2. Jenis-Jenis Jaringan (berdasarkan jangkauan)",
        content: `
          <ul>
            <li><b>LAN</b> → area kecil seperti rumah, sekolah, kantor.</li>
            <li><b>MAN</b> → mencakup kota atau kampus besar.</li>
            <li><b>WAN</b> → sangat luas, bahkan antar negara. Internet = WAN terbesar.</li>
          </ul>
        `,
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
        `,
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
        `,
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
        `,
      },
    ],
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
        `,
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
        `,
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
        `,
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
        `,
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
        `,
      },
    ],
  },

  cryptocurrency: {
    title: "Cryptocurrency",
    sections: [
      {
        subtitle: "1. Pengertian Cryptocurrency",
        content:
          "<p>Cryptocurrency adalah mata uang digital yang menggunakan teknologi blockchain dan kriptografi untuk menjamin keamanan transaksi, mengontrol penciptaan unit baru, dan memverifikasi transfer aset. </p>",
      },
      {
        subtitle: "2. Pengertian Block-Chain",
        content: `
          <p>Blockchain adalah teknologi penyimpanan dan pencatatan data digital yang tersusun dari rangkaian blok-blok data yang saling terhubung dan diamankan dengan kriptografi.
Setiap blok berisi informasi transaksi dan terdistribusi ke seluruh jaringan komputer (node), sehingga transparan, aman, dan tidak dapat diubah tanpa persetujuan seluruh jaringan.</p>
        `,
      },
      {
        subtitle: "3. Komponen pada Cryptocurrency",
        content: `
          <ul>
            <li><b>Block</b> → berisi data transaksi, waktu, dan kode unik (hash).</li>
            <li><b>Chain</b> → setiap blok terhubung ke blok sebelumnya seperti membentuk rantai.</li>
            <li><b>Desentralisasi</b> → Tidak ada server pusat, data disebar pada setiap node.</li>
            <li><b>Security</b> → sulit diubah karena setiap blok terkunci dengan kriptografi</li>
            <li><b>Transparent</b> → semua transaksi bisa dilihat publik, tapi identitas anonim.</li>
            <li><b>Smart Contract</b> → program otomatis berjalan di blockchain tanpa perantara.</li>
          </ul>
        `,
      },
      {
        subtitle: "4. Jenis Cryptocurrency",
        content: `
          <ul>
            <li><b>Bitcoin (BTC)</b> → Cryptocurrency pertama dan paling terkenal, digunakan sebagai alat tukar dan penyimpan nilai.</li>
            <li><b>Ethereum (ETH)</b> → Fokus pada smart contract dan aplikasi terdesentralisasi (DApp)</li>
            <li><b>Binance Coin (BNB)</b> → Digunakan di ekosistem Binance untuk biaya transaksi dan layanan.</li>
            <li><b>Tether (USDT)</b> → Stablecoin yang nilainya dipatok ke dolar AS (1 USDT ≈ 1 USD).</li>
            <li><b>Solana (SOL)</b> → Dikenal karena kecepatan transaksi yang tinggi dan biaya rendah.</li>
          </ul>
        `,
      },
    ],
  },
  python: {
    title: "Python",
    sections: [
      {
        subtitle: "1. Pengertian Python",
        content:
          "<p>Python adalah bahasa pemrograman tingkat tinggi yang serbaguna, mudah dibaca, dan berorientasi objek. Bahasa ini diciptakan oleh Guido van Rossum dan dirilis pada tahun 1991.Python dirancang dengan penekanan kuat pada keterbacaan kode (readability), seringkali menggunakan sintaks yang memungkinkan programmer untuk mengungkapkan konsep dalam baris kode yang lebih sedikit dibandingkan bahasa lain. Hal ini membuatnya ideal untuk pemula. </p>",
      },
      {
        subtitle: "2. Sifat Utama",
        content: `
          <ul>
          <li><b>Interpreted</b> (Diterjemahkan): Kode Python dijalankan baris demi baris, yang mempermudah debugging (pencarian kesalahan).</li>
          <li><b>Dynamically</b> Typed (Pengetikan Dinamis): Anda tidak perlu mendeklarasikan tipe data suatu variabel (misalnya, bilangan bulat, teks) sebelum menggunakannya. Tipe data ditentukan saat runtime.</li>
          <li><b>Cross-platform</b> (Lintas-platform): Kode yang ditulis di satu sistem operasi (seperti Windows) umumnya dapat berjalan di sistem operasi lain (seperti macOS atau Linux) tanpa banyak perubahan.</li>
          .</ul>
        `,
        
      },
      {
        subtitle: "3. Kegunaan Dan Aplikasi",
        content: `
          <ul>
          <p>Fleksibilitas Python menjadikannya pilihan utama di berbagai bidang:</p>
          <li>Pengembangan Web (Backend) : Digunakan untuk membangun sisi server dari aplikasi web yang kuat.</li>
          <li>Pembelajaran Mesin (Machine Learning) & AI : Bahasa dominan dalam pengembangan model AI dan Deep Learning.</li>
          <li>Pengembangan Perangkat Lunak : Umum	Digunakan sebagai "bahasa penghubung" dan untuk membuat prototype cepat.</li>
          </ul>
        
        `
      }
    ],
  },
  
  sistemindustri: {
    title: "Materi Sistem Industri",
    sections: [
      {
        subtitle: "1. Pengertian Sistem Industri",
        content: `
          <p>Sistem Industri adalah disiplin ilmu rekayasa yang menerapkan prinsip-prinsip sistem untuk merancang, 
          meningkatkan, dan mengelola kompleksitas operasi suatu organisasi, baik itu pabrik manufaktur maupun penyedia jasa
          Inti dari pendekatan ini adalah melihat keseluruhan organisasi—dari pemasok bahan baku hingga pelanggan akhir—sebagai
          satu sistem terpadu (integrated system). Daripada fokus pada satu bagian (misalnya, hanya mesin atau hanya karyawan),
          sistem industri berfokus pada interaksi, aliran, dan hubungan antar komponen untuk mencapai kinerja optimal.</p>
        `,
      },
      {
        subtitle: "2. Faktor Manusia (Man/Personnel)",
        content: `
        <p>Ini bukan hanya soal jumlah pekerja, tetapi juga tentang produktivitas, ergonomi, dan keselamatan.</p>
          <ul>
            <li><b>Ergonomi:</b> → Perancangan stasiun kerja, alat, dan prosedur agar sesuai dengan
            kemampuan fisik dan mental pekerja, meminimalkan kelelahan dan risiko cedera.</li>
            <li><b>Pengukuran Kerja:</b> → Mengukur waktu baku yang dibutuhkan untuk menyelesaikan tugas,
            penting untuk perencanaan kapasitas dan penetapan standar upah.</li>
            <li><b>Kepuasan Kerja: </b> → Motivasi dan keterlibatan pekerja sangat memengaruhi kualitas dan efisiensi.</li>
          </ul>
        `,
      },
      {
        subtitle: "3. Material dan Rantai Pasok (Material & Supply Chain)",
        content: `
        <p>Fokus pada pergerakan material secara keseluruhan, mulai dari pengadaan hingga produk jadi didistribusikan.</p>
          <ul>
            <li><b>Manajemen Inventaris:</b> → Menentukan kapan harus memesan dan berapa banyak, untuk menghindari kelebihan stok (biaya penyimpanan)
             dan kekurangan stok (kehilangan penjualan).</li>
            <li><b>Logistik:</b> → Merancang jaringan transportasi, gudang, dan penyimpanan agar pengiriman cepat dan biaya rendah.</li>
          </ul>
        `,
      },
      {
        subtitle: "4. Mesin, Peralatan, dan Energi (Machine & Energy)",
        content: `
        <p>Fokus pada pemanfaatan aset fisik secara maksimal.</p>
          <ul>
            <li><b>Perawatan (Maintenance):</b> → Menerapkan strategi perawatan prediktif atau pencegahan untuk meminimalkan
            waktu henti (kerusakan mesin tak terduga) yang mahal.</li>
            <li><b>Kapasitas:</b> → Menentukan kapasitas produksi maksimum mesin dan mengidentifikasi bottleneck
            (titik hambatan) dalam aliran proses.</li>
            <li><b>Efisiensi Energi:</b> → Menganalisis dan mengurangi konsumsi energi dalam proses manufaktur.</li>
          </ul>
        `,
      },
      {
        subtitle: "5. Metode dan Informasi (Method & Information System)",
        content: `
          <p>Metode adalah "otak" dari sistem, dan informasi adalah "saraf" yang menghubungkannya.</p>
          <ul>
            <li><b>Tata Letak Fasilitas (Facility Layout):</b> → Merancang penempatan mesin, departemen, dan gudang untuk meminimalkan jarak perpindahan material.</li>
            <li><b>Sistem Informasi Manajemen (MIS):</b> → Penggunaan software (seperti ERP atau MES) untuk mengumpulkan data real-time, memfasilitasi komunikasi
            antar departemen, dan mendukung pengambilan keputusan.</li>
        `,
      },
    ],
  },
};

// ambil parameter dari URL, contoh: materi.html?materi=jaringan
const params = new URLSearchParams(window.location.search);
const materiKey = params.get("materi") || "jaringan"; // default: jaringan

// render materi
if (materiData[materiKey]) {
  const materi = materiData[materiKey];
  titleEl.textContent = materi.title;

  materi.sections.forEach((sec) => {
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
  descEl.innerHTML =
    "<p style='color:red'>Silakan pilih materi yang tersedia.</p>";
}

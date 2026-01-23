export interface NewsItem {
  date: string
  title: string
  description: string
  image: string
  youtubeUrl?: string
  fullDescription?: string
  slug: string
  location?: { lat: number; lng: number }
  locationName?: string
  mapsUrl?: string
}

export const newsData: NewsItem[] = [
  {
    date: "25 Desember 2025",
    title: "Klethik Klethik Ibu Suyatmi",
    description:
      "UMKM lokal yang mengembangkan aneka snack tradisional berbasis jagung dan singkong seperti keripik pisang, marning, dan manggleng.",
    fullDescription:
      "UMKM ini dirintis sejak tahun 1992 dengan modal awal sebesar Rp50.000 dan terus berkembang hingga saat ini.\n\nJenis usaha yang dijalankan meliputi produksi aneka snack tradisional antara lain keripik pisang gurih, keripik pisang manis, marning jagung gurih, marning pedas manis, serta manggleng gurih dan manggleng manis. Selain itu, UMKM ini juga memproduksi lemper, risol, sarang burung (tahu isi telur puyuh), nogosari, apem jagung, tiwul instan, dan tepung jagung alami tanpa bahan pengawet.\n\nPemasaran dilakukan dengan sistem penjualan langsung ke wilayah Yogyakarta, Bandung, dan pasar tradisional. Pembayaran masih dilakukan secara tunai, sementara pada kegiatan pameran telah digunakan barcode sebagai media informasi produk.\n\nSelain usaha olahan pangan, UMKM ini juga mengelola peternakan kambing putih sebanyak 32 ekor dan ayam sebagai usaha pendukung. Dengan pengalaman lebih dari tiga dekade, UMKM ini berkomitmen melestarikan pangan tradisional serta meningkatkan nilai tambah hasil pertanian lokal.",
    image: "/foto-umkm/klethik-klethik.jpeg",
    youtubeUrl: "https://youtu.be/fsenkqs3ie8?si=0BmhikoopeYQB-2n",
    slug: "klethik-klethik-ibu-suyatmi",
    location: { lat: -7.8414561, lng: 110.712003 },
    locationName: "Klethik Klethik Ibu Suyatmi",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Klethik+Klethik+IBU+SUYATMI",
  },
    {
    date: "25 Desember 2025",
    title: "Terampil Mbah Mardi",
    description:
    "Perajin dan pelaku seni wayang yang merintis pembuatan wayang dari bahan sederhana sejak usia sekolah dasar.",
    fullDescription:
    "Pelaku usaha dan seni ini memiliki latar belakang pendidikan sebagai guru agama serta menguasai hampir semua bidang studi kecuali matematika. Pengalaman merantau hingga Jakarta dan tampil bermain seni hingga larut malam menjadi bagian dari perjalanan hidupnya.\n\nKetertarikan pada dunia wayang dimulai sejak kelas 6 SD, tepat pada 1 Muharam, setelah menonton pertunjukan wayang. Dalam waktu satu bulan, ia mulai membuat wayang sendiri dari bahan kardus bekas yang digunting, dicat menggunakan bahan alami seperti daun jati untuk warna merah, daun koro untuk warna biru, dan arang untuk warna hitam. Dalam satu malam mampu membuat hingga 20 wayang, dengan gagang dari sodo. Dari hasil tersebut, ia pernah memperoleh penghasilan hingga Rp500.000, yang kemudian digunakan untuk membeli tatah wayang.\n\nProses pembuatan wayang sempat bereksperimen menggunakan berbagai bahan seperti kardus rangkap, triplek, seng, plastik, hingga kulit. Namun karena faktor keamanan, kesulitan produksi, dan daya tahan bahan, akhirnya kembali menggunakan kardus yang digunakan selama bertahun-tahun. Usaha ini sempat berhenti karena bahan mudah rusak terkena air dan plastik dinilai terlalu tipis.\n\nHarga wayang kecil berkisar sekitar Rp5.000 dengan biaya produksi sekitar Rp25.000–Rp30.000 per paket bahan, dan dijual kembali hingga Rp60.000. Penjualan dilakukan di seluruh wilayah Gunungkidul dan DIY, baik secara langsung dari rumah, melalui telepon, media online, maupun melalui Galeri Lumbung Mataram. Pada masa awal pementasan wayang, penghasilan dalam satu hari satu malam pertunjukan dapat mencapai Rp2.000.000 hingga Rp4.000.000.\n\nProduk wayang yang dihasilkan sangat beragam, meliputi tokoh-tokoh pewayangan seperti Srikandi, Ongko Wijoyo, Kresno, Anoman, Arjuno, Semar, Petruk, Punokawan satu set (isi 4), hingga wayang hewan seperti harimau dan lainnya. Ukuran wayang bervariasi dari kecil hingga besar dengan harga berkisar antara Rp30.000 sampai Rp300.000 per buah, dan sekitar Rp150.000 untuk satu set.\n\nSelain produksi, pelaku juga aktif mengikuti pameran dengan biaya partisipasi sekitar Rp500.000–Rp600.000 dan memberikan honor kepada pihak pembuat pameran. Hingga kini, usaha dan karya seni wayang ini menjadi bagian dari pelestarian budaya tradisional sekaligus sumber penghidupan yang bernilai ekonomi dan edukatif.",
    image: "/foto-umkm/wayang.PNG",
    youtubeUrl: "https://youtu.be/zy_A4yYhmvs?si=OM81X6OlI1_UJbv9",
    slug: "terampil-mbah-mardi",
    location: { lat: -7.840692, lng: 110.7094281 },
    locationName: "pengrajin wayang mbah Mardi",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pengrajin+wayang+mbah+mardi",
  },
    {
    date: "25 Desember 2025",
    title: "Lampu Antik Barokah",
    description:
      "Usaha lampu antik berbahan aluminium bekas dengan corak khas barokah yang telah berjalan turun-temurun hingga generasi kedua.",
    fullDescription:
      "Lampu Antik Barokah merupakan usaha kerajinan lampu modifikasi yang telah dirintis sejak lebih dari 10 tahun lalu. Pada awalnya, produksi dilakukan secara terbatas oleh anggota keluarga, sebelum akhirnya berkembang dan merekrut karyawan seiring meningkatnya permintaan.\n\nBahan utama lampu berasal dari aluminium bekas yang diperoleh dari rosok atau barang rongsokan. Aluminium tersebut kemudian diolah dan dibentuk dengan corak khas barokah. Dalam proses produksinya, untuk ukuran lampu kecil, usaha ini mampu menghasilkan sekitar 200 buah lampu per bulan.\n\nSelain memproduksi lampu antik, usaha ini juga memproduksi lampu jalan serta perabot seperti meja dan kursi berbahan aluminium. Bahan baku aluminium diperoleh dari wilayah Boyolali dan Klaten, dengan harga bahan baku terakhir berada di kisaran Rp41.500 per kilogram, naik dari sebelumnya Rp38.000.\n\nPemasaran produk dilakukan melalui berbagai pameran, antara lain di Yogyakarta, Wonosari, dan Jakarta. Usaha ini juga sempat mengikuti pameran pada masa pandemi COVID-19 serta memanfaatkan pemasaran online. Produk Lampu Antik Barokah bahkan pernah diekspor ke Yunani dan Malaysia melalui jalur distribusi di Yogyakarta.\n\nDalam proses pembakaran, usaha ini sempat menggunakan bahan bakar solar, namun menghadapi kendala risiko ledakan dan kelangkaan bahan bakar. Sebagai alternatif, digunakan kayu bakar yang lebih aman, meskipun memiliki kekurangan berupa waktu pembakaran yang lebih lama dan polusi asap.\n\nHarga produk lampu bervariasi, mulai dari Rp550.000 untuk ukuran kecil hingga mencapai Rp25.000.000 untuk lampu berukuran besar dan desain khusus. Usaha ini merupakan usaha turun-temurun yang dimulai oleh Pak Rusmani dan kini dilanjutkan oleh generasi kedua sebagai bentuk keberlanjutan ekonomi sekaligus pelestarian keterampilan kerajinan lokal.",
    image: "/foto-umkm/lampu-antik-barokah.PNG",
    youtubeUrl: "https://youtu.be/zy_A4yYhmvs?si=OM81X6OlI1_UJbv9",
    slug: "lampu-antik-barokah",
    location: { lat: -7.843503, lng: 110.7093501 },
    locationName: "Lampu Antik Barokah",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lampu+Antik+Barokah",
    },
  {
    date: "25 Desember 2025",
    title: "Tahu Balap Pak Tri Wasgito",
    description:
      "Usaha produksi tahu sejak 2015 dengan kapasitas besar, melayani pasar tradisional dan pemesanan harian.",
    fullDescription:
      "Usaha Tahu Balap milik Pak Tri Wasgito berdiri sejak tahun 2015 dan berawal dari usaha keluarga yang diwariskan oleh saudara. Pada tahap awal, pemasaran dilakukan melalui tukang sayur dan pedagang gorengan.\n\nSaat ini, kapasitas produksi dapat mencapai hingga 1 ton per hari, meliputi tahu pong dan tahu kuning dengan jumlah produksi antara 200 hingga 2.000 potong per jenis. Proses produksi dilakukan setiap hari tanpa libur untuk memenuhi permintaan pasar.\n\nPemasaran kini mencakup pasar tradisional dan sistem pemesanan langsung, dengan kapasitas satu dapur produksi mampu melayani hingga 6.000 tahu per hari. Kontak pemilik usaha dapat dihubungi melalui nomor 0878-2049-7252.\n\nHambatan utama usaha meliputi pengelolaan limbah, bahan baku, dan proses produksi. Limbah cair diolah melalui sistem penyaringan berulang hingga menjadi air bersih dan dicampur kaporit sebagai solusi ramah lingkungan.\n\nPada masa pandemi COVID-19, omzet penjualan meningkat signifikan. Namun, kendala muncul pada ketersediaan bahan baku karena ketergantungan pada kedelai impor dari Amerika Serikat yang didatangkan melalui pelabuhan Semarang. Kedelai impor memiliki daya simpan lebih lama dan kualitas stabil, sementara kedelai lokal memiliki cita rasa lebih baik tetapi masa simpan lebih singkat.",
    image: "/foto-umkm/tahu-balap-pak-tri-wasgito.PNG",
    youtubeUrl: "https://youtu.be/zy_A4yYhmvs?si=OM81X6OlI1_UJbv9",
    slug: "tahu-balap-pak-tri-wasgito",
    location: { lat: -7.8419098, lng: 110.7103121 },
    locationName: "tahu balap pak Tri",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tahu+Balap+Pak+Tri",
    },
  {
    date: "25 Desember 2025",
    title: "Terapi & Praktik Mitella",  
    description:
      "Layanan edukasi dan praktik dasar pertolongan pertama yang berfokus pada penanganan cedera dan kondisi darurat.",
    fullDescription:
      "Terapi dan praktik mitella merupakan kegiatan edukatif yang berfokus pada peningkatan keterampilan dasar pertolongan pertama dalam kondisi darurat maupun kecelakaan sehari-hari. Materi yang diberikan bersifat praktis dan aplikatif, sehingga mudah dipahami dan diterapkan oleh peserta.\n\nMateri utama yang diajarkan meliputi siaga bencana, penanganan cedera jaringan lunak, penanganan luka bakar, serta penanganan perdarahan dan kondisi syok. Setiap materi disampaikan secara teori dan langsung dilanjutkan dengan praktik untuk memastikan peserta memahami langkah-langkah penanganan yang benar.\n\nPraktik mitella difokuskan pada teknik pembidaian dan penyanggaan anggota tubuh yang mengalami cedera, terutama pada kasus patah tulang ringan, keseleo, atau cedera otot. Peserta dilatih menggunakan alat sederhana yang mudah ditemukan di lingkungan sekitar.\n\nKegiatan terapi dan praktik ini sangat bermanfaat bagi masyarakat umum, relawan, maupun kelompok siaga bencana desa, karena mampu meningkatkan kesiapsiagaan serta mengurangi risiko cedera lanjutan sebelum mendapatkan penanganan medis profesional.",
    image: "/foto-umkm/terapi-praktik-mitella.PNG",
    youtubeUrl: "https://youtu.be/zy_A4yYhmvs?si=OM81X6OlI1_UJbv9",
    slug: "terapi-praktik-mitella",
    location: { lat: -7.8434409, lng: 110.712401 },
    locationName: "Griya sehat as-syifa",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Griya+sehat+as-syifa",
    },
]

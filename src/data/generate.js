const generateJob = (
  analyst,
  titleContent,
  writingStyle,
  promptType,
  language
) => {
  if (promptType === "mythic") {
    if (language === "Indonesia") {
      return `Generate content based on the following analysis:
        
        ${analyst}

        Lalu gunakan konten hasil analisa ini untuk membuat konten tentang lowongan kerja ${titleContent}. menggunakan bahasa santai yang digunakan oleh ${writingStyle} in bahasa Indonesia dan pastikan konten berjumlah sekitar 2000 kata dalam format HTML (abaikan tag html, head, body) langsung saja isi dari tag body. 
        Saat membuat konten kurangi penggunaan tanda baca koma (,). Konten harus mengandung tag h2, setiap paragraf memakai tag p, dan setiap contoh, cara, prosedur, dll menggunakan tag ul. 
        
        Struktur Konten: 
        Intro (Introduction): Buatlah 2 paragraf intro yang menarik, berkaitan dengan keyword utama, menggunakan tag P. Kemudian jelaskan secara deskriptif lengkap dalam 300 kata mengenai ${titleContent}.
        Ringkasan berbentuk Tabel: Buat tabel horizontal (dua kolom key–value) berisi Posisi, Nama Perusahaan, Lokasi, Pendidikan (jika ada tulis minimal pendidikan seperti: SMA/SMK, D3, S1), Gaji (jika kosong tulis ‘Negosiasi’). Output hanya HTML dengan CSS inline berikan style simple dan tiap value menggunakan font-weight: bold dan tidak perlu menggunakan tag <th></th>.

        Bagian Utama (Main Section):
        Gunakan tag H2 untuk masing-masing topik terkait, termasuk konten dari data panduan. 
        Untuk setiap header (tag H2) dan subheader (tag H3), jelaskan dengan paragraf menarik. 
        Setiap penjelasan dari tag H2 dan H3 harus diawali dengan intro/summary, jadi ada paragraf tag P untuk intro dan penjelasannya hingga tuntas (2 paragraf atau lebih).
        Paparkan secara mendalam data dari Poin penting hal spesifik  sebagai tambahan penjelasan dalam bentuk bullet points (tag UL) untuk setiap Search Intent.
        Analisa dan jelaskan masing-masing keyword turunan dalam H3 dengan paragraf penjelasan detail di bawah tag H3 atau bulletpoin tag UL.
        Bahas juga secara mendalam pada data panduan  topik terkait  sebagai tambahan penjelasan untuk masing-masing header/subheader yang cocok.
        Jangan membuat link tag a. Sinonimkan setiap header/subheader agar unik dan berbeda dari data panduan.

        Ketentuan Tambahan:
        Jangan menyebutkan website atau nama website, ganti dengan  officialsite  jika perlu. Sajikan contoh, langkah, atau tips sesuai kebutuhan.
        Jangan mengulangi penjelasan yang sudah ada, tulis ulang keyword penting di tag P awal dan penutup konten.Isi konten harus sesuai judul, jika menulis angka pada judul (misal 50 cara.., 30 daftar.., dsb), maka jumlah header dan penjelasannya sebanyak angka tersebut. 
        Penutup (Conclusion): ajak calon pekerja untuk melamar jika merasa telah menenuhi syarat, kualifikasi dan berkas yang dibutuhkan.

        Tambahan: 
        Di bagian paling akhir artikel, tambahkan sebuah tombol link berbentuk <a> dengan style inline CSS:
        style="display:inline-block;padding:12px 20px;background-color:#000;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;"
        Tulisan pada tombol: "Lamar Sekarang".
        Jika ada website utama perusahaan, gunakan sebagai href link tersebut. Jika tidak ada, gunakan href="#" saja.
        `;
    } else {
      return `Generate content based on the following analysis:
        
        ${analyst}

        Then, use the analysis results to create a job vacancy article about ${titleContent}. The content must be written in English using a casual tone that reflects ${writingStyle}. The article should be around 2000 words in HTML format (ignore html, head, body tags) and directly write the content inside the body tag. 
            
        While writing, reduce the use of commas (,). The content must include H2 tags, each paragraph wrapped with a P tag, and every example, method, step, or procedure written inside UL tags. 
            
        Content Structure: 
        Intro (Introduction): Write 2 engaging intro paragraphs related to the main keyword using P tags. Then, provide a complete descriptive explanation of ${titleContent} in 300 words.  
            
        Summary Table: Create a horizontal table (two columns: key–value) containing Position, Company Name, Location: Remote, and Salary (if empty, write “Negotiable”). Output only in HTML with inline CSS, make it simple, each value must use font-weight:bold, and do not use <th> tags.  
            
        Main Section:  
        Use H2 tags for each related topic, including data from the analysis.  
        For each header (H2) and subheader (H3), provide engaging explanations.  
        Each H2 and H3 must begin with an intro/summary paragraph (P tag), followed by 2 or more detailed paragraphs.  
        Deeply explain the specific data and important points as bullet points (UL tags) for each Search Intent.  
        Analyze and explain each secondary keyword under H3 with detailed paragraphs or UL bullet points.  
        Also elaborate on related topics from the analysis as additional explanations under the appropriate headers/subheaders.  
        Do not create <a> links inside the content. Synonymize each header/subheader so they are unique and different from the analysis data.  
            
        Additional Rules:  
        Do not mention website names directly; replace them with “officialsite” if necessary.  
        Provide examples, steps, or tips where needed.  
        Avoid repeating the same explanations, but rewrite important keywords in the opening and closing paragraphs.  
        The content must fully match the title. If the title contains a number (e.g., “50 tips…”, “30 lists…”), then the number of headers and explanations must equal that number.  
            
        Conclusion: End the content by encouraging job seekers to apply if they meet the requirements, qualifications, and documents needed.  
      `;
    }
  } else if (promptType === "epic") {
    return `Generate content based on the following analysis:
        
        ${analyst}

        Lalu gunakan konten hasil analisa ini untuk membuat konten tentang lowongan kerja ${titleContent} menggunakan bahasa santai yang digunakan oleh ${writingStyle} in bahasa indonesia dan pastikan konten berjumlah sekitar 2000 kata dalam format HTML (abaikan tag html, head, body, div) langsung saja isi dari tag body. 
        Saat membuat konten kurangi penggunaan tanda baca koma (,). Setiap setelah judul <h3> tulis itro/summary judul sebelumnya. Mulailah menulis artikel pembuka sebanyak 1 paragraf tentang keyword utama yang menarik kemudian paragraf kedua tentang perusahaan. 
        Lalu di lanjutkan dengan judul Deskripsi dilanjutkan dengan list, Kriteria dilanjutkan dengan list dan dilanjutkan dengan list berkas/file yang dibutuhkan untuk melamar pekerjaan di posisi ini. Setelah itu akhiri dengan paragraf ajakan mengirimkan lamaran jika siap melakukan jobdesk, Kriteria dan berkas sudah siap. 
        Untuk melengkapi pembahasan pada konten ini tambahkan 5 faqs/QA agar pembaca faham tentang konten ini. gunakan format <strong>'Tulis pertanyaan'</strong><p>tulis jawabannya</p>

        Tambahan: 
        Di bagian paling akhir artikel, tambahkan sebuah tombol link berbentuk <a> dengan style inline CSS:
        style="display:inline-block;padding:12px 20px;background-color:#000;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;"
        Tulisan pada tombol: "Lamar Sekarang".
        Jika ada website utama perusahaan, gunakan sebagai href link tersebut. Jika tidak ada, gunakan href="#" saja.
        `;
  } else if (promptType === "legend") {
    return `Generate content based on the following analysis:
        
        ${analyst}
        
        Lalu gunakan konten hasil analisa ini untuk membuat konten tentang lowongan kerja ${titleContent} menggunakan bahasa sehari-hari yang digunakan oleh ${writingStyle} in bahasa indonesia dan pastikan konten berjumlah sekitar 2000 kata dalam format HTML (abaikan tag html, head, body, div) langsung saja isi dari tag body. 
        Gunakan tag <ul><li> saat membuat konten list atau <ol><li> aat membuat konten nomor. 
        Output yang Diharapkan: 
        Intro: 
        <strong>{Kata Kunci Utama}</strong> - {Paragraf pertama yang menarik, memperkenalkan topik utama dan relevansinya} {Paragraf kedua yang menghubungkan topik utama dengan tujuan pencarian dan konteks yang lebih luas dan relevan} 
        
        Bagian Utama: 
        {H2: Subjudul 1 Mengenai Topik Utama} 
        {Pemaparan singkat mengenai subjudul 1} 
        {Deskripsi lebih lanjut dengan detail dan contoh yang relevan} 
        {Subheader: Topik Terkait 1} 
        {Pemaparan tentang topik terkait 1 dan keterkaitannya dengan topik utama} 
        {Daftar poin yang menjelaskan detail penting dari topik terkait 1} 
        {H2: Subjudul 2 Mengenai Topik Utama} 
        {Deskripsi singkat subjudul 2} 
        {Pemaparan mendalam dengan contoh yang relevan} 
        {Subheader: Topik Terkait 2} 
        {Penjelasan tentang topik terkait 2} 
        {Daftar poin yang menjelaskan aspek-aspek penting topik terkait 2} 
        {Lanjutkan dengan struktur ini untuk setiap subjudul dan topik terkait} 

        Bagian Pembahasan Tambahan yang diharapkan: 
        {H2: Subjudul Tambahan 1 dari list tag H2 lainnya (ambil 2 yang paling relevan)} {Pemaparan tentang subjudul tambahan 1} {Penjelasan lebih lanjut dengan contoh yang relevan} {Lanjutkan dengan 3 struktur yang sama untuk subjudul tambahan lainnya dari data panduan bagian topik terkait} 
        
        Bagian akhir:
        {Tutup dengan Paragraf penutup yang merangkum seluruh artikel dalam 300 kata sertakan {keyword utama} di sini} 
        
        Tambahan: 
        Di bagian paling akhir artikel, tambahkan sebuah tombol link berbentuk <a> dengan style inline CSS:
        style="display:inline-block;padding:12px 20px;background-color:#000;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;"
        Tulisan pada tombol: "Lamar Sekarang".
        Jika ada website utama perusahaan, gunakan sebagai href link tersebut. Jika tidak ada, gunakan href="#" saja.

        Catatan Penting: 
        - Pastikan untuk menjelaskan setiap subjudul dan topik terkait dengan detail dan contoh yang relevan. 
        - Gunakan tag UL, OL, atau untuk menyajikan contoh, langkah-langkah, atau data penting secara terstruktur. 
        - Konten harus konsisten, terstruktur, lengkap, dan mendalam, dengan penekanan pada kualitas penjelasan untuk setiap bagian artikel.
        `;
  } else {
    return `Generate content based on the following analysis:
        
        ${analyst}

        Lalu gunakan konten hasil analisa ini untuk membuat konten tentang lowongan kerja ${titleContent}. menggunakan bahasa santai yang digunakan oleh ${writingStyle} in bahasa indonesia dan pastikan konten berjumlah sekitar 2000 kata dalam format HTML (abaikan tag html, head, body) langsung saja isi dari tag body. 
        Saat membuat konten kurangi penggunaan tanda baca koma (,). Konten harus mengandung tag h2, setiap paragraf memakai tag p, dan setiap contoh, cara, prosedur, dll menggunakan tag ul. 
        
        Struktur Konten: 
        Intro (Introduction): Buatlah 2 paragraf intro yang menarik, berkaitan dengan keyword utama, menggunakan tag P. Kemudian jelaskan secara deskriptif lengkap dalam 300 kata mengenai ${titleContent}.
        Ringkasan berbentuk Tabel: Buat tabel horizontal (dua kolom key–value) berisi Posisi, Nama Perusahaan, Lokasi, Pendidikan: SMA/SMK Sederajat, Gaji (jika kosong tulis ‘Negosiasi’). Output hanya HTML dengan CSS inline berikan style simple dan tiap value menggunakan font-weight: bold dan tidak perlu menggunakan tag <th></th>.

        Bagian Utama (Main Section):
        Gunakan tag H2 untuk masing-masing topik terkait, termasuk konten dari data panduan. 
        Untuk setiap header (tag H2) dan subheader (tag H3), jelaskan dengan paragraf menarik. 
        Setiap penjelasan dari tag H2 dan H3 harus diawali dengan intro/summary, jadi ada paragraf tag P untuk intro dan penjelasannya hingga tuntas (2 paragraf atau lebih).
        Paparkan secara mendalam data dari Poin penting hal spesifik  sebagai tambahan penjelasan dalam bentuk bullet points (tag UL) untuk setiap Search Intent.
        Analisa dan jelaskan masing-masing keyword turunan dalam H3 dengan paragraf penjelasan detail di bawah tag H3 atau bulletpoin tag UL.
        Bahas juga secara mendalam pada data panduan  topik terkait  sebagai tambahan penjelasan untuk masing-masing header/subheader yang cocok.
        Jangan membuat link tag a. Sinonimkan setiap header/subheader agar unik dan berbeda dari data panduan.

        Ketentuan Tambahan:
        Jangan menyebutkan website atau nama website, ganti dengan  officialsite  jika perlu. Sajikan contoh, langkah, atau tips sesuai kebutuhan.
        Jangan mengulangi penjelasan yang sudah ada, tulis ulang keyword penting di tag P awal dan penutup konten.Isi konten harus sesuai judul, jika menulis angka pada judul (misal 50 cara.., 30 daftar.., dsb), maka jumlah header dan penjelasannya sebanyak angka tersebut. 
        Penutup (Conclusion): ajak calon pekerja untuk melamar jika merasa telah menenuhi syarat, kualifikasi dan berkas yang dibutuhkan.

        Tambahan: 
        Di bagian paling akhir artikel, tambahkan sebuah tombol link berbentuk <a> dengan style inline CSS:
        style="display:inline-block;padding:12px 20px;background-color:#000;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;"
        Tulisan pada tombol: "Lamar Sekarang".
        Jika ada website utama perusahaan, gunakan sebagai href link tersebut. Jika tidak ada, gunakan href="#" saja.
        `;
  }
};

const generateHome = (analyst, titleContent, writingStyle, language) => {
  return `Generate content based on the following analysis:
        
        ${analyst}

        Lalu gunakan konten hasil analisa ini untuk membuat konten tentang ${titleContent}. menggunakan bahasa santai yang digunakan oleh ${writingStyle} in bahasa ${language} dan pastikan konten berjumlah sekitar 2000 kata dalam format HTML (abaikan tag html, head, body) langsung saja isi dari tag body. 
        Saat membuat konten kurangi penggunaan tanda baca koma (,). Konten harus mengandung tag h2 dan setiap paragraf harus memakai tag p. 
        
        Struktur Konten: 
        Intro (Introduction): Buatlah 2 paragraf intro yang menarik, berkaitan dengan keyword utama, menggunakan tag P. Kemudian jelaskan secara deskriptif lengkap dalam 300 kata mengenai ${titleContent}.
        
        Bagian utama (Main Section): 
        Gunakan H2 dan H3 sesuai outline hasil analisis. 
        Setiap H2 wajib punya minimal 2 paragraf pembuka + 2 paragraf detail.
        Setiap H3 wajib punya minimal 2 paragraf atau bullet point <ul>.
        Masukkan LSI ke dalam paragraf agar artikel kaya variasi kata.
        Bahas keyword turunan secara natural.
        Jangan membuat link tag a. Sinonimkan setiap header/subheader agar unik dan berbeda dari data panduan.

        Ketentuan Tambahan:
        Jangan mengulangi penjelasan yang sudah ada, tulis ulang keyword penting di tag P awal dan penutup konten. Isi konten harus sesuai judul, jika menulis angka pada judul (misal 50 cara.., 30 daftar.., dsb), maka jumlah header dan penjelasannya sebanyak angka tersebut. 
        `;
};

export { generateJob, generateHome };

const analystJob = (titleContent, writingStyle, language) => {
  return `Reply and translate all in ${language} with ${writingStyle} (plaintext directly). Analisa konten dan SEOnya: apa saja keyword utama, cari mana yang menjadi header, kemudian mana subheader dari header, begitu seterusnya. Cari juga LSI, poin, dan hal-hal yang sering dibahas dalam konten.
Pada baris pertama, buatkan judul yang tepat untuk konten berikut ini (jangan sebut judul atau semacamnya, karena akan langsung saya copy).
Jika ada penjelasan yang dilengkapi angka spesifik, tuliskan kesimpulannya.

Output harus berurutan sebagai berikut:

{judul} (paling awal)
1 keyword utama
4 list keyword turunan
Header (masing-masing header h2 beserta list subheader h3)
6 list LSI
Search Intent
List kesimpulan hal spesifik dengan angka atau poin
List 3 keyword density (2–3 kata) yang sering ditulis
Contoh format (wajib diikuti):
{judul yang menarik kurang dari 70 karakter}
Keyword utama: {1 keyword utama}

Keyword turunan: {list keyword turunan}
Header dan subheader:

H2 1: {Header 1}
 – {H3: Sub header 1 jika ada}
 – {H3: Sub header 2 jika ada}
 – {dst..}

H2 2: {Header 2}
 – {H3: Sub header 1 jika ada}
 – {H3: Sub header 2 jika ada}
 – {dst..}
{dst..}

LSI: {list latent semantic indexing}
Search Intent: {search intent}
Kesimpulan hal spesifik: {list kesimpulan hal spesifik}
Keyword density: {list keyword density}
Keterangan tambahan:
Pada contoh di atas, tanda {dst} berarti tuliskan lengkap hingga selesai semua daftar header atau subheader.
Jangan menuliskan tanda bintang seperti ** dan sebagainya.
Berikut Kontennya:
${titleContent}`;
};

const analystHome = (titleContent, writingStyle, language) => {
  return `Reply and translate all in ${language} with ${writingStyle} (plaintext directly). Analisa konten dan SEOnya: apa saja keyword utama, cari mana yang menjadi header, kemudian mana subheader dari header. Cari juga LSI, poin, dan hal-hal yang sering dibahas dalam konten properti.

Pada baris pertama, buatkan judul yang tepat untuk konten berikut ini (maksimal 70 karakter, menarik, SEO-friendly). Jangan sebut "judul" atau semacamnya.

Output harus berurutan sebagai berikut:

{judul}
1 keyword utama
4 list keyword turunan
Header dan subheader:
H2 1: {Header 1}
 – {H3: Sub header 1 jika ada}
 – {H3: Sub header 2 jika ada}
 – {dst..}

H2 2: {Header 2}
 – {H3: Sub header 1 jika ada}
 – {H3: Sub header 2 jika ada}
 – {dst..}
{dst..}

6 list LSI: {list latent semantic indexing}
Search Intent: {search intent}
List kesimpulan hal spesifik: {angka atau poin penting}
Keyword density: {list keyword density}

Keterangan tambahan:
Pada contoh di atas, tanda {dst} berarti tuliskan lengkap hingga selesai semua daftar header atau subheader.
Jangan menuliskan tanda bintang seperti ** dan sebagainya.
Berikut topik konten yang dianalisis:
${titleContent}
`;
};

export { analystJob, analystHome };

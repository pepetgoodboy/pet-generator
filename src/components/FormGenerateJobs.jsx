import useJobStore from "../store/useJobStore";
import InputField from "./InputField";
import SelectField from "./SelectField";

export default function FormGenerateJobs({ onSubmit }) {
  const { formData, setFormData, loading } = useJobStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <form onSubmit={onSubmit} id="prompt-form" className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Posisi */}
        <InputField
          label="Posisi Pekerjaan"
          name="position"
          placeholder="Masukkan Posisi Pekerjaan (Operator Produksi)"
          value={formData.position}
          onChange={handleInputChange}
          required
        />

        {/* Perusahaan */}
        <InputField
          label="Nama Perusahaan"
          name="company"
          placeholder="Masukkan Nama Perusahaan (PT. Epson Indonesia)"
          value={formData.company}
          onChange={handleInputChange}
          required
        />

        {/* Lokasi */}
        <InputField
          label="Lokasi Pekerjaan"
          name="location"
          placeholder="Masukkan Lokasi Pekerjaan (Bandung)"
          value={formData.location}
          onChange={handleInputChange}
          required
        />

        {/* Bahasa */}
        <SelectField
          label="Pilih Bahasa"
          name="language"
          value={formData.language}
          onChange={handleInputChange}
          options={[
            { value: "ID", label: "Bahasa Indonesia" },
            { value: "EN", label: "English" },
          ]}
          required
        />

        {/* Gaya Penulisan */}
        <SelectField
          label="Gaya Penulisan"
          name="writingStyle"
          value={formData.writingStyle}
          onChange={handleInputChange}
          options={[
            { value: "TribunNews.com", label: "Gaya TribunNews.com" },
            { value: "Liputan6.com", label: "Gaya Liputan6.com" },
            { value: "Hipwee", label: "Gaya Hipwee" },
            { value: "Fimela.com", label: "Gaya Fimela.com" },
            { value: "Dream.com", label: "Gaya Dream.com" },
            { value: "IdnTimes.com", label: "Gaya IdnTimes.com" },
            { value: "Kompas.com", label: "Gaya Kompas.com" },
            { value: "Ilana Tan", label: "Gaya Ilana Tan" },
            { value: "Leila S Chudori", label: "Gaya Leila S Chudori" },
            { value: "Tere Liye", label: "Gaya Tere Liye" },
            { value: "Pidi Baiq", label: "Gaya Pidi Baiq" },
            { value: "Eka Kurniawan", label: "Gaya Eka Kurniawan" },
            { value: "Andrea Hirata", label: "Gaya Andrea Hirata" },
            { value: "Lang Leav", label: "Gaya Lang Leav" },
            { value: "Boy Chandra", label: "Gaya Boy Chandra" },
            { value: "Raditya Dika", label: "Gaya Raditya Dika" },
          ]}
          required
        />

        {/* Tipe Prompt */}
        <SelectField
          label="Tipe Prompt"
          name="promptType"
          value={formData.promptType}
          onChange={handleInputChange}
          options={[
            { value: "mythic", label: "Mythic" },
            { value: "legend", label: "Legend" },
            { value: "epic", label: "Epic" },
            { value: "sma/smk", label: "SMA/SMK" },
          ]}
          required
        />
      </div>

      {/* Tombol Submit */}
      <div className="mt-8 flex flex-col gap-1">
        <p className="text-xs text-red-500">
          *Proses generate artikel akan membutuhkan waktu beberapa menit,
          silahkan tunggu sebentar sambil ngopi.
        </p>
        <button
          type="submit"
          className="w-fit bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Loading..." : "Generate Artikel"}
        </button>
      </div>
    </form>
  );
}

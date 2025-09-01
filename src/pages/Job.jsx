import { analystJob } from "../data/analyst";
import { generateJob } from "../data/generate";
import FormGenerateJobs from "../components/FormGenerateJobs";
import useJobStore from "../store/useJobStore";
import { useState } from "react";

export default function Job() {
  const { formData, setLoading, setContent, resetForm, loading, content } =
    useJobStore();

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        position,
        company,
        location,
        writingStyle,
        language,
        promptType,
      } = formData;

      const job =
        language === "Indonesia"
          ? `Lowongan Kerja ${position} ${company}, ${location}`
          : `Job Vacancy ${position} ${company}, ${location}`;

      // Analisis tahap pertama
      const analystFirst = await analystJob(job, writingStyle, language);

      const generateAnalyst = await window.puter.ai.chat(analystFirst, {
        model: "gemini-1.5-flash",
        max_tokens: 8192,
        temperature: 0.3,
      });

      const responseAnalyst = generateAnalyst.message.content;
      localStorage.setItem("analystJob", responseAnalyst);

      const resultAnalyst = localStorage.getItem("analystJob");

      // Analisis tahap kedua
      const analystSecond = await generateJob(
        resultAnalyst,
        job,
        writingStyle,
        promptType,
        language
      );

      const generateContent = await window.puter.ai.chat(analystSecond, {
        model: "gemini-1.5-flash",
        max_tokens: 8192,
        temperature: 0.7,
      });

      setContent(generateContent.message.content);

      localStorage.removeItem("analystJob");
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="font-jakarta flex w-full mx-auto max-w-6xl h-screen p-8 md:p-10 xl:p-14">
        <div className="w-full relative flex flex-col gap-12">
          <h1 className="text-3xl text-center text-blue-600 font-semibold">
            Welcome to Loker Generator
          </h1>

          {/* FORM */}
          <FormGenerateJobs onSubmit={handleSubmit} />

          {/* Hasil Artikel */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Hasil Artikel</h2>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              {loading ? (
                <p className="text-lg font-medium text-center">
                  Sedang Menyusun Artikel, Silahkan Tunggu...
                </p>
              ) : content ? (
                <pre className="whitespace-pre-wrap">{content}</pre>
              ) : (
                <p className="text-lg font-medium text-center">
                  Silahkan Generate Artikel untuk melihat hasil artikel.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

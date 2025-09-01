import { analystHome } from "../data/analyst";
import { generateHome } from "../data/generate";
import useHomeStore from "../store/useHomeStore";
import FormGenerateHome from "../components/FormGenerateHome";
import FormGenerateImage from "../components/FormGenerateImage";

export default function Property() {
  const { formData, setLoading, setContent, resetForm, loading, content } =
    useHomeStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { title, language, writingStyle } = formData;

      // Analisis tahap pertama
      const analystFirst = await analystHome(title, writingStyle, language);

      console.log(analystFirst);

      const generateAnalyst = await window.puter.ai.chat(analystFirst, {
        model: "gemini-1.5-flash",
        max_tokens: 8192,
        temperature: 0.3,
      });

      const responseAnalyst = generateAnalyst.message.content;
      localStorage.setItem("analystHome", responseAnalyst);

      const resultAnalyst = localStorage.getItem("analystHome");

      // Analisis tahap kedua
      const analystSecond = await generateHome(
        resultAnalyst,
        title,
        writingStyle,
        language
      );

      console.log(analystSecond);

      const generateContent = await window.puter.ai.chat(analystSecond, {
        model: "gemini-1.5-flash",
        max_tokens: 8192,
        temperature: 0.7,
      });

      setContent(generateContent.message.content);

      localStorage.removeItem("analystHome");
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
            Welcome to Home Generator
          </h1>

          {/* FORM */}
          <FormGenerateHome onSubmit={handleSubmit} />

          <FormGenerateImage />

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

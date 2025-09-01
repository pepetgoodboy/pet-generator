import { useState } from "react";
import InputField from "./InputField";
import { Client } from "@gradio/client";

export default function FormGenerateImage() {
  const [promptImage, setPromptImage] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const generateImage = async (e) => {
    e.preventDefault();
    try {
      // Generate Image
      const client = await Client.connect("nroggendorff/epicrealismxl");
      const result = await client.predict("/generate", {
        prompt: promptImage,
        negative_prompt: "ugly, low quality",
        width: 1024,
        height: 768,
        sample_steps: 20,
      });

      console.log(result.data[0]);

      setImageUrl(result.data[0].url);
    } catch (err) {
      console.error("Error generating image:", err);
    }
  };

  const saveImage = async () => {
    if (!imageUrl) return;

    try {
      // Ambil file dari url
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Buat nama file dari 2 kata depan prompt
      const nameFile =
        promptImage.split(" ").slice(0, 2).join(" ") || "generated";

      // Convert ke Object URL
      const blobUrl = URL.createObjectURL(blob);

      // Buat link untuk download
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${nameFile}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Bersihkan Object URL setelah dipakai
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Error saving image:", err);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <form
        id="generateImage"
        name="generateImage"
        onSubmit={generateImage}
        className="flex flex-col gap-4"
      >
        <InputField
          label="Prompt Image"
          name="promptImage"
          placeholder="Masukkan Prompt Image"
          value={promptImage}
          onChange={(e) => setPromptImage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-lg w-fit"
        >
          Generate
        </button>
      </form>

      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="Generated" className="w-64 rounded-lg" />
          <button
            onClick={saveImage}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}

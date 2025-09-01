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
      const client = await Client.connect("gokaygokay/Chroma");
      const result = await client.predict("/generate_image", {
        prompt: promptImage,
      });

      console.log(result.data);

      //   setImageUrl(result.data[0].url);

      //   const result = await window.puter.ai.txt2img(promptImage, true);
      //   console.log(result);
      //   setImageUrl(result);
    } catch (err) {
      console.error("Error generating image:", err);
    }
  };

  const saveImage = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "generated.png"; // nama file
    link.click();
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

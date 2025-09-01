import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      <div className="font-jakarta flex items-center w-full mx-auto max-w-6xl h-screen p-8 md:p-10 xl:p-14">
        <div className="w-full relative flex flex-col gap-1">
          <h1 className="text-3xl text-center text-blue-600 font-semibold">
            Welcome to Pet Generator
          </h1>
          <h2 className="text-lg text-center">
            Tools generate artikel berkualitas untuk berbagai topik dengan
            mudah.
          </h2>
          <div className="mt-4 flex gap-4 justify-center">
            <Link to="/job">
              <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer font-semibold text-white py-2 px-4 rounded-md">
                Lowongan Kerja
              </button>
            </Link>
            <Link to="/property">
              <button className="bg-black hover:bg-black/90 cursor-pointer font-semibold text-white py-2 px-4 rounded-md">
                Rumah
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

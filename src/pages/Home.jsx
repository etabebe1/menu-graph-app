import React, { useState } from "react";

// Importing home component
import Canvas from "../components/Canvas";

function Home() {
  const [text, setText] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  // LOGS:
  console.log(text);

  const handleTextChange = (evt) => {
    setText(evt.target.value);
  };

  const handleGenerateMenu = () => {
    try {
      // Assume the input text is JSON for simplicity
      const items = JSON.parse(text);
      setMenuItems(items);
    } catch (error) {
      console.error("Failed to parse text:", error);
      alert("Invalid input format");
    }
  };

  return (
    <main className="bg-colors-quantum-silver/30 h-[100vh] w-full pt-[64px]">
      <div className="relative max-w-lg mx-auto">
        <div className="bg-purple-500 w-36 h-36 rounded-full absolute left-[43%] top-[40%] mix-blend-multiply blur-md opacity-80 animate-blob"></div>
        <div className="bg-yellow-500 w-36 h-36 rounded-full absolute right-[43%] top-[40%] mix-blend-multiply blur-md opacity-80 animate-blob animation-delay-2000"></div>
        <div className="bg-pink-500 w-36 h-36 rounded-full absolute left-[40%] top-[25%]  mix-blend-multiply blur-md opacity-80 animate-blob animation-delay-5000"></div>

        <div className="text-input max-w-lg mx-auto p-4 bg-white/50  backdrop-blur-lg border border-white/50 rounded-lg shadow-md mt-5">
          <textarea
            className="w-full h-40 p-2 bg-white/60 outline-none text-colors-digital-gray/90 rounded-md border border-colors-digital-gray/20 focus:ring focus:ring-colors-matrix-green focus:ring-opacity-50"
            style={{ boxShadow: "1px 1px 50px rgba(0, 0, 0, 0.1);" }}
            value={text}
            onChange={(evt) => handleTextChange(evt)}
            placeholder="Paste your menu text here."
          />
          <button
            className="mt-4 w-full bg-colors-matrix-green/80 hover:bg-colors-matrix-green text-white font-bold py-2 px-4 rounded"
            onClick={handleGenerateMenu}
          >
            Send text
          </button>

          <ul className="mt-4 space-y-2">
            {menuItems.map((item, index) => (
              <li key={index} className="bg-white/10 text-white rounded-md p-2">
                <a href={item.link} className="hover:text-blue-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Canvas />
    </main>
  );
}

export default Home;

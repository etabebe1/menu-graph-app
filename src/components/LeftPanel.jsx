import React, { useState } from "react";

function LeftPanel() {
  const [text, setText] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  // LOGS:
  // console.log(text);

  const handleTextChange = (evt) => {
    setText(evt.target.value);
  };

  const handleGenerateMenu = () => {
    console.log("handelGeneration");
  };

  return (
    <main className="bg-colors-quantum-silver/30 h-[70vh] sm:h-[100vh] sm:w-2/3 pt-[64px]">
      <div className="relative max-w-md mx-auto">
        <div className="text-input max-w-md mx-auto p-4 bg-white/50 backdrop-blur-lg border border-white/50 rounded-lg shadow-md mt-5">
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
    </main>
  );
}

export default LeftPanel;

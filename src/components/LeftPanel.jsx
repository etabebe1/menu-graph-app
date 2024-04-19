import React, { useState } from "react";

function LeftPanel() {
  const [text, setText] = useState(false);
  const [inputText, setInputText] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  // LOGS:
  // console.log(text);

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setInputText(event.target.value);
  };

  const handleExtractClick = () => {
    extractMenuItems(inputText);
  };

  const extractMenuItems = (text) => {
    const regex = /(\b\d+\.\s)([^\d\n.]+)(?=\s|$)/g;
    const items = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      items.push({ number: match[1].trim(), text: match[2].trim() });
    }

    // console.log(items, text);

    setMenuItems(items);
  };

  return (
    <main
      className="bg-colors-quantum-silver/30 h-[70vh] sm:h-[100vh] sm:w-2/3 md:w-1/3 pt-[64px]"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="relative max-w-md mx-auto">
        <h1 className="font-semibold">1. Menu Extraction</h1>
        <div className="text-input max-w-md mx-auto p-4 bg-white/50 backdrop-blur-lg border border-white/50 rounded-lg shadow-md mt-5">
          <textarea
            className="w-full h-40 p-2 bg-white/60 outline-none text-colors-digital-gray/90 rounded-md border border-colors-digital-gray/20 focus:ring focus:ring-colors-matrix-green focus:ring-opacity-50"
            style={{ boxShadow: "1px 1px 50px rgba(0, 0, 0, 0.1)" }}
            value={inputText}
            onChange={(evt) => handleInputChange(evt)}
            placeholder="Paste your menu text here."
          />
          <button
            onClick={handleExtractClick}
            className="mt-4 w-full bg-colors-matrix-green/80 hover:bg-colors-matrix-green text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Extract
          </button>

          <p className="text-xs mb-5">
            With the extractor button, each line will be identified to the menu
            items.
          </p>
          {text && (
            <p className="text-red-500 text-sm animate-vibrate">
              No valid menu items found. Please check and try again.
            </p>
          )}

          <h2>Extracted Menu Items:</h2>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.number}. {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default LeftPanel;

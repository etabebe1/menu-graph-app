import React, { useState } from "react";

import { MdCheckCircleOutline } from "react-icons/md";

function LeftPanel() {
  const [text, setText] = useState(false);
  const [inputText, setInputText] = useState("");

  // LOGS:
  // console.log(text);

  const handleTextChange = (evt) => {
    setInputText(evt.target.value);
  };

  const handleGenerateMenu = (evt) => {
    evt.preventDefault();
    if (inputText === "") {
      alert("Please enter some text");
      return;
    }

    setText(true);
    setTimeout(() => {
      setText(false);
      setInputText("");
    }, 2000);
  };

  return (
    <main className="bg-colors-quantum-silver/30 h-[70vh] sm:h-[100vh] sm:w-2/3 md:w-1/3 pt-[64px]">
      <div className="relative max-w-md mx-auto">
        <div className="text-input max-w-md mx-auto p-4 bg-white/50 backdrop-blur-lg border border-white/50 rounded-lg shadow-md mt-5">
          <form onSubmit={handleGenerateMenu}>
            <textarea
              className="w-full h-40 p-2 bg-white/60 outline-none text-colors-digital-gray/90 rounded-md border border-colors-digital-gray/20 focus:ring focus:ring-colors-matrix-green focus:ring-opacity-50"
              style={{ boxShadow: "1px 1px 50px rgba(0, 0, 0, 0.1)" }}
              value={inputText}
              onChange={(evt) => handleTextChange(evt)}
              placeholder="Paste your menu text here."
            />
            <button
              className="mt-4 w-full bg-colors-matrix-green/80 hover:bg-colors-matrix-green text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Extract
            </button>

            <p className="text-xs mb-5">
              With the extractor button, each line will be identified to the
              menu items.
            </p>
            {text && (
              <p className="text-red-500 text-sm animate-vibrate">
                No valid menu items found. Please check and try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default LeftPanel;

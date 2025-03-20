import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Editor = ({ onGenerateReview, isGenerating }) => {
  const [code, setCode] = useState("");
  return (
    <div className="h-full w-6/12 relative">
      <button
        disabled={isGenerating}
        onClick={() => onGenerateReview(code)}
        className=" w-max absolute bottom-3 right-3  z-50 bg-red-500 p-2 rounded hover:bg-red-700 active:translate-y-1 disabled:opacity-75 disabled:pointer-events-none disabled:cursor-not-allowed"
      >
        Generate Review
      </button>
      <CodeMirror
        minHeight="100vh"
        theme="dark"
        value={code}
        onChange={setCode}
        extensions={[javascript({ jsx: true })]}
        style={{ fontSize: "20px" }}
      />
    </div>
  );
};

export default Editor;

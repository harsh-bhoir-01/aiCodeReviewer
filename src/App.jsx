import { useState } from "react";
import Editor from "./Components/Editor";
import Review from "./Components/Review";

function App() {
  const [review, setReview] = useState("");
  const [loader, setLoader] = useState("idle");
  const isGenerating = loader === "generating";

  const handleGenerateReview = async (code) => {
    try {
      setLoader("generating");
      const response = await fetch("http://localhost:3000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      console.log(data.review);
      setReview(data.review);
    } catch (err) {
      alert("Something went wrong");
      console.log(err);
    }
    setLoader("generated");
  };
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden ">
      <Editor
        isGenerating={isGenerating}
        onGenerateReview={handleGenerateReview}
      />
      <Review isGenerating={isGenerating} review={review} />
    </div>
  );
}

export default App;

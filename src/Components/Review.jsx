import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Loader from "./Loader";

const Review = ({ review, isGenerating }) => {
  return (
    <div className=" h-screen w-6/12 relative overflow-scroll ">
      {isGenerating ? (
        <Loader />
      ) : (
        <MarkdownPreview
          source={review}
          style={{ fontSize: "20px", minHeight: "100vh", padding: "20px" }}
        />
      )}
    </div>
  );
};

export default Review;

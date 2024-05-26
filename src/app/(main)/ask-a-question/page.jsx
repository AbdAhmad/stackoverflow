import Editor from "@/components/JoditEditor/JoditEditor";
import React from "react";

const Page = () => {
  return (
    <div>
      <form>
        <div>
          <h3>Title*</h3>
          <p>
            Be specific and imagine you’re asking a question to another person
          </p>
          <input placeholder="e.g. Is there an R function for finding the index of an element in a vector?" />
        </div>
        <div>
          <h3>Body*</h3>
          <p>
            Include all the information someone would need to answer your
            question{" "}
          </p>
          <Editor />
        </div>
        <button className="bg-blue-500 p-2 rounded-lg">
          Post your question
        </button>
      </form>
    </div>
  );
};

export default Page;

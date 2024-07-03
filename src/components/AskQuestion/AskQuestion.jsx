"use client";

import { askQuestion } from "@/app/lib/actions";
import React from "react";

import { useFormState } from "react-dom";

const AskQuestion = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(askQuestion, initialState);
  return (
    <form action={dispatch}>
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
          Include all the information someone would need to answer your question{" "}
        </p>
        {/* <Editor /> */}
      </div>
      <button className="bg-blue-500 p-2 rounded-lg">Post your question</button>
    </form>
  );
};

export default AskQuestion;

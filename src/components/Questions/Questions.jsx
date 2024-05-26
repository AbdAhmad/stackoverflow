"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Questions = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center">
        <h1>Top Questions</h1>
        <button
          className="bg-blue-500 p-2 rounded-lg"
          onClick={() => router.push("/ask-a-question")}
        >
          Ask a question
        </button>
      </div>
      <h3>Spring boot / React Maven - create a deployable War package</h3>
    </div>
  );
};

export default Questions;

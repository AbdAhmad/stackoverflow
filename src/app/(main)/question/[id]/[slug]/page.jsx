import Editor from "@/components/JoditEditor/JoditEditor";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Embedded Tomcat 10 serving static resources from fat jar</h1>
      <p>
        I&apos;m writing some browser code with a lot of large ArrayBuffers. I
        noticed the memory consumption is unexpectedly large and I&apos;m not
        sure why that is. I&apos;ve never worked with ArrayBuffers before and I
        don&apos;t understand it too well. But my test code is short so
        I&apos;ll include it here:
      </p>
      <h2>Your Answer</h2>
      <Editor />
    </div>
  );
};

export default Page;

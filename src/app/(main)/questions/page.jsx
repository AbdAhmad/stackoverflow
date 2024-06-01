import Questions from "@/components/Questions/Questions";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-1">
        {[{ text: "Questions" }].map((link, index) => {
          const { text } = link;
          return (
            <Link key={index} href={text}>
              {text}
            </Link>
          );
        })}
      </div>
      <div className="col-span-11">
        <Questions />
      </div>
    </div>
  );
};

export default Page;

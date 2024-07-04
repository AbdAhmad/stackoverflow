import Image from "next/image";
import React from "react";
import SignUp from "@/components/SignUp/SignUp";

const Page = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="shadow-2xl rounded-md p-10 m-3">
        <div className="flex items-center justify-center">
          <Image
            src={"/stack-overflow.svg"}
            width={50}
            height={20}
            title="Stack Overlfow"
            alt="Stack Overflow"
          />
          <h1>Join Stack Overflow</h1>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default Page;

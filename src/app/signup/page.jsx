import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="flex items-center">
        <Image
          src={"/stack-overflow.svg"}
          width={50}
          height={20}
          title="Stack Overlfow"
          alt="Stack Overflow"
        />
        <h1>Join Stack Overflow</h1>
      </div>
      <form>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <label>Confirm password</label>
          <input type="password" />
        </div>
        <button>Sign up</button>
        <p>
          Already have an account? <Link href={"/login"}>Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Page;

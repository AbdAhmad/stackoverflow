import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button>Log in</button>
        <p>
          Don’t have an account? <Link href={"signup"}>Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Page;

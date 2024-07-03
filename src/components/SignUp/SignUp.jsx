"use client";

import { useFormState } from "react-dom";
import { signUp } from "@/app/lib/actions";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(signUp, initialState);
  // console.log("state", state);
  return (
    <form action={dispatch} className="flex flex-col gap-3">
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          className="bg-slate-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="bg-slate-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className="bg-slate-300 rounded"
        />
      </div>
      <button type="submit">Sign up</button>
      <p>
        Already have an account? <Link href={"/login"}>Log in</Link>
      </p>
    </form>
  );
};

export default SignUp;

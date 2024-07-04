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
      <div class="grid grid-cols-12 gap-4 items-center">
        <div class="col-span-4">
          <label htmlFor="username">Username</label>
        </div>
        <div class="col-span-8">
          <input
            id="username"
            name="username"
            type="text"
            className="bg-slate-300 rounded-full w-full px-2 py-3 outline-none"
          />
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 items-center">
        <div class="col-span-4">
          <label htmlFor="password">Password</label>
        </div>
        <div class="col-span-8">
          <input
            id="password"
            name="password"
            type="password"
            className="bg-slate-300 rounded-full w-full px-2 py-3 outline-none"
          />
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 items-center">
        <div class="col-span-4">
          <label htmlFor="confirmPassword">Confirm password</label>
        </div>
        <div class="col-span-8">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="bg-slate-300 rounded-full w-full px-2 py-3 outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="rounded-full bg-blue-300 py-3 text-white"
      >
        Sign up
      </button>
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link href={"/login"} className="text-sky-700">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default SignUp;

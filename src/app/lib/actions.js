"use server";

import { z } from "zod";
import pool from "./mysql";

const FormSchema = z
  .object({
    username: z.string().min(5, { message: "Username is too short" }),
    password: z.string({
      invalid_type_error: "Password is required",
    }),
    confirmPassword: z.string({
      invalid_type_error: "Please confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function signUp(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");
  const validatedFields = FormSchema.safeParse({
    username,
    password,
    confirmPassword: formData.get("confirm-password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Signup.",
    };
  }

  try {
    const db = await pool.getConnection();
    const query = `
    INSERT INTO user (username, password)
    VALUES ("${username}", "${password}")
  `;
    const [rows] = await db.execute(query);
    db.release();
    console.log(rows);
  } catch (error) {
    console.log(error);
  }
}

export async function askQuestion(prevState, formData) {
  const title = "this is question title";
  const body = "this is question body";
  // const title = formData.get("title");
  // const body = formData.get("body");
  const validatedFields = FormSchema.safeParse({
    title,
    body,
    confirmPassword: formData.get("confirm-password"),
  });
  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //     message: "Missing Fields. Failed to Signup.",
  //   };
  // }

  try {
    const db = await pool.getConnection();
    const query = `
    INSERT INTO questions (title, body)
    VALUES ("${title}", "${body}")
  `;
    const [rows] = await db.execute(query);
    db.release();
    console.log(rows);
  } catch (error) {
    console.log(error);
  }
}

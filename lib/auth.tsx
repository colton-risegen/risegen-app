"use server";

import { cookies } from "next/headers";

export async function getUser() {
  const cookie = cookies().get("user");
  if (!cookie) return null;
  try {
    return JSON.parse(cookie.value);
  } catch {
    return null;
  }
}

export async function setUser(user: any) {
  cookies().set("user", JSON.stringify(user), { path: "/", httpOnly: false });
}

export async function clearUser() {
  cookies().delete("user");
}

"use server";

import { auth, signIn, signOut } from ".";

async function getAuthSession() {
  try {
    const session = await auth();

    return session;
  } catch (error: unknown) {
    console.error("Failed to get session", error);

    return null;
  }
}

async function getAuthUser() {
  const session = await getAuthSession();

  return session?.user;
}

export { getAuthSession, getAuthUser, signIn, signOut };

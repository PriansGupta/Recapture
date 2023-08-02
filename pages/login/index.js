import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import SignIn from "@/Components/SignIn";

const login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session)
  if (session) {
    {
      router.push("/account/MyApplications");
    }
  } else {
    return (
      <SignIn></SignIn>
    );
  }
};
export default login;

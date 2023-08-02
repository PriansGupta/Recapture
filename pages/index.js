import Head from "next/head";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Careers Portal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <login></login>
      </main>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  } else
    return {
      redirect: {
        destination: "/account/MyApplications",
      },
    };
};
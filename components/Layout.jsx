import Head from "next/head";
import React from "react";
import Header from "./Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>TodoLists</title>
        <meta name="description" content="Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main min-h-screen relative overflow-hidden">
        <Header />
        <main className="py-10">
          <div className="bg-priBG w-[95%] m-auto rounded-lg">{children}</div>
        </main>
      </div>
    </>
  );
};

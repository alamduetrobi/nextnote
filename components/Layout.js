import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

// import '../src/styles/globals.css';
export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-Amazona' : 'Amazon'}</title>
        <meta name="description" content="Generated by next app" />
        <link rel="icon" href="#" />
      </Head>
      <div class="flex min-h-screen flex-col  justify-between">
        <header>
          <nav class="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" class="text-lg font-bold ">
              Logo
            </Link>
            <div>
              <Link href="/cart" className=" p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className=" flex text-center h-10 justify-center items-center shadow-inner">
          Footer
        </footer>
      </div>
    </>
  );
}

import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'TypeScript React NextJS Contentful app',
}: Props) => (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="twitter:description"
          content="TypeScript React Contentful app using Next.js"
        />
      </Head>
      <div className="head-section">
        <Link href="/recipe-list">
          <a className="logo">
            <img src="/logo-martha-marley-spoon.svg" />
          </a>
        </Link>
      </div>
      {children}
    </>
  );

export default Layout;

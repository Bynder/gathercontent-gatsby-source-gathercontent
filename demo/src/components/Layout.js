import * as React from "react"
import { Site } from './Site';
import { Header } from './Header';
import { Footer } from './Footer';

import '../tailwind-setup.css';

function Layout({ children, siteMetadata }) {
  console.log(siteMetadata);
  return (
    <Site siteMetadata={siteMetadata}>
      <Header />
      <main>{children}</main>
      <Footer />

      <style global jsx>{`
      body {
        font-family: 'IBM Plex Sans', sans-serif;
        color: #29333d;
      }
    `}</style>
    </Site>
  );
}

export { Layout };

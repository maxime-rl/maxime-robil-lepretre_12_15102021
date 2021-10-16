import React from "react";
import { Banner } from "../../components";
import imageBanner from "../../assets/images/bank-tree.jpeg";

/**
 * Banner content (hard data)
 */
const title = "Promoted Content";
const subtitle = `No fees.\nNo minimum deposit.\nHigh interest rates.`;
const text = "Open a savings account with Argent Bank today !";

/**
 * Create a HomePage component
 * @function HomePage
 */
export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">Argent Bank</h1>
      <header>
        <Banner
          backgroundImg={imageBanner}
          title={title}
          subtitle={subtitle}
          text={text}
        />
      </header>
      <main>Feature cards</main>
    </>
  );
}

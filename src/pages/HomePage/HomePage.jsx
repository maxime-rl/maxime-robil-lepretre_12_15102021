import React from "react";
import { Banner, FeatureCard } from "../../components";
import imageBanner from "../../assets/images/bank-tree.jpeg";
import iconChat from "../../assets/images/icon-chat.png";
import iconMoney from "../../assets/images/icon-money.png";
import iconSecurity from "../../assets/images/icon-security.png";
import * as S from "./HomePage.styled";

/**
 * Create a HomePage component
 * Banner and FeatureCard content below the function
 * @function HomePage
 */
export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">Argent Bank</h1>
      <header>
        <Banner
          backgroundImg={imageBanner}
          title={bannerTitle}
          subtitle={bannerSubtitle}
          text={bannerText}
        />
      </header>
      <main>
        <S.Section>
          <h2 className="sr-only">{featureCardListTitle}</h2>
          {featureCardsContent.map((card, index) => (
            <FeatureCard
              key={index}
              icon={card.icon}
              alt={card.alt}
              title={card.title}
              text={card.text}
            />
          ))}
        </S.Section>
      </main>
    </>
  );
}

/**
 * Banner content
 */
const bannerTitle = "Promoted Content";
const bannerSubtitle = `No fees.\nNo minimum deposit.\nHigh interest rates.`;
const bannerText = "Open a savings account with Argent Bank today !";

/**
 * FeatureCards content
 */
const featureCardListTitle = "Features";

const featureCardsContent = [
  {
    icon: iconChat,
    alt: "Chat icon",
    title: "You are our #1 priority",
    text: "Need to talk to a representative ? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: iconMoney,
    alt: "Money icon",
    title: "More savings means higher rates",
    text: `The more you save with us, the higher your interest rate will be !`,
  },
  {
    icon: iconSecurity,
    alt: "Security icon",
    title: "Security you can trust",
    text: `We use top of the line encryption to make sure your data and money is always safe.`,
  },
];

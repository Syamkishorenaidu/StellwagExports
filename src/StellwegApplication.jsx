import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import AnimationRevealPage from "./helpers/AnimationRevealPage";
import Hero from "./components/TwoColumnModule";
import MainFeature from "./components/TwoColWithButton.js";
import TabGrid from "./components/TabCardGrid.js";
import Testimonial from "./components/ThreeColumnWithProfileImage.js";
import Footer from "./components/FiveColumnWithInputForm.js";

import Quartz from "./images/quartz.jpg";
import Shipments from "./images/shipments.jpg";
import Containers from "./images/containers.jpg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-blue-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Quartz Craftsmanship<HighlightedText>Precision Matters</HighlightedText></>}
        description="At Stellwag, we take pride in being at the forefront of the Quartz industry. With an unwavering commitment to precision and purity, we've established ourselves as the go-to source for high-quality Quartz raw materials. From electronics to glass manufacturing, our Quartz solutions empower industries to reach new heights of innovation."
        imageSrc={Quartz}
        imageCss={imageCss}
        imageDecoratorBlob={true}
      />
      <MainFeature
        subheading={<Subheading></Subheading>}
        heading={
          <>
            Stellwag Mining 
            <wbr /> <HighlightedText>Bridging Excellence</HighlightedText>
          </>
        }
        description={
          <Description>
            Embark on a journey of international Quartz trade with Stellwag Exports. Our commitment to quality, precision, and reliability knows no borders. Explore how we connect the world with the finest Quartz raw materials, ensuring your global needs are met with excellence. 
            <br />
            <br />
            Discover the Stellwag difference in Quartz exports.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={Shipments}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
        statistics={[]}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
       <MainFeature
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        description={
          <Description>
            By choosing Stellwag, you're not just choosing a Quartz supplier; you're choosing a reliable partner dedicated to your success. Join the ranks of satisfied customers who have elevated their projects with our top-quality Quartz solutions.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={true}
        imageSrc={Containers}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
        statistics={[
          {
            key: "Orders",
            value: "94000Kg+",
          },
          {
            key: "Customers",
            value: "110+"
          },
          {
            key: "Employees",
            value: "150+"
          }
        ]}
      />
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>material.</HighlightedText>
          </>
        }
      />

     
      <Testimonial
        heading={<>About <HighlightedText>Us</HighlightedText></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}

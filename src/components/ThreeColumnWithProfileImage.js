import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "./misc/Layouts.js";
import {
  SectionHeading as Heading,
  Subheading as SubheadingBase,
} from "./misc/Headings.js";
import SasiAnnaImg from "../images/sasi.jpeg";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/svg-decorator-blob-8.svg";

const Testimonials = tw.div`flex flex-col items-center lg:flex-row lg:items-stretch justify-center`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;

// The 'justify-center' class for the 'Testimonials' div should center-align the testimonial horizontally.

const Image = tw.img`w-32 h-32 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default ({
  heading = "Customer's Review",
  testimonials = [
    {
      imageSrc: SasiAnnaImg,
      quote:
        "Meet our CEO, a B.Tech graduate with an unyielding commitment to excellence. His dedication drives Stellwag Exports to new heights, making us a global leader in Quartz exports.",
      customerName: "Sasi Kiran Reddy [CEO]",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <Heading>{heading}</Heading>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                <Image src={testimonial.imageSrc} />
                <Quote>"{testimonial.quote}"</Quote>
                <CustomerName>- {testimonial.customerName}</CustomerName>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

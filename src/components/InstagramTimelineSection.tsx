import React from "react";
import Image from "next/image";
import FadeInView from "./animations/FadeInView";

interface InstagramTimelineSectionProps {
  id?: string;
}

const InstagramTimelineSection = ({ id }: InstagramTimelineSectionProps) => (
  <section id={id} className="w-full flex flex-col items-center">
    <FadeInView className="w-full max-w-[954px] 2xl:max-w-[1280px] mx-auto flex flex-col items-center">
      <div className="w-full relative flex flex-col items-start mb-4">
        <Image
          src={"/images/vector.svg"}
          alt="admissao vector"
          width={420}
          height={206}
          className="absolute -left-32 md:-left-60 -top-10"
        />
        <h2 className="font-extrabold font-sans text-primary text-2xl sm:text-3xl leading-10">
          ACOMPANHE NOSSO INSTAGRAM
        </h2>
      </div>
      <div className="w-full flex justify-center items-center rounded-none overflow-visible">
        <iframe
          src="https://www.instagram.com/admissaoautoservice/embed"
          title="Instagram Timeline"
          width="100%"
          height="475"
          scrolling="no"
          className="w-full h-[475px] 2xl:h-[580px] border-none"
          style={{
            border: 0,
            boxShadow: "none",
            borderRadius: 0,
          }}
        ></iframe>
      </div>
      <a
        href="https://www.instagram.com/admissaoautoservice/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 hidden md:flex text-primary underline text-sm"
      >
        Ver no Instagram
      </a>
    </FadeInView>
  </section>
);

export default InstagramTimelineSection;

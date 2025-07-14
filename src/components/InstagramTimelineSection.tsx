import React from "react";

interface InstagramTimelineSectionProps {
  id?: string;
}

const InstagramTimelineSection = ({ id }: InstagramTimelineSectionProps) => (
  <section id={id} className="w-full py-[50px] flex flex-col items-center">
    <div className="w-full max-w-[954px] 2xl:max-w-[1280px] mx-auto flex flex-col items-center">
      <h2 className="font-sans font-bold text-primary text-xl sm:text-2xl leading-10 mb-4">
        Acompanhe nosso Instagram
      </h2>
      <div className="w-full flex justify-center items-center rounded-none overflow-visible">
        <iframe
          src="https://www.instagram.com/admissaoautoservice/embed"
          title="Instagram Timeline"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
          className="w-full border-none"
          style={{
            minHeight: 500,
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
        className="mt-4 text-primary underline text-sm"
      >
        Ver no Instagram
      </a>
    </div>
  </section>
);

export default InstagramTimelineSection;

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

interface FAQSectionProps {
  faqItems: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqItems }) => (
  <div className="flex gap-20 justify-between max-w-[956px] w-full">
    <div className="flex-1 flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[13px]">
        <h2 className="font-['Montserrat-Bold'] font-bold text-neutral-800 text-2xl leading-10">
          PERGUNTAS FREQUENTES
        </h2>
        <p className="font-['Montserrat-Regular'] text-neutral-800 tracking-[0.40px] text-sm max-w-[485px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border-b border-[#b2b2b2]"
          >
            <AccordionTrigger className="py-2.5 font-normal text-neutral-800">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-neutral-800">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    <div
      className="relative  bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: "url('/images/faq-img.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 p-6">
        <Image
          src="/images/logo-marca-white.png"
          alt="Logo Admissão Auto Service"
          width={162}
          height={24}
          className="w-48 md:w-56"
        />
      </div>
      <div className="relative z-10 text-white text-center px-6 pb-16">
        <h1 className="text-2xl font-bold mb-6">
          Diagnóstico, Análise e <br className="hidden md:block" /> Manutenção
        </h1>
        <a
          href="https://wa.me/seunumero"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm items-center font-semibold gap-2 border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          ENTRAR EM CONTATO <FaWhatsapp size={18} />
        </a>
      </div>
    </div>
  </div>
);

export default FAQSection;

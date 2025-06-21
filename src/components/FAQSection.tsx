import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./ui/button";

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
      className="relative bg-cover bg-center bg-no-repeat flex flex-col md:h-[436px] justify-between"
      style={{ backgroundImage: "url('/images/faq-img.png')" }}
    >
      <div className="inset-0 bg-black/50 z-5 absolute w-full h-full" />
      <div className="z-10 p-6">
        <Image
          src="/images/logo-marca-white.png"
          alt="Logo Admissão Auto Service"
          width={162}
          height={24}
          className="h-auto w-40"
        />
      </div>
      <div className="z-10 text-white flex-col items-start text-start px-6 pb-4">
        <h1 className="text-2xl font-extrabold mb-6 text-start">
          Diagnóstico, Análise e <br className="hidden md:block" /> Manutenção
        </h1>
        <Button className="flex items-center text-sm justify-center gap-2.5 rounded-full border border-white bg-transparent text-white w-auto">
          ENVIAR MENSAGEM
          <FaWhatsapp style={{ fontSize: 18 }} />
        </Button>
      </div>
    </div>
  </div>
);

export default FAQSection;

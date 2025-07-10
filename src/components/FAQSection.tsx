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
import {
  getWhatsAppLink,
  WHATSAPP_PHONE,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/lib/utils";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

interface FAQSectionProps {
  id?: string;
  faqItems: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ id, faqItems }) => (
  <section
    id={id}
    className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between max-w-[956px] 2xl:max-w-[1440px] w-full"
  >
    <div className="flex-1 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-sans font-bold text-primary text-xl sm:text-2xl leading-10">
          PERGUNTAS FREQUENTES
        </h2>
        <p className="font-sans font-normal text-primary tracking-wider text-xs sm:text-sm w-full">
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
            className="border-b border-primary-light"
          >
            <AccordionTrigger className="py-2.5 font-normal text-primary flex items-center justify-between text-sm sm:text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-primary text-xs sm:text-sm">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    <div
      className="relative bg-cover rounded-md bg-center bg-no-repeat flex flex-col h-[436px] md:h-[436px] justify-between order-1 md:order-2"
      style={{ backgroundImage: "url('/images/faq-img.jpeg')" }}
    >
      <div className="inset-0 bg-black/50 rounded-md z-5 absolute w-full h-full" />
      <div className="z-10 p-6">
        <Image
          src="/images/logo-marca-white.png"
          alt="Logo Admissão Auto Service"
          width={162}
          height={24}
          className="h-auto w-40"
        />
      </div>
      <div className="z-10 text-primary-contrast flex-col items-start text-start px-6 pb-8">
        <h1 className="text-xl sm:text-2xl font-extrabold mb-6 text-start">
          Diagnóstico, Análise e <br className="hidden md:block" /> Manutenção
        </h1>
        <a
          href={getWhatsAppLink(WHATSAPP_PHONE, WHATSAPP_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center text-xs sm:text-sm justify-center gap-2.5 rounded-full border border-white bg-transparent text-primary-contrast w-auto">
            ENVIAR MENSAGEM
            <FaWhatsapp style={{ fontSize: 18 }} />
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default FAQSection;

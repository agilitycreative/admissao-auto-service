import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

interface FAQSectionProps {
  faqItems: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqItems }) => (
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
        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
        ante.
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
);

export default FAQSection;

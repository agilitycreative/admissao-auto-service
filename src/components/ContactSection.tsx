import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type ContactInfo = {
  id: number;
  title: string;
  details: string;
  icon: React.ReactNode;
};

interface ContactSectionProps {
  contactInfo: ContactInfo[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => (
  <section className="w-full h-[436.25px] relative">
    <div className="w-full h-[438px] relative">
      <Image
        className="absolute w-full h-[437px] object-cover"
        alt="Contact background"
        src="/images/maps.png"
        fill
      />
      <div className="absolute w-[300px] h-[437px] left-60 bg-[#0e0e0ee6]">
        <h2 className="absolute top-[22px] left-7 font-['Montserrat-Bold'] font-bold text-white text-2xl leading-10">
          FALE CONOSCO
        </h2>
        <div className="flex flex-col gap-[31px] absolute top-[82px] left-7 w-[241px]">
          {contactInfo.map((info) => (
            <div key={info.id} className="flex items-start gap-5">
              {info.icon}
              <div className="flex flex-col">
                <h3 className="font-['Montserrat-SemiBold'] font-semibold text-white text-sm">
                  {info.title}
                </h3>
                <p className="font-['Montserrat-Regular'] font-normal text-white text-sm whitespace-pre-line mt-1">
                  {info.details}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button className="absolute top-[374px] left-7 flex items-center justify-center gap-2.5 rounded-[100px] border border-white bg-transparent text-white w-[201px]">
          ENVIAR MENSAGEM
          <Image
            className="w-[18px] h-[18.01px]"
            alt="WhatsApp icon"
            src="/whatsapp.png"
            width={18}
            height={18}
          />
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;

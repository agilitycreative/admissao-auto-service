import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { TbCalendarTime } from "react-icons/tb";
import { PiEngineBold } from "react-icons/pi";
import Image from "next/image";

const AboutUsSection = () => (
  <section className="flex flex-col w-full max-w-[954px] items-start gap-y-16 py-2.5">
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
      <div className="flex flex-col gap-4 w-full md:w-[403px] order-2 md:order-1">
        <div className="w-full h-[213px] shadow-md relative rounded overflow-hidden">
          <Image
            src="/images/about-us-long-img.png"
            alt="Sobre nós"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex gap-2.5">
          <div className="flex-1 w-[250px] h-[220px] shadow-md relative rounded overflow-hidden">
            <Image
              src="/images/about-us-short-img-1.png"
              alt="Sobre nós 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 w-[250px] h-[220px] shadow-md relative rounded overflow-hidden">
            <Image
              src="/images/about-us-short-img-2.png"
              alt="Sobre nós 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-[500px] items-start gap-7 md:ml-12 order-1 md:order-2">
        <div className="flex flex-col gap-2.5 relative ">
          <Image
            src={"/images/vector.svg"}
            alt="admissao vector"
            width={420}
            height={206}
            className="absolute -left-32 md:-left-60 -top-10"
          />
          <h2 className="font-['Roboto-ExtraBold'] font-extrabold text-primary text-3xl leading-10">
            QUEM SOMOS
          </h2>
          <p className="font-['Mulish-Regular'] text-primary tracking-[0.25px] leading-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
        </div>
        <div className="flex flex-col h-40 gap-9 w-full">
          <div className="flex gap-5 w-full justify-between">
            <div className="flex items-center justify-center gap-5 flex-1">
              <TbCalendarTime style={{ fontSize: 26 }} />
              <div className="flex flex-col gap-0">
                <div className="text-shadow-sm font-['Montserrat-Regular'] font-normal text-black text-4xl tracking-[0.25px] leading-5">
                  16
                </div>
                <div className="font-['Mulish-Regular'] pt-2 font-normal text-primary text-sm tracking-[0.25px] leading-5">
                  anos de experiência
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 flex-1">
              <IoCarSportOutline style={{ fontSize: 23 }} />
              <div className="flex flex-col gap-px">
                <div className="text-shadow-sm font-['Montserrat-Regular'] font-normal text-black text-4xl tracking-[0.25px] leading-5">
                  +10
                </div>
                <div className="font-['Mulish-Regular'] pt-1  font-normal text-primary text-sm tracking-[0.25px] leading-5 whitespace-nowrap">
                  marcas atendidas
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center gap-5">
            <PiEngineBold style={{ fontSize: 23 }} />
            <div className="flex flex-col">
              <div className="text-shadow-sm font-['Montserrat-Regular'] font-normal text-black text-4xl tracking-[0.25px] leading-5">
                +1000
              </div>
              <div className="font-['Mulish-Regular'] pt-1 font-normal text-primary text-sm tracking-[0.25px] leading-5 whitespace-nowrap">
                serviços realizados
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsSection;

import React from "react";
import Image from "next/image";
import FadeInView from "./animations/FadeInView";

type ServiceStep = {
  id: number;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
};

interface ServiceStepsProps {
  serviceSteps: ServiceStep[];
}

const ServiceSteps: React.FC<ServiceStepsProps> = ({ serviceSteps }) => (
  <FadeInView className="w-full max-w-none relative bg-[linear-gradient(0deg,rgba(0,0,0,0.87)_0%,rgba(0,0,0,0.94)_100%),url('/images/steps-bg.jpg'),linear-gradient(0deg,rgba(32,32,32,1)_0%,rgba(32,32,32,1)_100%)] bg-cover bg-center bg-no-repeat pt-4 pb-12 md:py-24">
    <Image
      src={"/images/vector.svg"}
      alt="admissao vector"
      width={420}
      height={206}
      className="absolute right-40 top-10 z-[-1] brightness-200 opacity-100 mix-blend-screen"
    />
    <div className="max-w-[954px] 2xl:max-w-[1280px] mx-auto ">
      <div className="flex flex-col gap-7">
        <div className="relative p-4">
          <h2 className="font-extrabold font-sans text-primary-contrast text-xl sm:text-2xl md:text-3xl leading-10">
            ETAPAS DO ATENDIMENTO
          </h2>
          <p className="font-normal font-sans text-primary-contrast text-xs sm:text-sm tracking-wide leading-5">
            Conheça um pouco do nosso processo de atendimento
          </p>
        </div>
        <div className="flex flex-wrap justify-center w-full max-w-lg lg:max-w-none 2xl:justify-between mx-auto gap-1 sm:gap-2 md:gap-5">
          {serviceSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-3 min-w-[140px] max-w-[150px] w-full">
                <div className="flex items-center hover:text-white justify-center text-[#393939]">
                  {step.icon}
                </div>
                <div className="font-semibold font-sans text-primary-contrast text-[11px] sm:text-xs text-center tracking-wide leading-5">
                  {step.title}
                  <br />
                  <span className="font-light italic text-[11px] sm:text-xs block h-4 font-sans">
                    {step.subtitle || "\u00A0"}
                  </span>
                </div>
              </div>
              {index < serviceSteps.length - 1 && (
                <Image
                  className="w-2.5 h-2.5 hidden lg:inline"
                  alt="Arrow"
                  src="/images/arrow.png"
                  width={10}
                  height={10}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </FadeInView>
);

export default ServiceSteps;

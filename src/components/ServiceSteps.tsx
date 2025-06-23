import React from "react";
import Image from "next/image";

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
  <div className="-mx-4 w-[100vw] max-w-none relative bg-[linear-gradient(0deg,rgba(0,0,0,0.87)_0%,rgba(0,0,0,0.94)_100%),url('/images/steps-bg.jpg'),linear-gradient(0deg,rgba(32,32,32,1)_0%,rgba(32,32,32,1)_100%)] bg-cover bg-center bg-no-repeat pt-4 pb-12 md:py-[90px]">
    <Image
      src={"/images/vector.svg"}
      alt="admissao vector"
      width={420}
      height={206}
      className="absolute right-40 top-10 z-50 brightness-200 opacity-100 mix-blend-screen"
    />
    <div className="max-w-[954px] mx-auto ">
      <div className="flex flex-col gap-7">
        <div className="relative p-4">
          <h2 className="font-['Roboto-ExtraBold'] font-extrabold text-primary-contrast text-2xl md:text-3xl leading-10">
            ETAPAS DO ATENDIMENTO
          </h2>
          <p className="font-['Montserrat-Regular'] font-normal text-primary-contrast text-sm tracking-[0.25px] leading-5">
            Conheça um pouco do nosso processo de atendimento
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-[10px] md:gap-5">
          {serviceSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-3 w-full min-w-[120px] max-w-[150px]">
                <div className="flex items-center justify-center text-[#393939]">
                  {step.icon}
                </div>
                <div className="font-['Montserrat-SemiBold'] font-semibold text-primary-contrast text-xs text-center tracking-[0.25px] leading-5">
                  {step.title}
                  <br />
                  <span className="font-light italic text-[11px] block h-[16px]">
                    {step.subtitle || "\u00A0"}
                  </span>
                </div>
              </div>
              {index < serviceSteps.length - 1 && (
                <Image
                  className="w-2.5 h-2.5 hidden md:inline"
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
  </div>
);

export default ServiceSteps;

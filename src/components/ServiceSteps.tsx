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
  <section className="w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.94)_100%),linear-gradient(0deg,rgba(32,32,32,1)_0%,rgba(32,32,32,1)_100%)] py-[90px]">
    <div className="max-w-[954px] mx-auto">
      <div className="flex flex-col gap-[30px]">
        <div>
          <h2 className="font-['Roboto-ExtraBold'] font-extrabold text-white text-[32px] leading-10">
            ETAPAS DO ATENDIMENTO
          </h2>
          <p className="font-['Montserrat-Regular'] font-normal text-white text-sm tracking-[0.25px] leading-5">
            Conheça um pouco do nosso processo de atendimento
          </p>
        </div>
        <div className="flex items-center gap-5 w-full">
          {serviceSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center justify-center gap-[13px] flex-1">
                <div className="flex items-center justify-center text-[#393939]">
                  {step.icon}
                </div>
                <div className="font-['Montserrat-SemiBold'] font-semibold text-white text-xs text-center tracking-[0.25px] leading-5">
                  {step.title}
                  {step.subtitle && (
                    <>
                      <br />
                      <span className="font-light italic text-[11px]">
                        {step.subtitle}
                      </span>
                    </>
                  )}
                </div>
              </div>
              {index < serviceSteps.length - 1 && (
                <Image
                  className="w-2.5 h-2.5"
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
  </section>
);

export default ServiceSteps;

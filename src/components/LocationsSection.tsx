import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

type Location = {
  id: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  image: string;
};

interface LocationsSectionProps {
  id?: string;
  locations: Location[];
}

const LocationsSection = ({ id, locations }: LocationsSectionProps) => (
  <section id={id} className="w-full py-[50px]">
    <div className="max-w-[956px] 2xl:max-w-[1440px] mx-auto flex flex-col gap-12">
      <div className="relative">
        <Image
          src={"/images/vector.svg"}
          alt="admissao vector"
          width={420}
          height={206}
          className="absolute overflow-hidden -left-40 md:-left-60 -top-10"
        />

        <h2 className="font-sans font-bold text-primary text-xl sm:text-2xl leading-10">
          NOSSAS UNIDADES
        </h2>
        <p className="font-sans font-normal text-primary text-xs sm:text-sm tracking-[0.40px] leading-4 max-w-[590px] 2xl:max-w-full mt-2">
          Temos duas unidades prontas para lhe atender e dar a manutenção que
          seu veículo merece. Estamos presentes no bairro Sapiranga e
          Guararapes.
        </p>
      </div>
      <div className="flex flex-wrap gap-12 w-full">
        {locations.map((location) => (
          <Card
            key={location.id}
            className="md:flex-1 w-full rounded-lg overflow-hidden"
          >
            <Image
              className="w-full h-[210px] object-cover"
              alt={location.name}
              src={location.image}
              width={400}
              height={210}
            />
            <CardContent className="flex flex-col gap-2.5 p-5 bg-primary-dark rounded-[0px_0px_10px_10px]">
              <h3 className="font-sans font-semibold text-primary-contrast text-sm sm:text-base tracking-[0.25px] leading-5">
                {location.name}
              </h3>
              <p className="text-primary-contrast text-xs sm:text-sm">
                {location.description}
              </p>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-5 text-primary-contrast" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-contrast text-xs sm:text-sm hover:underline"
                >
                  {location.address}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <BsFillTelephoneFill className="w-4 h-5 text-primary-contrast" />
                <a
                  href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
                  className="text-primary-contrast text-xs sm:text-sm hover:underline"
                >
                  {location.phone}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;

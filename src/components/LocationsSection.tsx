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
  locations: Location[];
}

const LocationsSection: React.FC<LocationsSectionProps> = ({ locations }) => (
  <section className="w-full py-[50px]">
    <div className="max-w-[956px] mx-auto flex flex-col gap-[50px]">
      <div>
        <h2 className="font-['Montserrat-Bold'] font-bold text-neutral-800 text-2xl leading-10">
          NOSSAS UNIDADES
        </h2>
        <p className="font-['Montserrat-Regular'] font-normal text-neutral-800 text-sm tracking-[0.40px] leading-4 max-w-[590px] mt-2">
          Temos duas unidades prontas para lhe atender e dar a manutenção que
          seu veículo merece. Estamos presentes no bairro Sapiranga e
          Guararapes.
        </p>
      </div>
      <div className="flex gap-[50px] w-full">
        {locations.map((location) => (
          <Card key={location.id} className="flex-1 rounded-lg overflow-hidden">
            <Image
              className="w-full h-[210px] object-cover"
              alt={location.name}
              src={location.image}
              width={400}
              height={210}
            />
            <CardContent className="flex flex-col gap-2.5 p-5 bg-[#202020] rounded-[0px_0px_10px_10px]">
              <h3 className="font-['Roboto-SemiBold'] font-semibold text-white text-base tracking-[0.25px] leading-5">
                {location.name}
              </h3>
              <p className="text-white text-sm">{location.description}</p>
              <div className="flex items-start gap-[13px]">
                <FaMapMarkerAlt className="w-4 h-5 text-white"/>
                <p className="text-white text-sm">{location.address}</p>
              </div>
              <div className="flex items-start gap-[13px]">
                <BsFillTelephoneFill className="w-4 h-5 text-white"/>
                <p className="text-white text-sm">{location.phone}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;

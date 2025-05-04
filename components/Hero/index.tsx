"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Pagla Mosque
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              The Pagla Mosque and Islamic Complex
              </h1>
              <p>
              The Pagla Mosque, officially the Pagla Mosque and Islamic Complex, is an old mosque in located 
              on the banks of the Narsunda River in Harua, in the Kishoreganj District of the Dhaka Division in Bangladesh.<br/><br/>
              According to a legend, a spiritual personality named Dewan Zil Kadar Khan alias Zil Kadar Pagla Sahib, a descendant 
              of Isa Khan of the Haibatnagar Zamindar family in the region, used to pray on the banks of the Narsunda River. 
              Later, a mosque was built at the site. The mosque came to be known as the Pagla Mosque after Zil Kadar Pagla. 
              According to another legend, the mosque was named after the Pagla Bibi of the then Haibatnagar Zamindar family of Kishoreganj.
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
               
                <div className=" relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden rounded-lg"
                    src="./images/hero/hero-light.jpeg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block rounded-lg"
                    src="./images/hero/hero-dark.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from "react";
import Link from "next/link";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { id, icon, title, description } = feature;
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {t(title)}
        </h3>
        <p>{t(description)}</p>
        {/* {id === 3 &&
        // show donate now button
        <Link
              href="#donate"
              className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
              style={{ width:200, margin:50}}
            >
              Donate Now
            </Link>
        } */}

      </motion.div>
    </>
  );
};

export default SingleFeature;

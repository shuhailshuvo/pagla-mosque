"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="https://islamic-relief.org/zakat-calculator/" target="_blank" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="./images/blog/zakat.jpg"
                    alt="Zakat Calculator"
                    style={{margin:"auto"}}
                  />
                </a>

                

                <p className="mb-10 mt-5" style={{textAlign:"center"}}>
                  {t("zakat")}
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="https://qiblafinder.withgoogle.com/intl/en/desktop" target="_blank" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="./images/blog/qibla.jpg"
                    alt="Qibla Finder"
                    style={{margin:"auto"}}
                  />
                </a>

                <p className="mb-10 mt-5" style={{textAlign:"center"}}>
                   {t("qibla")}
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="https://www.alim.org/quran/read-surah/2/" target="_blank" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="./images/blog/quran.jpg"
                    alt="Al-Quran"
                    style={{margin:"auto"}}
                  />
                </a>

                

                <p className="mb-10 mt-5" style={{textAlign:"center"}}>
                   {t("quran")}
                </p>
              </motion.div>

              
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
              style={{margin:"auto"}}
            >
              <p  style={{textAlign:"center"}}>
                &copy; {new Date().getFullYear()} Pagla Mosque. All rights reserved
              </p>
            </motion.div>

          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;

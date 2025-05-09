"use client";
import React from "react";
import { useTranslation } from 'react-i18next';

const Brands = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black  pb-60 pt-60 lg:pb-60"  style={{backgroundImage: "url(./images/features/pm1.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div style={{backgroundColor:"rgb(242, 216, 161)",width: "90%",height: "auto",padding: 20, textAlign: "center", margin: "0 auto", borderRadius: 10, marginBottom:10}}>
          "{t("hadith1")}"<br/><br/>
          <em>{t("prophet")}</em><br/><br/>
      </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;

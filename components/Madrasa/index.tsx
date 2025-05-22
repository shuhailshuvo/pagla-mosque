"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function Madrasa() {
    const { t } = useTranslation();
  return (
    <section className="py-20 lg:py-25 xl:py-30" id="madrasa">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("madrasaName")}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">{t("madrasaAddress")}</h2>

        <p className="mb-4">{t("madrasaOverview")}</p>
    
        <p className="mb-4">
          {t("madrasaDetails")}
        </p>
        
        <p className="mb-4">
            {t("madrasaAdmission")}
        </p>

        {/* <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Faculty Overview</h3> */}
        <p className="mb-4">
            {t("madrasaFaculty")}
        </p>
      </div>
    </section>
  );
}

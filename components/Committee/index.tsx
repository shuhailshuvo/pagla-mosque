"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Committee = () => {
  const { t } = useTranslation();
  const data = t("committeeMember", { returnObjects: true })

  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section id="committee" className="py-20 lg:py-25 xl:py-30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t("committeeTitle")}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">{t("sl")}</th>
                  <th className="border px-4 py-2">{t("name")}</th>
                  <th className="border px-4 py-2">{t("designation")}</th>
                </tr>
              </thead>
              <tbody>
                {data.map(([index, name, role]) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index}</td>
                    <td className="border px-4 py-2">{name}</td>
                    <td className="border px-4 py-2">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Committee;

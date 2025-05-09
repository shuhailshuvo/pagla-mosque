"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const FeaturesTab = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative pb-60 pt-60 lg:pb-60" style={{backgroundImage: "url(./images/features/uc.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div style={{backgroundColor:"rgb(242, 216, 161)",width: "90%",height: "auto",padding: 20, textAlign: "center", margin: "0 auto", borderRadius: 10, marginBottom:10}}>
        “{t("hadith3")}”<br/><br/>
            <em>{t("prophet")}</em><br/><br/>
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;

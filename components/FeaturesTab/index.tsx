"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";

import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative pb-60 pt-60 lg:pb-60" style={{backgroundImage: "url(/images/features/uc.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div style={{backgroundColor:"rgb(242, 216, 161)",width: "90%",height: "auto",padding: 20, textAlign: "center", margin: "0 auto", borderRadius: 10, marginBottom:10}}>
        “Whoever builds a mosque, desiring thereby Allah’s pleasure, Allah builds for him the like of it in paradise. ”<br/><br/>
            <em>~ Sahih Bukhari</em><br/><br/>
            <Link
              href="#donate"
              className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
              style={{ width:200, margin:"auto"}}
            >
              Donate Now
            </Link>
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;

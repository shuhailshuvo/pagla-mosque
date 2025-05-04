"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black  pb-60 pt-60 lg:pb-60"  style={{backgroundImage: "url(/images/features/pm1.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div style={{backgroundColor:"rgb(242, 216, 161)",width: "90%",height: "auto",padding: 20, textAlign: "center", margin: "0 auto", borderRadius: 10, marginBottom:10}}>
          "Sadaqah wipes out sins like water extinguishes fire"<br/><br/>
          <em>~ The Prophet Muhammad (S.A.W)</em><br/><br/>
          <button style={{backgroundColor:"#cfa44a",color:"#000000",width: "250",height: "auto",padding: 20, textAlign: "center", margin: "0 auto", borderRadius: 10, marginBottom:10}}><a href="#donate">Donate Now</a></button>
      </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;

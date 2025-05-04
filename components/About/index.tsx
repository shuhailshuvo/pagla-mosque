
const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section id="map" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div style={{width:"100%",height:80}}></div>
      <div style={{backgroundColor:"rgb(242, 216, 161)",width: "90%",height: "auto",padding: 20, textAlign: "center", margin: "0 auto", borderRadius: 10, marginBottom:10}}>
          "The mosque is the house of every pious person, and Allah (SWT) has granted comfort and mercy for everyone for whom the mosque is his house, <br/>
          and that they will easily traverse the bridge to the Paradise."<br/><br/>
          <em>~ The Prophet Muhammad (S.A.W)</em>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d570.8850727450614!2d90.77127116890345!3d24.443983548346818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37569216112b2d7f%3A0x2d1e89bf697a511b!2sPagla%20Masjid%20And%20Islamic%20Complex!5e1!3m2!1sen!2sbd!4v1746386437300!5m2!1sen!2sbd" width="100%" height="600" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  );
};

export default About;

import React from "react";
import Footer from "./LandingPage/Footer";
import SiteNav from "./SiteNav";
import FAQs from "./FAQs";

const FaqsPage: React.FC = () => {
  return (
    <>
    <SiteNav />
    <div className="container mx-auto px-4 py-8">
      <FAQs />
      <Footer />
    </div>
    </>
  );
};

export default FaqsPage;

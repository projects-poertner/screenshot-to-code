import React from "react";
import Footer from "./LandingPage/Footer";
import SiteNav from "./SiteNav";
import PricingPlans from "./payments/PricingPlans";
import FAQs from "./FAQs";

const PricingPage: React.FC = () => {
  return (
    <>
    <SiteNav />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Screenshot to Code Pricing</h1>
      <PricingPlans shouldShowFAQLink={false} />
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-violet-200 bg-violet-50 p-6 text-center dark:border-violet-500/30 dark:bg-violet-950/30">
        <h2 className="text-xl font-semibold">Want it done for you?</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
          Our developers turn your design into production-ready code. Packages
          start at $99 with delivery in as little as 48 hours.
        </p>
        <a
          href="/hire"
          className="mt-4 inline-block rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"
        >
          See Done-for-You packages
        </a>
      </div>
      {/* Spacer */}
      <div className="text-center mt-8"></div>
      <FAQs />
      <Footer />
    </div>
    </>
  );
};

export default PricingPage;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "./LandingPage/Footer";
import SiteNav from "./SiteNav";
import {
  OTHER_SERVICES,
  PACKAGES,
  orderMailto,
  type ServicePackage,
} from "./servicesData";

function orderHref(pkg: ServicePackage): string {
  return pkg.paymentUrl || orderMailto(`${pkg.name} package`, pkg.price);
}

const STEPS = [
  "Choose a package and send us your design",
  "We confirm the scope within one business day",
  "AI generates the first version, our developers refine it",
  "We test responsiveness and compare against your design",
  "You receive source code and documentation",
];

const HirePage: React.FC = () => {
  return (
    <>
    <SiteNav />
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Hire our developers
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
          From any design to production-ready code. Powered by AI, perfected
          by developers.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`flex flex-col rounded-2xl border p-6 ${
              pkg.highlight
                ? "border-violet-500 shadow-lg ring-1 ring-violet-500"
                : "border-gray-200 dark:border-zinc-700"
            }`}
          >
            <h2 className="text-xl font-semibold">{pkg.name}</h2>
            <p className="mt-2 text-4xl font-bold">${pkg.price}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-zinc-400">
              {pkg.scope}
            </p>
            <ul className="mt-5 space-y-2 text-sm flex-1">
              <li className="flex gap-2">
                <FaCheckCircle className="mt-0.5 shrink-0 text-violet-600" />
                Delivery in {pkg.delivery}
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-0.5 shrink-0 text-violet-600" />
                {pkg.revisions} revision{pkg.revisions > 1 ? "s" : ""}
              </li>
              {pkg.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-violet-600" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={orderHref(pkg)}
              className={`mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${
                pkg.highlight
                  ? "bg-violet-600 text-white hover:bg-violet-700"
                  : "border border-gray-300 hover:bg-gray-50 dark:border-zinc-600 dark:hover:bg-zinc-800"
              }`}
            >
              Order {pkg.name}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-gray-500 dark:text-zinc-400">
        Complex interactions, backend functionality, custom integrations and
        business logic are quoted individually.
      </p>

      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-4">More services</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {OTHER_SERVICES.map((s) => (
            <a
              key={s.name}
              href={orderMailto(s.name, null)}
              className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm transition hover:border-violet-400 dark:border-zinc-700"
            >
              <span>{s.name}</span>
              <span className="ml-3 shrink-0 font-semibold">
                from ${s.from}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-3 text-sm text-gray-500 dark:text-zinc-400">
          Need something else, like a web app, dashboard or ongoing
          development?{" "}
          <a
            className="underline"
            href={orderMailto("Custom project quote", null)}
          >
            Request a quote
          </a>
          .
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-4">How it works</h2>
        <ol className="space-y-3">
          {STEPS.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 rounded-xl bg-gray-50 p-5 text-sm text-gray-600 dark:bg-zinc-900 dark:text-zinc-400">
        <p className="font-semibold text-gray-900 dark:text-zinc-200 mb-1">
          Good to know
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            We only rebuild websites and designs you own or are authorized to
            use. We may ask for proof of ownership before starting.
          </li>
          <li>
            Delivery times start after the scope is confirmed and all
            materials are received.
          </li>
          <li>
            Prices are in USD. Final scope and price are confirmed before
            payment.
          </li>
        </ul>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default HirePage;

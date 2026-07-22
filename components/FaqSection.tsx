"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { Icon } from "./ui/Icon";

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-[#fffdf9] py-18 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-center text-4xl font-semibold">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </p>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => {
            const open = activeIndex === index;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-${index}`}
                    onClick={() => setActiveIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left font-bold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <span>{faq.question}</span>
                    <Icon
                      name="arrow"
                      className={`size-5 shrink-0 text-blue-500 transition-transform ${open ? "rotate-90" : ""}`}
                    />
                  </button>
                </h3>
                {open ? (
                  <div
                    id={`faq-${index}`}
                    className="pb-5 pr-10 leading-7 text-slate-600"
                  >
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

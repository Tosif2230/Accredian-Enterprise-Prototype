import Image from "next/image";
import { Icon } from "./ui/Icon";

export const HeroSection = () => (
  <section id="top" className="overflow-hidden bg-[#f2f8f7] ">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:px-10 lg:py-24 shadow-2xl shadow-slate-900/15 rounded-2xl">
      <div className="relative z-10">
        <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Next-Gen <span className="text-blue-500">Expertise</span> For Your{" "}
          <span className="text-blue-500">Enterprise</span>
        </h1>
        <p className="mt-6 text-wrap max-w-xl text-2xl leading-8 text-black">
          Cultivate high-performance teams through expert learning.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-800"
          >
            Enquire Now
          </a>
        </div>
        <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-700">
          {[
            "Tailored solutions",
            "Industry insight",
            "Measurable outcomes",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Icon name="check" className="size-4 text-teal-700" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mx-auto w-full max-w-2xl">
        <div className="absolute -inset-5 rounded-4xl bg-coral-200/55 blur-2xl" />
        <Image
          src="/images/hero-learning.png"
          alt="Professionals collaborating at a workshop table"
          width={1760}
          height={1008}
          priority
          className="relative aspect-[1.42] w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  </section>
);

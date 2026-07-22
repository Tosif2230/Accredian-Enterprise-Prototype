import { domains } from "@/lib/content";
import { Icon } from "./ui/Icon";

export const DomainExpertiseSection = () => (
  <section className="py-18 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <p className="text-center text-4xl font-semibold">
        Our <span className="text-blue-600">Domain Expertise</span>
      </p>
      <p className="text-center text-md font-light">
        <span className="text-blue-600">Specialized Programs</span> Designed to
        Fuel Innovation
      </p>
      <div className="mt-10 gap-5 lg:grid-cols-[.72fr_1.28fr]">
        <div className="grid gap-2 sm:grid-cols-3">
          {domains.map((domain) => (
            <article
              key={domain.title}
              className="rounded-2xl border border-gray-700 p-4"
            >
              <p className="text-sm font-bold text-coral-300">{domain.label}</p>
              <Icon name={domain.icon} className="mt-8 size-10 text-blue-500" />
              <h3 className="mt-5 text-xl font-bold text-black">
                {domain.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

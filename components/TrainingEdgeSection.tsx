import { features } from "@/lib/content";
import { Icon } from "./ui/Icon";

export const TrainingEdgeSection = () => (
  <section id="why-us" className="bg-[#fffdf9] py-18 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10" id="accredianEdge">
      <p className="text-center text-4xl font-semibold">
        The  <span className="text-blue-600">Accredian Edge</span>
      </p>
      <p className="text-center text-md font-light">
        Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="grid size-11 place-items-center rounded-xl bg-teal-50 text-blue-700">
              <Icon name={feature.icon} className="size-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

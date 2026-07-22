import { metrics, partners } from "@/lib/content";

export const MetricsSection = () => (
  <section className="border-y border-slate-200 bg-white py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10" id="stats">
      <p className="text-center text-4xl font-semibold">
        Our <span className="text-blue-600">Track Record</span>
      </p>
      <p className="text-center text-md font-light">
        The Numbers Behind <span className="text-blue-600">Our Success</span>
      </p>
      <div className="mt-12 grid grid-cols-2 gap-7 lg:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white py-12 sm:py-16" id="clients">
      <p className="text-center text-4xl font-semibold">
        Our Proven <span className="text-blue-600">Partnerships</span>
      </p>
      <p className="text-center text-md font-light">
        Successful Collaborations With the
        <span className="text-blue-600">Industry’s Best</span>
      </p>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 border-y border-slate-100 py-7 sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((partner) => (
          <p
            key={partner}
            className="text-center text-lg font-bold tracking-tight text-slate-400"
          >
            {partner}
          </p>
        ))}
      </div>
    </div>
  </section>
);

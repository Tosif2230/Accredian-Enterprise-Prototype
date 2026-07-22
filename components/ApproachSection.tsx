const audiences = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate.",
    image: "/images/program-specific.png",
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing.",
    image: "/images/industry-specific.png",
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud.",
    image: "/images/topic-specific.png",
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers.",
    image: "/images/level-specific.png",
  },
];
const steps = [
  {
    number: "01",
    title: "Understand the gap",
    text: "Map the capabilities that will unlock your immediate business goals.",
  },
  {
    number: "02",
    title: "Shape the experience",
    text: "Build a relevant learning path around your people and context.",
  },
  {
    number: "03",
    title: "Put it into practice",
    text: "Deliver flexibly, reinforce adoption, and make progress visible.",
  },
];

export const ApproachSection = () => (
  <section id="approach" className="py-18 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <p className="text-center text-4xl font-semibold">
        Tailored <span className="text-blue-600">Course Segmentation</span>
      </p>
      <p className="text-center text-lg font-light mt-2">
        Explore <span className="text-blue-600">Custom-fit Courses</span>{" "}
        Designed to Address Every Professional Focus
      </p>
      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {audiences.map((audience) => (
          <article
            key={audience.title}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <img
              src={audience.image}
              alt={audience.title}
              className="h-50 w-full object-cover rounded-t-2xl"
            />
            <h3 className="mt-5 text-xl font-bold text-blue-500">
              {audience.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {audience.description}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-18 rounded-3xl p-7 sm:p-10" id="cat">
        <p className="text-center text-4xl font-semibold">
          The <span className="text-blue-600">CAT Framework</span>
        </p>
        <p className="text-center text-md font-light">
          Our Proven Approach to{" "}
          <span className="text-blue-600">Learning Excellence</span>
        </p>
        <div className="mt-7 grid gap-7 md:grid-cols-3">
          {[
            {
              letter: "C",
              title: "Concept",
              text: "Foundational Knowledge for deep subject understanding.",
            },
            {
              letter: "A",
              title: "Application",
              text: "Practical implimentation through real-world scenarios.",
            },
            {
              letter: "T",
              title: "Tools",
              text: "Resources and techniques for effective skill mastery",
            },
          ].map((item) => (
            <div key={item.letter} className="border-t border-slate-700 pt-5">
              <span className="text-4xl font-bold text-blue-500">
                {item.letter}
              </span>
              <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
              <p className="mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-18">
        <p className="text-center text-4xl font-semibold">
          How We <span className="text-blue-600">Deliver Results</span> That
          Matter?
        </p>
        <p className="text-center text-md font-light">
          A Structured Three-Step Approach to{" "}
          <span className="text-blue-600">Skill Development</span>
        </p>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-blue-100 bg-[#fffdf9] p-6"
            >
              <p className="text-sm font-bold text-blue-700">{step.number}</p>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

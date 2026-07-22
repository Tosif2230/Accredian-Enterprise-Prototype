import { testimonials } from "@/lib/content";

export const TestimonialsSection = () => (
  <section id="testimonials" className="bg-white py-18 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <p className="text-center text-4xl font-semibold">
        Testimonials from <span className="text-blue-600">Our Partners</span>
      </p>
      <p className="text-center text-lg font-light mt-2">
        What <span className="text-blue-600">Our Clients</span> Are Saying
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="rounded-2xl bg-white p-7 sm:p-9"
          >
            <p className="font-bold text-slate-900">{testimonial.name}</p>
            <figcaption className="mt-8 border-t border-teal-100 pt-5">
              <blockquote className="text-xl font-medium leading-8 text-gray-900">
                “{testimonial.quote}”
              </blockquote>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
};
type FormErrors = Partial<Record<keyof FormValues, string>>;
const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email))
    errors.email = "Enter a valid email address.";
  if (!/^[+()\-\s\d]{7,20}$/.test(values.phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (!values.company.trim()) errors.company = "Enter your company name.";
  return errors;
};

export const LeadFormSection = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const changeValue = (field: keyof FormValues, value: string) =>
    setValues((current) => ({ ...current, [field]: value }));
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus("idle");
    if (Object.keys(nextErrors).length) return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="bg-blue-700 py-18 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
        <div className="text-white">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-teal-100">
            Let&apos;s build together
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to make capability your advantage?
          </h2>
          <p className="mt-5 max-w-md leading-8 text-teal-50">
            Tell us a little about your organization. An advisor will be in
            touch to explore the right learning path.
          </p>
        </div>
        <form
          noValidate
          onSubmit={submit}
          className="rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {(
              [
                ["name", "Name", "Your full name", "text"],
                ["email", "Work email", "you@company.com", "email"],
                ["phone", "Phone", "+91 98765 43210", "tel"],
                ["company", "Company", "Company name", "text"],
              ] as const
            ).map(([field, label, placeholder, type]) => (
              <label
                key={field}
                className="block text-sm font-semibold text-slate-800"
              >
                {label}
                <input
                  required
                  type={type}
                  value={values[field]}
                  onChange={(event) => changeValue(field, event.target.value)}
                  aria-invalid={Boolean(errors[field])}
                  aria-describedby={
                    errors[field] ? `${field}-error` : undefined
                  }
                  placeholder={placeholder}
                  className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                />
                {errors[field] ? (
                  <span
                    id={`${field}-error`}
                    className="mt-1 block font-normal text-red-700"
                  >
                    {errors[field]}
                  </span>
                ) : null}
              </label>
            ))}
          </div>
          <button
            disabled={status === "submitting"}
            className="mt-6 w-full rounded-full bg-blue-500 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Sending..." : "Speak with an advisor"}
          </button>
          <p
            aria-live="polite"
            className={`mt-4 text-sm ${status === "success" ? "text-teal-700" : "text-red-700"}`}
          >
            {status === "success"
              ? "Thanks — your enquiry has been received."
              : status === "error"
                ? "We couldn’t submit your enquiry. Please try again."
                : ""}
          </p>
        </form>
      </div>
    </section>
  );
};

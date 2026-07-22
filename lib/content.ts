import type { Domain, Faq, Feature } from "@/types/content";

export const navigation = [
  { label: "Home", href: "#" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredianEdge" },
  { label: "CAT", href: "#cat" },
  { label: "How it works", href: "#approach" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export const metrics = [
  { value: "10K+", label: "professionals equipped" },
  { value: "200+", label: "sessions delivered" },
  { value: "5K+", label: "learner experience score" },
];
export const partners = ["Relience", "HCL", "IBM", "CRIF", "ADP", "BAYER"];

export const features: Feature[] = [
  {
    title: "Built around your business",
    icon: "layers",
  },
  {
    title: "Experts who have done the work",
    icon: "people",
  },
  {
    title: "Impact you can see",
    icon: "chart",
  },
];

export const domains: Domain[] = [
  {
    label: "01",
    title: "Product & innovation Hub",
    icon: "bulb",
  },
  {
    label: "02",
    title: "Gen-AI Mastery",
    icon: "brain",
  },
  {
    label: "03",
    title: "Leadership Elevation",
    icon: "people",
  },
  {
    label: "04",
    title: "Tech & Data Insights",
    icon: "insights",
  },
  {
    label: "05",
    title: "Operations Excellence",
    icon: "setting",
  },
  {
    label: "06",
    title: "Digital Enterprise",
    icon: "globe",
  },
  {
    label: "07",
    title: "Fintech Innovation Lab",
    icon: "camera",
  },
];

export const faqs: Faq[] = [
  {
    question: "How are programs tailored to our organization?",
    answer:
      "We start with a working session to understand your business priorities, learner profiles, and desired outcomes. That shapes the curriculum, cases, and delivery format.",
  },
  {
    question: "Which teams can participate?",
    answer:
      "Programs are designed for technical teams, business functions, emerging talent, and senior leaders. Cohorts can be mixed or role-specific.",
  },
  {
    question: "Can learning be delivered virtually?",
    answer:
      "Yes. We offer high-engagement virtual, in-person, and blended formats to fit distributed teams and operating rhythms.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We agree practical success measures before delivery, then combine learner feedback, capability signals, and stakeholder reviews.",
  },
];

export const testimonials = [
  {
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    name: "BAYER",
  },
  {
    quote:
      "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    name: "RELIANCE",
  },
];

export type IconName =
  | "arrow"
  | "chart"
  | "check"
  | "close"
  | "layers"
  | "menu"
  | "people"
  | "spark"
  | "brain"
  | "globe"
  | "insights"
  | "setting"
  | "bulb"
  | "camera";

export type Feature = {
  title: string;
  icon: IconName;
};

export type Domain = Feature & { label: string };

export type Faq = { question: string; answer: string };

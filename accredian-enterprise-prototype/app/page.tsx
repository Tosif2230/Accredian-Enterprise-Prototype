import { ApproachSection } from "@/components/ApproachSection";
import { DomainExpertiseSection } from "@/components/DomainExpertiseSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import { MetricsSection } from "@/components/MetricsSection";
import { Navbar } from "@/components/Navbar";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrainingEdgeSection } from "@/components/TrainingEdgeSection";

const Home = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <MetricsSection />
      <TrainingEdgeSection />
      <DomainExpertiseSection />
      <ApproachSection />
      <FaqSection />
      <TestimonialsSection />
      <LeadFormSection />
    </main>
    <Footer />
  </>
);

export default Home;

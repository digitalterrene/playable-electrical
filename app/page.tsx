import Mentor from "./components/Team/index";
import Testimonials from "./components/Testimonials/index";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import ServicesHeaders from "./components/ServicesHeaders/index";
import DomesticElectrical from "./components/Services/DomesticElectrical";
import IndustrialElectrical from "./components/Services/IndustrialElectrical";
import CertificateOfCompliance from "./components/Services/CertificateOfCompliance";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main>
      <ServicesHeaders />
      <WhyChooseUs />
      <DomesticElectrical />
      <IndustrialElectrical />
      <CertificateOfCompliance />
      <AboutUs />
      <Mentor />
      <Testimonials />
      <Portfolio />
      <FAQ />
    </main>
  );
}

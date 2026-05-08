import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Reviews } from "@/components/site/Reviews";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { RequestForm } from "@/components/site/RequestForm";
import { Contacts } from "@/components/site/Contacts";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Reviews />
      <Services />
      <Portfolio />
      <Process />
      <div id="prices"><RequestForm /></div>
      <Contacts />
    </main>
    <Footer />
  </div>
);

export default Index;

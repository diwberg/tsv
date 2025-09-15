import { Hero } from "./_components/hero";
import { ClientCarouselExample } from "./_components/client-carousel";
import { Specs } from "./_components/specs";
import { Services } from "./_components/services";
import { ContactForm } from "./_components/contact-form";
import { About } from "./_components/about";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <Hero />

      <ClientCarouselExample />

      {/* Services Section */}
      <Services />

      {/* Industries Section */}
      <Specs />


      {/* About Section */}
      <About />

      {/* Contact Section */}
      <ContactForm />


    </div>
  );
}
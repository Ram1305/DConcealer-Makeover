import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Terms from "@/components/Terms";
import Contact from "@/components/Contact";
import InstagramFeed from "@/components/InstagramFeed";
import YouTubeFeed from "@/components/YouTubeFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Terms />
      <Contact />
      <InstagramFeed />
      <YouTubeFeed />
      <Footer />
    </main>
  );
}

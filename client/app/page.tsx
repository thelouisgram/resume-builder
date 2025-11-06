import Banner from "@/components/Home/Banner";
import CallToAction from "@/components/Home/CallToAction";
import Features from "@/components/Home/Features";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}

import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import Landing from "@/components/Landing";
import Popular_ from "@/components/Popular_";
import Showcase from "@/components/Showcase";
import States from "@/components/States";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <Showcase />

      <InfoSection />
      <States />
      <Popular_ />
      <Footer />
    </main>
  );
}

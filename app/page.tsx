import FeatureWork from "@/components/FeatureWork";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentPost from "@/components/RecentPost";

export default function Home() {
  return (
   <>
     <Navbar />
     <Hero />
     <RecentPost />
     <FeatureWork />
     <Footer />
   </>
  );
}

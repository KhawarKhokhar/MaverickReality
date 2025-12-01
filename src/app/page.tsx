import CTAContactBanner from "@/components/home/CTAContactBanner";
import DFWNeighborhoods from "@/components/home/DFWNeighborhoods";
import FeaturedHouses from "@/components/home/FeaturedHouses";
import FeaturedLots from "@/components/home/FeaturedLots";
import HeroSlider from "@/components/home/HeroSlider";
import HowWeHelp from "@/components/home/HowWeHelp";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSlider/>
   <FeaturedHouses/>
   <FeaturedLots/>
   <DFWNeighborhoods/> 
   <HowWeHelp/>
   <CTAContactBanner/>
   </>
  );
}

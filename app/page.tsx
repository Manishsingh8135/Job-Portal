import FeatureSection from "@/components/features"
import HeroSection from "@/components/herosection"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footernew"
import PriceSection from "@/components/price"
import FeatureSectionNew from "@/components/featuresnew"
import TestimonialSlider from "@/components/testimonialSlider"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <FeatureSectionNew/>
      <TestimonialSlider/>
      <PriceSection/>
      <Footer/>
    </div>
  )
}

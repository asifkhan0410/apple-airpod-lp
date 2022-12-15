import FeatureOne from "../components/FeatureOne"
import FeatureTwo from "../components/FeatureTwo"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"

const AirpodsHome = () => {
  return (
    <div className="homepage">
        <Header/>
        <HeroSection/>
        <FeatureOne/>
        <FeatureTwo/>
    </div>
  )
}

export default AirpodsHome
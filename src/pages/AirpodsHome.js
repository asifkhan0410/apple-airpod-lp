import ComparisonChart from "../components/ComparisonChart"
import FeatureFive from "../components/FeatureFive"
import FeatureFour from "../components/FeatureFour"
import FeatureOne from "../components/FeatureOne"
import FeatureSix from "../components/FeatureSix"
import FeatureThree from "../components/FeatureThree"
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
        <FeatureThree/>
        <FeatureFour/>
        <FeatureFive/>
        <FeatureSix/>
        <ComparisonChart/>
    </div>
  )
}

export default AirpodsHome
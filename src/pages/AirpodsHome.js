import { lazy } from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
const ComparisonChart = lazy(() => import(/* webpackPrefetch: true */  "../components/ComparisonChart"))
const FeatureFive = lazy(() => import(/* webpackPrefetch: true */  "../components/FeatureFive"))
const FeatureFour = lazy(() => import(/* webpackPrefetch: true */  "../components/FeatureFour"))
const FeatureOne = lazy(() => import(/* webpackPrefetch: true */  "../components/FeatureOne"))
const FeatureSix = lazy(() => import(/* webpackPrefetch: true */  "../components/FeatureSix"))
const FeatureThree = lazy(() => import(/* webpackPrefetch: true */  "../components/FeatureThree"))
const FeatureTwo = lazy(() => import(/* webpackPrefetch: true */ "../components/FeatureTwo"))

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
import gsap from 'gsap'
import React, { useEffect } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const FeatureOne = () => {

    useEffect(() => {
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section2",
                start: "+=52",
                end: "+=2800",
                scrub: 1,
            }
        })

        tl2.addLabel("start")
            .to(".video-section-2", { opacity: 1 })
            .addLabel("reverse-back")
            .to(".video-section-2", { opacity: 0 })
            .addLabel("end");

        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section2",
                start: "+=1100 center",
                end: "+=300",
                scrub: 1,
            }
        })

        tl3.addLabel("start")
            .from(".section2-text-1", { opacity: 0.15 })
            .to(".section2-text-1", { opacity: 1 })
            .addLabel("reverse-back")
            .to(".section2-text-1", { opacity: 0.15 })
            .addLabel("end");

        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section2",
                start: "+=1300 center",
                end: "+=300",
                scrub: 1,
            }
        })

        tl4.addLabel("start")
            .from(".section2-text-2", { opacity: 0.15 })
            .to(".section2-text-2", { opacity: 1 })
            .addLabel("reverse-back")
            .to(".section2-text-2", { opacity: 0.15 })
            .addLabel("end");

        let tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section2",
                start: "+=1500 center",
                end: "+=300",
                scrub: 1,
            }
        })

        tl5.addLabel("start")
            .from(".section2-text-3", { opacity: 0.15 })
            .to(".section2-text-3", { opacity: 1 })
            .addLabel("reverse-back")
            .to(".section2-text-3", { opacity: 0.15 })
            .addLabel("end");

        let tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section2",
                start: "+=1700 center",
                end: "+=300",
                scrub: 1,
            }
        })

        tl6.addLabel("start")
            .from(".section2-text-4", { opacity: 0.15 })
            .to(".section2-text-4", { opacity: 1 })
            .addLabel("reverse-back")
            .to(".section2-text-4", { opacity: 0.15 })
            .addLabel("end");

        let tl7 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section2",
                start: "+=1900 center",
                end: "+=400",
                scrub: 1,
            }
        })

        tl7.addLabel("start")
            .from(".section2-text-5", { opacity: 0.15 })
            .to(".section2-text-5", { opacity: 1 })
            .addLabel("reverse-back")
            .to(".section2-text-5", { opacity: 0.15 })
            .addLabel("end");
    }, [])


    return (
        <div className='section2' style={{ height: '3200px' }}>
            <video className='video-section-2 w-full h-[calc(100vh_-_52px)] top-[52px] mt-[-100vh] sticky object-cover z-[1] opacity-0' src='https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/spatial-audio/large.mp4' autoPlay loop muted />
            <b className="relative content w-full m-auto leading-[56px] flex items-center w-[949.22px] shrink-0 pt-[700px] pb-[700px] z-[2] overflow-x-hidden" >
                <span className="[line-break:anywhere] w-full text-[60px] m-auto text-white">
                    <span className='section2-text-1'>{`AirPods Pro have been re-engineered for even richer audio experiences. `}</span>
                    <span className="section2-text-2">
                        Next-level Active Noise Cancellation and Adaptive Transparency
                        reduce more external noise.
                    </span>
                    <span>{` `}</span>
                    <span className="section2-text-3">
                        Spatial Audio takes immersion to a remarkably personal level.
                    </span>
                    <span>{` `}</span>
                    <span className="section2-text-4">
                        Touch control now lets you adjust volume with a swipe.
                    </span>
                    <span>{` `}</span>
                    <span className="section2-text-5">
                        And a leap in power delivers 6 hours of battery life from a
                        single charge.
                    </span>
                </span>
            </b>
        </div>
    )
}

export default FeatureOne
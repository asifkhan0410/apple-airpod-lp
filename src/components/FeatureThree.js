import gsap from 'gsap'
import React, { useEffect } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const FeatureThree = () => {
    useEffect(() => {
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3-part-1",
                start: "+=500",
                end: "+=1200",
                scrub: 1,
            }
        })

        tl2.addLabel("start")
            .fromTo(".img-section3-p1-1", { scale: 1 }, { scale: 0.8 })

        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3-part-1",
                start: "+=1200",
                end: "+=300",
                scrub: 1,
            }
        })

        tl1.addLabel("start")
            .fromTo(".img-section3-p1-1", { opacity: 1, }, { opacity: 0, })

        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3-part-1",
                start: "+=500 +=100%",
                end: "+=1000",
                scrub: 1,
            }
        })

        tl3.addLabel("start")
            .from(".section3-part-1-t1", { opacity: 0 })
            .to(".section3-part-1-t1", { opacity: 1 })
            .addLabel("reverse-back")
            .to(".section3-part-1-t1", { opacity: 0 })
            .addLabel("end");

        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3-part-1",
                start: "+=800 center",
                end: "+=800",
                scrub: 1,
            }
        })

        tl4.addLabel("start")
            .from(".section3-part-1-t2", { opacity: 0 })
            .to(".section3-part-1-t2", { opacity: 1 })
            .addLabel("reverse-back")
            .to(".section3-part-1-t2", { opacity: 0 })
            .addLabel("end");


        let tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3-part-1",
                start: "+=1500",
                end: "+=1000",
                scrub: 1,
            }
        })

        tl5.addLabel("start")
            .fromTo(".img-section3-p2-1", { opacity: 0 }, { opacity: 1 })


        let tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3-part-2",
                start: "+=300",
                end: "+=1000",
                scrub: 1,
            }
        })

        tl6.addLabel("start")
            .fromTo(".img-section3-p2-1", { scale: 1 }, { scale: 0.8 })

        let tl7 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3-part-2",
                start: "+=900",
                end: "+=200",
                scrub: 1,
            }
        })

        tl7.addLabel("start")
            .fromTo(".img-section3-p2-1", { opacity: 1, }, { opacity: 0, })

        let tl8 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3-part-2",
                start: "+=1000",
                end: "+=500",
                scrub: 1,

            }
        })

        tl8.addLabel("start")
            .fromTo(".section3-part-3", { opacity: 0 }, { opacity: 1 })

        let tl9 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3-part-2",
                start: "+=1500",
                end: "+=500",
                scrub: 1,

            }
        })

        tl9.addLabel("start")
            .fromTo(".section3-part-3", { opacity: 1 }, { opacity: 0 })

    }, [])


    return (
        <div className='relative' style={{ height: '4500px' }}>
            <div className='section3-part-1' style={{ height: '2500px' }}>
                <img className='img-section3-p1-1 w-max top-[52px] h-[calc(100vh_-_52px)] sticky m-auto object-scale-down z-[1] opacity-0' src='https://www.apple.com/v/airpods-pro/g/images/overview/audio_airpod_guts_top__d2is2iiz9l6q_large.jpg' />
                <div className="relative flex flex-col items-start content w-full m-auto leading-[56px] max-w-screen-lg  mt-[-300px]  pb-[400px] z-[2]" >
                    <span className="section3-part-1-t1 tracking-[0.2px] leading-[28px]  w-full text-[21px] font-semibold text-white w-[30%]">
                        <span className='text-white opacity-50'>{`The chip uses powerful `}</span>
                        <span className="text-white">new adaptation algorithms</span>
                        <span className='text-white opacity-50'>{` to process sound more quickly, tuning audio at the precise moment you hear it. Every detail is rendered for your specific ear shape, immersing you in `}</span>
                        <span className='text-green-400'>{`higher‑fidelity sound.`}</span>
                    </span>
                    <span className="section3-part-1-t2 tracking-[0.2px] leading-[28px]  w-full text-[21px] font-semibold text-white w-[30%] mt-[400px]">
                        <span className='text-white'>{`A redesigned inward-facing microphone `}</span>
                        <span className="text-white opacity-50">works with voice enhancement algorithms to better recognise and articulate your voice, so it</span>
                        <span className='text-green-400'>{` sounds more natural `}</span>
                        <span className='text-white opacity-50 '>{`when you’re on phone and video calls.`}</span>
                    </span>
                </div>
            </div>
            <div className='section3-part-2 ' style={{ height: '2500px' }}>
                <img className='img-section3-p2-1 w-max top-[52px] h-[calc(100vh_-_52px)] sticky m-auto object-scale-down z-[1] opacity-0 mt-[-1000px]' src='https://www.apple.com/v/airpods-pro/g/images/overview/audio_airpod_guts_bottom__bfet1uy1eg0y_large.jpg' />
                <div className="relative flex flex-col items-end content w-full m-auto leading-[56px] max-w-screen-lg pb-[400px] z-[2]" >
                    <span className="tracking-[0.2px] leading-[28px]  w-full text-[21px] font-semibold text-white w-[30%]">
                        <span className='text-white'>{`A custom-built driver and amplifier  `}</span>
                        <span className="text-white opacity-50">work with the</span>
                        <span className='text-green-400'>{` H2 chip `}</span>
                        <span className='text-white opacity-50 '>{`to provide lower distortion during playback, so you’ll hear deeper bass and crisper highs — across all volume levels.`}</span>
                    </span>
                </div>
            </div>
            <div className='section3-part-3 sticky top-[52px] mt-[-1400px] opacity-0'>
                <img className='w-[20%]  h-[calc(100vh_-_52px)] sticky m-auto object-scale-down z-[2] ' src='https://www.apple.com/v/airpods-pro/g/images/overview/audio_airpod__dni8q27q7tqq_large.jpg' />
                <video className='w-full top-[52px] bottom-0 left-0 right-0 h-[calc(100vh_-_52px)] absolute m-auto object-cover z-[1] opacity-1' src='https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/noise-reduction/large_2x.mp4' autoPlay loop muted />
            </div>
        </div>
    )
}

export default FeatureThree
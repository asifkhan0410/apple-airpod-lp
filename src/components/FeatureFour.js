import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import waveImg from '../assets/wave-bg.png'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const FeatureFour = () => {
    const videoRef = useRef(null)
    useEffect(() => {
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sect-4",
                start: "+=300",
                end: "+=700",
                scrub: 1,
            }
        })

        tl2.addLabel("start")
            .fromTo(".sect-4-vertical-line", { height: 10, }, { height: 350 })

        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sect-4",
                start: "+=1600",
                end: "+=400",
                scrub: 1,
            }
        })
        tl3.addLabel("start")
            .fromTo(".rolling-img-1", { opacity: 0, x: 20 }, { opacity: 1, x: 0 })

        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sect-4",
                start: "+=1500",
                end: "+=400",
                scrub: 1,
            }
        })
        tl4.addLabel("start")
            .fromTo(".rolling-img-2", { opacity: 0, x: 20 }, { opacity: 1, x: 0 })

        let tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sect-4",
                start: "+=1400",
                end: "+=400",
                scrub: 1,
            }
        })
        tl5.addLabel("start")
            .fromTo(".rolling-img-3", { opacity: 0, x: 20 }, { opacity: 1, x: 0 })

        let tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sect-4",
                start: "+=1300",
                end: "+=400",
                scrub: 1,
            }
        })
        tl6.addLabel("start")
            .fromTo(".rolling-img-4", { opacity: 0, x: 20 }, { opacity: 1, x: 0 })


            let tl7 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sect-4",
                    start: "+=2500",
                    end: "+=400",
                    scrub: 1,
                }
            })
            tl7.addLabel("start")
                .fromTo(".touch-down-swipe-dot", { opacity: 1, y: 0 }, { opacity: 0, y: 166 })

            let tl8 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section4-part-1",
                    start: "+=500 +=100%",
                    end: "+=800",
                    scrub: 1,
                }
            })
    
            tl8.addLabel("start")
                .from(".section4-part-1-t1", { opacity: 0 })
                .to(".section4-part-1-t1", { opacity: 1 })
                .addLabel("reverse-back")
                .to(".section4-part-1-t1", { opacity: 0 })
                .addLabel("end");
    
            let tl9 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section4-part-1",
                    start: "+=800 center",
                    end: "+=800",
                    scrub: 1,
                }
            })
    
            tl9.addLabel("start")
                .from(".section4-part-1-t2", { opacity: 0 })
                .to(".section4-part-1-t2", { opacity: 1 })
                .addLabel("reverse-back")
                .to(".section4-part-1-t2", { opacity: 0 })
                .addLabel("end");

                let tl10 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".section4-part-1",
                        start: "+=1100 30%",
                        end: "+=800",
                        scrub: 1,
                    }
                })
        
                tl10.addLabel("start")
                    .from(".section4-part-1-t3", { opacity: 0 })
                    .to(".section4-part-1-t3", { opacity: 1 })
                    .addLabel("reverse-back")
                    .to(".section4-part-1-t3", { opacity: 0 })
                    .addLabel("end");

                    let tl1 = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".section4-part-1",
                            start: "+=1200",
                            end: "+=500",
                            scrub: 1,
                        }
                    })
            
                    tl1.addLabel("start")
                        .fromTo(".video-section4-p1-1", { opacity: 1, }, { opacity: 0, })

                    // const bgVideo = document.querySelector("#bgVideo");
                    ScrollTrigger.create({
                        trigger: ".section4-part-1",
                        start: "top top",
                        end: "+=2000",
                        onUpdate: self => {
                            console.log(videoRef.current.duration)
                
                            videoRef.current.currentTime = self.progress*videoRef.current.duration
                            console.log(self)
                          console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
                        }
                      });

                    
        

        
    }, [])
    return (
        <div className='sect-4 relative mt-[-500px] z-[2]'>
            <div className="text-white w-full m-auto max-w-screen-lg">
                <b className="tracking-[0.13px] leading-[36px] text-[32px]">
                    Noise Cancellation
                </b>
                <div className="text-[120px] mt-6">
                    <b className="tracking-[-2px] leading-[110px] inline-block whitespace-pre-wrap">
                        <p className="[margin-block-start:0] [margin-block-end:0px]">{`A marvel of`}</p>
                        <p className="m-[0]">modern silence</p>
                        {/* <p className="m-[0]">every measure.</p> */}
                    </b>
                </div>
                <div className='w-[80%] mt-8'>
                    <b className="text-[32px] tracking-[0.13px] leading-[36px]">
                        Featuring up to two times more noise cancellation than their predecessor, the H2-powered AirPods Pro are built to let you listen in peace. With control over what you hear — and don’t hear — you’ll be immersed in songs and podcasts like never before.
                    </b>
                </div>
            </div>

            <div className="relative w-full text-4xl text-gray-300">
                <div className="w-full h-[1px] mt-[100px] bg-gray-800" />
                <div className="flex border-b-[1px] border-gray-800 box-border">
                    <div className='flex flex-col w-[50%] border-r-[1px] border-gray-800'>
                        <div className="relative text-center text-gray-200">
                            <img
                                className="h-full w-full max-w-full object-cover border-b-[1px] border-gray-800"
                                alt=""
                                src="https://www.apple.com/v/airpods-pro/g/images/overview/noise_cancel_particle__e2ew4rzcyjee_large.jpg"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 text-[21px] font-semibold text-white flex flex-col item-center justify-center leading-[28px]">
                                <p>Up to</p>
                                <p className='text-[120px] leading-[110px]'>2x</p>
                                <p>
                                    <span className="text-green-400">more</span>
                                    <span> Active</span>
                                </p>
                                <p> Noise Cancellation.</p>
                            </div>
                        </div>
                        <div className="w-full h-full flex box-border items-center justify-center text-[28px] pl-[6vw] pr-[6vw]">
                            <p className="leading-[35px] font-semibold text-white">
                                <span className='opacity-50'>{`A new driver and improved acoustic algorithms help `}</span>
                                <span className="text-white">Active Noise Cancellation</span>
                                <span className='opacity-50'>{` reduce unwanted noise, so nothing interrupts listening during your commute or when you need to `}</span>
                                <span className="text-green-400">focus</span>
                                <span>.</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[50%] h-full flex flex-col box-border items-start justify-center text-[28px] pl-[6vw] pr-[6vw]">
                        <div className="w-[60%] flex flex-row items-start justify-start relative gap-[20px] z-[1] pt-[100px]">
                            <p className="leading-[35px] font-semibold text-white text-[21px] leading-[26px] pb-[50px]">
                                <span className="text-gray-200">
                                    Noise-cancelling microphones
                                </span>
                                <span>{` and a rear vent are optimally placed to quickly detect sound coming in, working together to `}</span>
                                <span className="text-green-400">counter</span>
                                <span> noise before it reaches your ear.</span>
                            </p>
                            <div className="absolute right-0 h-[calc(100%_-_13px)] w-[1px]">
                                <div className="sect-4-vertical-line bg-gray-300 w-[1px] h-[350px]" />
                                <div className="rounded-[3.5px] bg-gray-300 w-[7px] h-[7px] ml-[-3px]" />
                            </div>
                        </div>
                        <img
                            className="max-w-full max-h-full object-cover z-[0]"
                            alt=""
                            src="https://www.apple.com/v/airpods-pro/g/images/overview/noise_cancel_airpod__bewzeymccxxu_large.jpg"
                        />
                    </div>
                </div>
            </div>
            <div className="tw-full h-full flex box-border items-center justify-center text-[28px] pl-[6vw] pr-[6vw]">
                <div className="relative pt-[100px]">
                    <p className="leading-[27px] font-semibold text-white text-[21px] w-[30%]">
                        <span className='opacity-50'>{`Now with an extra-small size, `}</span>
                        <span>four pairs of silicone tips</span>
                        <span className='opacity-50'>{` are included to fit a wider range of ears. The tips create an `}</span>
                        <span className="text-green-400">acoustic seal</span>
                        <span className='opacity-50'>that closes in the sound — and secure AirPods Pro in place.</span>
                    </p>
                    <div className="flex flex-row-reverse w-[80%] m-auto text-green-400 justify-between pt-[100px] text-[20px] font-semibold">
                        <div className='rolling-img'>
                            <img
                                className="object-cover"
                                alt=""
                                src="https://www.apple.com/v/airpods-pro/g/images/overview/airpod_tips__dc5pbb4h970i_large.jpg"
                            />
                        </div>
                        <div className='rolling-img-4'>
                            <img
                                className="mt-[15px] object-cover"
                                alt=""
                                src="https://www.apple.com/v/airpods-pro/g/images/overview/airpod_tips_l__cpjg3qofehiu_large.jpg"
                            />
                            <p className="mt-[15px]">L</p>
                        </div>
                        <div className='rolling-img-3'>
                            <img
                                className="mt-[30px] object-cover"
                                alt=""
                                src="https://www.apple.com/v/airpods-pro/g/images/overview/airpod_tips_m__enss3p4jcnu6_large.jpg"
                            />
                            <p className="mt-[25px]">M</p>
                        </div>
                        <div className='rolling-img-2'>
                            <img
                                className="mt-[40px] object-cover"
                                alt=""
                                src="https://www.apple.com/v/airpods-pro/g/images/overview/airpod_tips_s__dlfl8rqwrdsi_large.jpg"
                            />
                            <p className="mt-[30px]">
                                S
                            </p>
                        </div>
                        <div className='rolling-img-1'>
                            <img
                                className="mt-[45px] object-cover"
                                alt=""
                                src="https://www.apple.com/v/airpods-pro/g/images/overview/airpod_tips_xs__fahuy3bkbrqu_large.jpg"
                            />
                            <p className="mt-[30px]">XS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full text-4xl text-gray-300">
                <div className="w-full h-[1px] mt-[100px] bg-gray-800" />
                <div className="flex flex-row w-full border-b-[1px] border-gray-800 items-center">
                    <div className="w-[50%] h-full flex box-border items-center justify-center text-[28px] pl-[6vw] pr-[6vw] ">
                        <p className="leading-[35px] font-semibold text-white">
                            <span className="text-white">Adaptive Transparency</span>
                            <span className="opacity-50">
                                {" "}
                                harnesses the power of H2 to minimise the intensity of
                                loud noises like sirens or power tools — so you can
                                comfortably hear the world around you.
                            </span>
                        </p>
                    </div>
                    <div className="w-[50%] relative text-center text-gray-200">
                        <img
                            className="h-full w-full max-w-full object-cover border-l-[1px] border-gray-800"
                            alt=""
                            src={waveImg}
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 text-[21px] font-semibold text-white flex flex-col item-center justify-center leading-[28px]">
                            <p className='text-green-400'>Reduces noise at</p>
                            <p className='text-[100px] leading-[110px]'>48,000</p>
                            <p> times per second.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col box-border items-center justify-start relative gap-[0px] border-b-[1px] border-gray-800 pb-[100px]">
                <div className="relative z-[0]">
                    <img
                        className="object-cover"
                        alt=""
                        src="https://www.apple.com/v/airpods-pro/g/images/overview/touch_control_airpod__e9hauo6fitim_large.jpg"
                    />
                    <div className='absolute w-[110px] h-[280px] top-[62px] left-[166px] skew-x-[23.5deg] skew-y-[11.5deg]'>
                        <div className='touch-down-swipe-dot w-[110px] h-[110px] bg-green-400 rounded-full'/>
                    </div>
                </div>
                <div className="w-full flex flex-col box-border items-start justify-start relative z-[1] text-[24px] pl-[6vw] pr-[6vw] ">
                    <div className="flex flex-row text-[70px] text-white font-bold mt-[-120px] pl-[5vw]">
                        <p className="pr-[250px]">A higher level</p>
                        <p className="flex items-center"> of control.</p>
                    </div>
                    <p className="relative tracking-[0.23px] leading-[32px] flex items-center w-[30%] mt-[100px] z-[1] font-medium">
                        <span className="w-full">
                            <span className="text-white">Touch control</span>
                            <span className="text-white opacity-50">{` lets you easily manage playback functions from the stem. `}</span>
                            <span className="text-green-400">Swipe up or down</span>
                            <span className="text-white opacity-50">
                                {" "}
                                to adjust volume, press to play and pause music or
                                answer and end calls or hold to switch between Active
                                Noise Cancellation and Adaptive Transparency.
                            </span>
                        </span>
                    </p>
                </div>
            </div>
            <div className="text-white w-full m-auto max-w-screen-lg pt-[170px]">
                <b className="tracking-[0.13px] leading-[36px] text-[32px]">
                    Personalised listening
                </b>
                <div className="text-[120px] mt-6">
                    <b className="tracking-[-2px] leading-[110px] inline-block whitespace-pre-wrap">
                        <p className="[margin-block-start:0] [margin-block-end:0px]">{`Sound. `}</p>
                        <p className="m-[0]">Tuned to you.</p>
                    </b>
                </div>
                <div className='w-[80%] mt-8'>
                    <b className="text-[32px] tracking-[0.13px] leading-[36px]">
                        AirPods Pro take the listening experience to a new level of
                        individuality. Personalised Spatial Audio with dynamic head
                        tracking works with all your devices to immerse you deeper in
                        all-around-you sound.2 And Adaptive EQ accounts for the fit of
                        AirPods Pro, so you hear every frequency just as it was intended.
                    </b>
                </div>
            </div>
            <div className='section4-part-1' style={{ height: '2500px' }}>
                <video ref={videoRef} className='video-section4-p1-1 w-full top-[52px] h-[calc(100vh_-_52px)] sticky m-auto object-cover z-[1] opacity-1' src='https://www.apple.com//105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/dancer/medium.mp4' />
                <div className="relative flex flex-col items-start content w-full m-auto leading-[56px] max-w-screen-lg  mt-[-300px]  pb-[400px] z-[2]" >
                    <span className="section4-part-1-t1 tracking-[0.2px] leading-[22px]  w-full text-[17px] font-semibold text-white w-[30%]">
                        <span className="text-white">To play sound that better suits your unique ear shape, Personalised Spatial Audio works with the TrueDepth camera on your iPhone to create a custom profile based on your head’s geometry. The profile syncs across your devices — delivering phenomenal sound every way you listen.2</span>
                    </span>
                    <span className="section4-part-1-t2 tracking-[0.2px] leading-[22px]  w-full text-[17px] font-semibold text-white w-[30%] mt-[400px]">
                        <span className='text-white'>{`Dynamic head tracking now brings three‑dimensional audio to Group FaceTime calls, so conversations feel like you’re in the same room with your friends and family.`}</span>
                    </span>
                    <span className="section4-part-1-t3 tracking-[0.2px] leading-[22px]  w-full text-[17px] font-semibold text-white w-[30%] mt-[400px]">
                        <span className='text-white'>{`Adaptive EQ tunes music to your ears in real time, based on the fit of AirPods Pro. Inward-facing microphones measure what you’re hearing, then adjust the low- and mid-range frequencies of a song — so you get consistently detailed playback, every time.`}</span>
                    </span>
                </div>
            </div>
        </div >
    )
}

export default FeatureFour
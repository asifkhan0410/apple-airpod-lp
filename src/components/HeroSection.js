import playIcon from '../assets/play-icon.svg'
import arrowNext from '../assets/arrow-next.svg'
import ImageCanvas from './ImageSequence'
import gsap from 'gsap'
import { useEffect } from 'react'

const HeroSection = () => {
    useEffect(() => {
        gsap.to('.hero-text', {
            scale: 1.2,
            scrollTrigger: {
                trigger: '.hero-canvas',
                start: 'top top',
                end: '+=2000px',
                scrub: 0.5
            }
        })
        gsap.to('.hero-text', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-canvas',
                start: '+=1000px',
                end: '+=1000px',
                scrub: 0.5
            }
        })
        gsap.to('.hero-1', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-canvas',
                start: 'top top',
                end: '+=2000px',
                scrub: 0.5
            }
        })
        gsap.to('.hero-2', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-canvas',
                start: 'top top',
                end: '+=2000px',
                scrub: 0.5
            }
        })
        // gsap.to('.hero-text-2', {
        //     opacity: 1,
        //     scale: 1.2,
        //     scrollTrigger: {
        //         trigger: '.hero-canvas',
        //         start: '+=2000px',
        //         end: '+=1000px',
        //         scrub: 0.5,
        //         markers: true
        //     }
        // })
        // gsap.fromTo('.hero-text-2',{opacity: 0,
        //     scale: 1,}, {
        //     opacity: 1,
        //     scale: 1.2,
        //     scrollTrigger: {
        //         trigger: '.hero-canvas',
        //         start: '+=3000px',
        //         end: '+=1000px',
        //         scrub: 0.5,
        //         markers: true
        //     }
        // })

        let tl = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: ".hero-canvas",
            //   pin: true,   // pin the trigger element while active
              start: "+=2000", // when the top of the trigger hits the top of the viewport
              end: "+=2000", // end after scrolling 500px beyond the start
              scrub: 1,
            }
        })

        tl.addLabel("start")
            .to(".hero-text-2", {scale: 1.2, opacity:1})
            .addLabel("reverse-back")
            .to(".hero-text-2", {opacity:0})
            .addLabel("end");
    }, [])

    return (
        <div style={{ height: `4000px` }}>
            <div className="m-auto w-full max-w-screen-lg flex flex-row items-start justify-start gap-[0px] text-center text-10xl text-green-200 h-full">
                <div className="w-full m-auto  max-w-screen-lg flex flex-col items-center justify-center h-full fixed top-0 bottom-0 left-0 right-0">
                    <div className='flex flex-col grow justify-end'>
                        <b className="hero-1 leading-[30px] text-3xl pb-5 flex items-center justify-center" style={{ color: '#00ff41' }}>
                            All-new
                        </b>
                        <b className="hero-text text-[12.6vw] tracking-[-4.65px] leading-[154.53px] inline-block text-white">
                            AirPods Pro
                        </b>
                    </div>
                    <div className="hero-2 flex flex-row grow items-end justify-start gap-10 text-white pb-5 z-[2] ">
                        <div className="flex flex-row box-border items-center justify-center cursor-pointer">
                            <b className="text-xl pr-2 no-underline hover:underline decoration-white">
                                Watch the film
                            </b>
                            <img
                                src={playIcon}
                            />
                        </div>
                        <div className="flex flex-row p-[0px_0px_0px_2px] box-border items-center justify-start cursor-pointer">
                            <b className="text-xl pr-2 no-underline hover:underline decoration-white">
                                Watch the event
                            </b>
                            <img
                                src={arrowNext}
                            />
                        </div>
                    </div>

                </div>
                <div className="hero-canvas absolute m-[0_!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] z-[3]">
                    <ImageCanvas
                        scrollHeight={4000}
                        width={1024}
                        height={750}
                        numFrames={64}
                    />
                </div >
                <b className="h-full m-auto hero-text-2 hero-text-3 text-[100px] tracking-[-4.65px] leading-[154.53px] inline-block text-white fixed flex items-center opacity-0 z-[2]">
                    Rebuilt from the sound up.
                </b>
            </div>
        </div>
    )
}

export default HeroSection
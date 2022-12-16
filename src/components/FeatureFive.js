import gsap from 'gsap';
import React, { useEffect } from 'react'

const FeatureFive = () => {
    useEffect(() => {
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sect5",
                start: "+=800 80%",
                end: "+=600",
                scrub: 1,
            }
        })

        tl1.addLabel("start")
            .from(".sect5-t1", { opacity: 0 })
            .from(".sect5-screen-1", { opacity: 1 })
            .to(".sect5-t1", { opacity: 1 })
            .addLabel("reverse-back")
            .to(".sect5-t1", { opacity: 0 })
            .to(".sect5-screen-1", { opacity: 0 })
            .addLabel("end");

            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sect5",
                    start: "+=1100 center",
                    end: "+=600",
                    scrub: 1,
                }
            })
    
            tl2.addLabel("start")
                .from(".sect5-t2", { opacity: 0 })
                .to(".sect5-t2", { opacity: 1 })
                .addLabel("reverse-back")
                .to(".sect5-t1", { opacity: 0 })
                .addLabel("end");
    }, [])
    
    return (
        <div>
            <div className="text-white w-full m-auto max-w-screen-lg">
                <b className="tracking-[0.13px] leading-[36px] text-[32px]">
                    Case and battery life
                </b>
                <div className="text-[120px] mt-6">
                    <b className="tracking-[-2px] leading-[110px] inline-block whitespace-pre-wrap">
                        <p className="[margin-block-start:0] [margin-block-end:0px]">{`A case of`}</p>
                        <p className="m-[0]">unmistakable</p>
                        <p className="m-[0] text-green-400">power.</p>
                    </b>
                </div>
                <div className='w-[80%] mt-8'>
                    <b className="text-[32px] tracking-[0.13px] leading-[36px]">
                        The new MagSafe Charging Case is loaded with features that make listening on the move especially convenient. An updated design offers more ways to keep track of the case, and extended battery life lets you listen, watch, and talk longer between charges. You won’t find a more capable case.
                    </b>
                </div>
            </div>
            <div className="relative w-full text-4xl text-gray-300">
                <div className="w-full h-[1px] mt-[100px] bg-gray-800" />
                <div className="flex border-b-[1px] border-gray-800 box-border">
                    <div className='flex flex-col justify-center w-[50%] border-r-[1px] border-gray-800'>
                        <div className="relative text-center text-gray-200">
                            <div className="relative top-0 left-0 right-0 bottom-0 text-[21px] font-semibold text-white flex flex-col item-center justify-center leading-[28px]">
                                <p>Up to</p>
                                <p className='text-[120px] leading-[110px]'><span className='text-green-400'>6</span> hours</p>
                                <p> of listening time with</p>
                                <p> Active Noise Cancellation enabled.</p>
                            </div>
                            <div className="relative top-0 left-0 right-0 bottom-0 text-[21px] font-semibold text-white flex flex-col item-center justify-center leading-[28px] mt-[60px]">
                                <p>Up to</p>
                                <p className='text-[120px] leading-[110px]'><span className='text-green-400'>30 </span>hours</p>

                                <p>Active Noise Cancellation enabled,</p>
                                <p>using the case</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full flex flex-col box-border items-start justify-center text-[28px] pl-[6vw] pr-[6vw]">
                        <div className="w-[80%] flex flex-row items-start justify-start relative gap-[20px] z-[1] pt-[100px]">
                            <p className="leading-[35px] font-semibold text-white text-[21px] leading-[26px] pb-[50px]">
                                <span className="opacity-50">
                                    Recharge the
                                </span>
                                <span>{` MagSafe Charging Case `}</span>
                                <span className="opacity-50">{` with an `}</span>
                                <span className="text-green-400">Apple Watch charger or MagSafe charger</span>
                                <span className="opacity-50">You can also use the Lightning connector or a Qi‑certified charger.</span>
                            </p>
                        </div>
                        <img
                            className="max-w-full max-h-full object-cover z-[0]"
                            alt=""
                            src="https://www.apple.com/v/airpods-pro/g/images/overview/battery_magsafe__b8uyauldcub6_large.jpg"
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center m-auto max-w-screen-lg mt-[150px]'>
                <div className='w-[40%] mb-[150px] flex justify-center flex-col'>
                    <img
                        className="max-w-full max-h-full object-cover z-[0]"
                        alt=""
                        src="https://www.apple.com/v/airpods-pro/g/images/overview/case_front__r6ng7f1x18a6_large.jpg"
                    />
                    <p className="leading-[35px] font-semibold text-white text-center text-[21px] leading-[26px] pb-[50px] mt-[80px]">
                        <span className="opacity-50">
                            A new
                        </span>
                        <span className="text-green-400">{` U1 chip `}</span>
                        <span className="opacity-50">{` enables `}</span>
                        <span >Find My with Precision Finding </span>
                        <span className="opacity-50">or your case, so you can exactly locate it. You can also use Find My with proximity view if you lose track of your AirPods Pro.</span>
                    </p>
                </div>
                <div className='w-[40%] mb-[150px] flex justify-center'>
                    <img
                        className="max-w-full max-h-full object-cover z-[0]"
                        alt=""
                        src="https://www.apple.com/v/airpods-pro/g/images/overview/case_closed__fn3wuwvygjau_large.jpg"
                    />
                </div>
                <div className='relative w-[100%] mb-[150px] flex justify-center'>
                    <img
                        className="max-w-full max-h-full object-cover z-[0]"
                        alt=""
                        src="https://www.apple.com/v/airpods-pro/g/images/overview/case_side__bzfra9cv8342_large.jpg"
                    />
                    <div className="absolute left-0 w-[100%] flex flex-row items-start justify-start gap-[20px] z-[1] pt-[100px]">
                        <p className="absolute top-[200px] left-[680px] leading-[35px] font-semibold text-white text-[21px] leading-[26px] pb-[50px]">
                            <span className="opacity-50">
                                A
                            </span>
                            <span>{` lanyard loop `}</span>
                            <span className="opacity-50"> allows you to attach the case to a backpack or handbag, so immersive sound is always within reach.</span>
                        </p>
                        <div className="absolute top-[185px] left-[510px] h-[1px] w-[450px]">
                            <div className="bg-gray-500 w-[450px] h-[1px]" />
                        </div>
                    </div>
                </div>
                <div className='relative w-[100%] mb-[400px] flex justify-center'>
                    <img
                        className="max-w-full max-h-full object-cover z-[0]"
                        alt=""
                        src="https://www.apple.com/v/airpods-pro/g/images/overview/case_bottom__ftg24ec32pu2_large.jpg"
                    />
                    <div className="absolute w-[100%] flex flex-row items-start justify-start gap-[20px] z-[1] pt-[100px]">
                        <p className="absolute left-[65%] top-[250px] leading-[35px] font-semibold text-white text-[21px] leading-[26px] pb-[50px]">
                            <span className="opacity-50">
                                The case’s
                            </span>
                            <span>{` built‑in speaker `}</span>
                            <span className="opacity-50">plays sound to help you easily locate it, and</span>
                            <span className="text-green-400"> all-new tones</span>
                            <span className="opacity-50">alert you when the battery is low or pairing is complete.</span>
                        </p>
                        <div className="absolute h-[265px] top-[90%] left-[60%] w-[1px]">
                            <div className="bg-gray-500 w-[1px] h-[265px]" />
                        </div>
                    </div>
                </div>
                <div className='w-[40%] mb-[150px] flex justify-center flex-col'>
                    <img
                        className="max-w-full max-h-full object-cover z-[0]"
                        alt=""
                        src="https://www.apple.com/v/airpods-pro/g/images/overview/case_closed__fn3wuwvygjau_large.jpg"
                    />
                    <p className="leading-[35px] font-semibold text-white text-center text-[21px] leading-[26px] pb-[50px] mt-[80px]">
                        <span className="opacity-50">
                            Both AirPods Pro and the MagSafe Charging Case are
                        </span>
                        <span >IPX4 sweat and water resistant</span>
                    </p>
                </div>
            </div>
            <div>
                <div className="text-white w-full m-auto max-w-screen-lg">
                    <b className="tracking-[0.13px] leading-[36px] text-[32px]">
                        Magical experience
                    </b>
                    <div className="text-[120px] mt-6">
                        <b className="tracking-[-2px] leading-[110px] inline-block whitespace-pre-wrap">
                            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Simplicity on`}</p>
                            <p className="m-[0]">a grand scale.</p>
                        </b>
                    </div>
                    <div className='w-[80%] mt-8'>
                        <b className="text-[32px] tracking-[0.13px] leading-[36px]">
                            From instant setup to Siri commands, AirPods Pro hold all the qualities that make the AirPods family so magical. And new features give you the ability to move through more tasks with unprecedented ease.
                        </b>
                    </div>
                </div>
                <div className='sect5 relative' style={{ height: '2500px' }}>
                    <div className='sticky top-[0px] ml-[37%] h-[calc(100vh)]'>
                        <video className='sect5-screen-1 absolute w-[296px] top-[122px] h-[638px] left-[20px] rounded-[35px] m-auto object-cover z-[2] opacity-1' src='https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/pairing/large_2x.mp4' autoPlay muted />
                        <img className='absolute w-max top-[102px] h-[calc(100vh_-_152px)]  m-auto object-scale-down z-[0] opacity-1' src='https://www.apple.com/v/airpods-pro/g/images/overview/magical_iphone_hardware__ff15ryl53xay_large.jpg' />
                        <img className='sect5-screen-2 absolute w-[296px] top-[122px] h-[638px] left-[20px] rounded-[35px]  m-auto object-cover z-[1] opacity-1' src='https://www.apple.com/v/airpods-pro/g/images/overview/magical_screen_audio__dzbihn6hl7au_large.jpg' />
                        <img className='absolute w-[296px] bottom-[60px] h-max left-[-200px] rounded-[35px]  m-auto object-cover z-[3] opacity-1' src='https://www.apple.com/v/airpods-pro/g/images/overview/magical_case__epo6duhktocy_large_2x.png' />
                    </div>
                    <div className="sticky top-[300px] h-[100vh] flex flex-col items-end content w-full m-auto leading-[56px] max-w-screen-lg z-[2]" >
                        <span className="asbolute sect5-t1 tracking-[0.2px] leading-[28px]  w-full text-[21px] font-semibold text-white w-[30%] pt-[0px] opacity-0">
                            <span className='text-white'>{`Easy, magical setup `}<br></br></span>
                            <span className="text-white opacity-50">Place AirPods Pro near your iPhone and tap Connect to seamlessly pair with every device in your iCloud account.8 And if your case is custom engraved, the same engraving appears on your device’s screen — for an even more</span>
                            <span className='text-green-400'>{` personal `}</span>
                            <span className='text-white opacity-50'>{`experience.`}</span>
                        </span>
                        <span className="absolute sect5-t2 tracking-[0.2px] leading-[28px]  w-full text-[21px] font-semibold text-white w-[30%] mt-[0px]">
                            <span className='text-white'>{`Audio Sharing `}<br></br></span>
                            <span className="text-white opacity-50">Easily share a song or show between any two sets of AirPods. Simply bring AirPods near the iPhone, iPad, or Apple TV you’re listening to and connect</span>
                            <span className='text-green-400'>{` instantly `}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureFive
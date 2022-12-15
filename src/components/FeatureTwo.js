import React from 'react'

const FeatureTwo = () => {
    return (
        <div className='mt-[-500px] '>
            <div className="text-white w-full m-auto max-w-screen-lg">
                <b className="tracking-[0.13px] leading-[36px] text-[32px]">
                    Audio performance
                </b>
                <div className="text-[120px] mt-6">
                    <b className="tracking-[-2px] leading-[110px] inline-block whitespace-pre-wrap">
                        <p className="[margin-block-start:0] [margin-block-end:0px]">{`H2. More `}</p>
                        <p className="m-[0]">immersive by</p>
                        <p className="m-[0]">every measure.</p>
                    </b>
                </div>
                <div className='w-[80%] mt-8'>
                    <b className="text-[32px] tracking-[0.13px] leading-[36px]">
                        The new Apple‑designed H2 chip is the force behind AirPods Pro and
                        its advanced audio performance. It works in concert with a
                        custom‑built driver and amplifier to deliver crisp, clear high
                        notes and deep, rich bass in stunning definition — so every sound
                        is more vivid than ever.
                    </b>
                </div>
            </div>
            <div className="relative w-full text-10xl text-gray-300">
                <div className="w-full h-[1px] mt-[100px] bg-gray-800" />
                <div className="flex border-b-[1px] border-gray-800">
                    <div className="w-[50%] flex items-center justify-center">
                        <video className='w-[80%]' src='https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/h2/large_2x.mp4' autoPlay loop muted />
                    </div>
                    <div className="w-[50%] flex items-center justify-center border-l-[1px] border-gray-800 pl-[6vw] pr-[6vw]">
                        <b className="tracking-[0.2px] leading-[32px] flex items-center text-[28px] font-semibold">
                            <span className="[line-break:anywhere] w-full">
                                <span className="text-white">The brand-new H2 chip</span>
                                <span className="text-white opacity-50">{` carries out more functions than ever, using `}</span>
                                <span className="text-green-400">
                                    computational algorithms
                                </span>
                                <span className='text-white opacity-50'>
                                    {" "}
                                    to deliver even smarter noise cancellation, superior
                                    three-dimensional sound and more efficient battery life —
                                    all at once.
                                </span>
                            </span>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureTwo
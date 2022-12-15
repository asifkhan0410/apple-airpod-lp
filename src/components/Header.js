import React, { useEffect, useState } from 'react'
import logo from '../assets/aacgnfirstfocus.svg'
import searchIcon from "../assets/search-applecom.svg"
import shoppingbag from "../assets/shopping-bag.svg"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false)
    useEffect(() => {
        const showAnim = gsap
            .from('.navbar', {
                yPercent: -50,
                paused: true,
                duration: 0.2,
            })
            .progress(1);

        ScrollTrigger.create({
            trigger: '.homepage',
            scrub: true,
            start: 50,
            end: 100,
            onUpdate: (self) => {
                console.log(self)
                self.direction === -1 ? setIsNavbarFixed(false) : setIsNavbarFixed(true);
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            },
        });
    }, []);
    return (
        <div className='navbar fixed w-full z-[9]'>
            <div className="m-auto w-full max-w-screen-lg bg-gray-1800 h-[44px] shrink-0 z-[3]">
                <div className="flex flex-row box-border items-start justify-start">
                    <div className="flex flex-row p-[0px_0.03125px_0px_0px] w-full box-border items-start justify-start gap-[24.75px] items-center justify-between">
                        <img
                            className="w-[30px] h-[44px] shrink-0"
                            alt=""
                            src={logo}
                        />
                        <p className='text-gray-400 text-sm'>Store</p>
                        <p className='text-gray-400 text-sm'>Mac</p>
                        <p className='text-gray-400 text-sm'>iPad</p>
                        <p className='text-gray-400 text-sm'>iPhone</p>
                        <p className='text-gray-400 text-sm'>Watch</p>
                        <p className='text-gray-400 text-sm'>AirPods</p>
                        <p className='text-gray-400 text-sm'>{'TV & Home'}</p>
                        <p className='text-gray-400 text-sm'>Only on Apple</p>
                        <p className='text-gray-400 text-sm'>Accesories</p>
                        <p className='text-gray-400 text-sm'>Support</p>
                        <img
                            className="flex pb-3 w-[32px] h-[44px] shrink-0"
                            alt=""
                            src={searchIcon}
                            objectFit='contain'
                        />
                        <img
                            className="w-[29px] h-[44px] shrink-0"
                            alt=""
                            src={shoppingbag}
                        />
                    </div>
                </div>
            </div>
            <div className={`${isNavbarFixed ? 'z-[4] backdrop-blur-md' : 'm-auto max-w-screen-lg'} w-full z-[2] text-4xl mt-2`} style={{backgroundColor: isNavbarFixed ? '#1d1d1fb8' : ''}}>
                <div className={`${!isNavbarFixed ? '' : 'm-auto max-w-screen-lg'} h-[52px] flex justify-between items-center border-b border-gray-800`}>
                    <b className="tracking-[0.23px] inline-block text-white text-2xl">
                        AirPods Pro (2nd generation)
                    </b>
                    <div className="text-sm flex items-center">
                        <div className="flex">
                            <div className="text-gray-400">
                                Overview
                            </div>
                            <div className="inline-block text-gray-200 ml-5">
                                Tech Specs
                            </div>
                            <div className="inline-block text-gray-200 ml-5">
                                Compare
                            </div>
                        </div>
                        <div className="rounded-[100px] bg-blue-500 tracking-[-0.12px] leading-[16px] p-[4px_10px_4px_10px] inline-block z-[0] text-white ml-5">
                            Buy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
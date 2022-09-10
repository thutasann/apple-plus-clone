import React from 'react'
import Image from 'next/image';
import { SiAppletv } from "react-icons/si";
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';
import { tvs } from '../../mock/tvs';



const About = () => {
    return (
        <div className='aboutWrapper'>
            <div className='aboutWrapper__heading'>
                <div className='aboutWrapper__heading__logo'>
                    <SiAppletv size={45} fill="#fff" />
                </div>
                <h1>
                    Watch Apple TV+ anywhere <br/>
                    on the Apple TV app.
                </h1>
                <p>
                    Find the Apple TV app on your favorite Apple devices. <br/>
                    Or watch Apple TV+ online at <Link href="https://tv.apple.com/">tv.apple.com</Link>.
                </p>
            </div>

            <div className='aboutWrapper__devices'>
                <div className="aboutWrapper__devices__device">
                    <Image
                        src="/apple-tv-animation.jpeg"
                        width={90}
                        height={90}
                        placeholder="blur"
                        blurDataURL='/apple-tv-animation.jpeg'
                        alt="Apple TV"
                        loading='lazy'
                    />
                    <p>Apple TV</p>
                </div>

                <div className="aboutWrapper__devices__device">
                    <Image
                        src="/i-phone-animation.jpeg"
                        width={90}
                        height={90}
                        placeholder="blur"
                        blurDataURL='/i-phone-animation.jpeg'
                        alt="IPhone"
                        loading='lazy'
                    />
                    <p>iPhone</p>
                </div>

                <div className="aboutWrapper__devices__device">   
                    <Image
                        src="/i-pad-animation.jpeg"
                        width={90}
                        height={90}
                        placeholder="blur"
                        blurDataURL='/i-pad-animation.jpeg'
                        alt="IPad"
                        loading='lazy'
                    />
                    <p>iPad</p>
                </div>
                
                <div className="aboutWrapper__devices__device">
                    <Image
                        src="/mac-animation.jpeg"
                        width={90}
                        height={90}
                        placeholder="blur"
                        blurDataURL='/mac-animation.jpeg'
                        alt='Mac'
                        loading='lazy'
                    />
                    <p>Mac</p>
                </div>

                <div className="aboutWrapper__devices__device">
                    <Image
                        src="/airplay-animation.jpeg"
                        width={90}
                        height={90}
                        placeholder="blur"
                        blurDataURL='/airplay-animation.jpeg'
                        alt="AirPlay"
                        loading='lazy'
                    />
                    <p>AirPlay</p>
                </div>
            </div>

            <div className='aboutWrapper__stream'>
                <h2>
                    See it on your smart TV <br/> or streaming device.
                </h2>
                <div className='spacer'>
                    <Link href="/" className="aboutWrapper__stream__cta">
                        <span className='aboutWrapper__stream__cta__content'>
                            Set up your device <BsChevronRight/>
                        </span>
                    </Link>
                    <Link href="/" className="aboutWrapper__stream__cta">
                        <span className='aboutWrapper__stream__cta__content'>
                            Explore compatible devices <BsChevronRight/>
                        </span>
                    </Link>
                </div>

                <div className='aboutWrapper__stream__device'>
                    {
                        tvs.map((tv, i) => {
                            return (
                                <div className='aboutWrapper__stream__device__item' key={i}>
                                    <Image
                                        src={tv.src}
                                        width="130px"
                                        height="80px"
                                        alt={tv.alt}
                                        placeholder="blur"
                                        blurDataURL={tv.src}
                                        loading="lazy"
                                    />
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default About
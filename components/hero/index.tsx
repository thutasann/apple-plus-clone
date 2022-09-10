import React, { useRef } from 'react'
import Link from 'next/link';
import { SiAppletv } from "react-icons/si";


const Hero = () => {

    const ref = useRef();

    return (
        <div className='heroWrapper'>
            
            <video autoPlay muted loop width="100%" height="200%">
                <source src="/apple-video.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}

export default Hero
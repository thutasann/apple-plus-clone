import React from 'react'

const Hero = () => {
    return (
        <div className='heroWrapper'>
            <video autoPlay muted loop>
                <source src="/apple-video.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}

export default Hero
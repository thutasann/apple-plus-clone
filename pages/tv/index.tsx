import React from 'react'
import Head from 'next/head'
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Link from 'next/link';
import { BsChevronLeft } from "react-icons/bs";


const Tv = () => {

    let meta = {
        title: "Apple TV+ - Apple",
        description:"Apple TV+ features critically acclaimed Apple Original shows and movies. Watch on the Apple&nbsp;TV app across devices.",
        url: "http://apple-plus-clone-thuta.vercel.app/",
        image: "/apple.png",
        ogimage: "/apple-social-share.png"
    }

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="title" content={meta.title} />
                <meta name="robots" content="index" />
                <link rel="icon" type="image/png" href={meta.image} sizes="16x16" />

                <meta name="description" content={meta.description} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={meta.url} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.ogimage} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={meta.url} />
                <meta property="twitter:title" content={meta.title} />
                <meta property="twitter:description" content={meta.description} />
                <meta property="twitter:image" content={meta.ogimage} />
            </Head>
            <NavBar/>
                <div className='tvWrapper'>
                    <Link href="/" className='tvWrapper__link'>
                        <span className='tvWrapper__link__cta'>
                            <BsChevronLeft/>
                            Back
                        </span>
                    </Link>
                </div>
            <Footer/>
        </>
    )
}

export default Tv;

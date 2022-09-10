import Head from 'next/head'
import NavBar from '../components/navbar';

export default function Home() {

  let meta = {
    title: "Apple TV+ - Apple",
    description:"Apple TV+ features critically acclaimed Apple Original shows and movies. Watch on the Apple&nbsp;TV app across devices.",
    keywords: "Hsu Ye Ywel, Project Coordinator, Web Developer, Scrum Master, Medical Student, Yoma Fleet, Myanmar",
    url: "https://hsuyeywel.vercel.app/",
    image: "/apple-fav.png",
    ogimage: "/apple-social-share.png"
  }
  
  return (
    <>
      <Head>
          <title>{meta.title}</title>
          <meta name="title" content={meta.title} />
          <meta name="robots" content="index" />
          <meta name="google-site-verification" content="lt2KD97W6zCJHumr4ckLHj-3cMOvWcJl30mKEJiglz8" />
          <link rel="icon" type="image/png" href={meta.image} sizes="16x16" />

          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />

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

    </>
  )
}

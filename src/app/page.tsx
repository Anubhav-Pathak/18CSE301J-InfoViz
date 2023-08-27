import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Tableau from '@/components/Tableau'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src="/images/Hero.avif" className="max-w-sm rounded-lg shadow-2xl" alt='InfoViz' width={384} height={400}/>
          <div>
            <h1 className="text-5xl font-bold">Hi Folks !</h1>
            <p className="py-6">I am <span className='text-secondary'>Anubhav Pathak</span>, here to present some of my curated visualizations. Dive into a spectrum of data stories that unravel complex insights through interactive and engaging visuals. This website is your gateway to exploring the power of visual storytelling in conveying information. </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Tableau />
      <Projects />
      <Footer />
    </>
  )
}

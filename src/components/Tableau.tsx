import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="hero min-h-screen bg-base-200" id='tableau'>
        <div className="hero-content flex-col lg:flex-row gap-8">
            <Image src="/images/Tableau.png" className="max-w-3xl rounded-lg shadow-2xl" alt="Tableau" width={768} height={400}/>
            <div>
                <h1 className="text-5xl font-bold">Greenhouse Gas Visualization</h1>
                <p className="py-6">This Tableau visualization offers a comprehensive understanding of greenhouse gas emissions, encompassing their sources, trends, regional distribution, and potential consequences</p>
            </div>
        </div>
    </div>
  )
}

export default Projects
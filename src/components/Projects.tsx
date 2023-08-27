import React from 'react'

const Projects = () => {
  return (
    <div className='min-h-screen flex items-center justify-center flex-col bg-base-200'>
        <h1 className='text-5xl font-bold mb-24'>Abstract & Research</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Abstract on Analysis of Arbitration Dynamics</h2>
                    <p>This study aims to comprehensively analyze a diverse range of arbitration cases in India, shedding light on various facets, trends, and challenges that have emerged over time</p>
                    <div className="card-actions justify-end">
                        <a href='/docs/Abstract.pdf' className="btn">View</a>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Gesture Recognition</h2>
                    <p>In this paper, we present two large video multi-modal datasets for RGB and RGB-D gesture recognition: the ChaLearn LAP RGB-D Isolated Gesture Dataset (IsoGD) and the Continuous Gesture Dataset (ConGD). </p>
                    <div className="card-actions justify-end">
                    <a href='/docs/ChaLearn IsoGD & ConGD.pdf' className="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
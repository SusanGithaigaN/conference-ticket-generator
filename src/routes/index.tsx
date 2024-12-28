import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    // <div className="line-bottom bg-no-repeat bg-bottom-left">
      <div className="p-4 text-center line-top bg-no-repeat bg-right-top">
        <div className="flex flex-row justify-center py-8">
          <img className='img-fluid w-64 h-auto' alt='logo' src='../../src/assets/images/logo-full.svg' />
        </div>
        <p className='font-bold text-xl md:text-4xl space-y-2'>
          <span className='text-white'> Your Journey to Coding <br />Conf 2025 Starts Here!</span>
        </p>
        <div className="py-6 text-white text-md md:text-xl font-thin">
        Secure your spot at next year's biggest coding conference.
        </div>
      </div>
    // </div>
  )
}


import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/congrats')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="p-4 text-center line-top bg-no-repeat bg-right-top">
            <div className="flex flex-row justify-center py-8">
                <img className='img-fluid w-64 h-auto' alt='logo' src='../../src/assets/images/logo-full.svg' />
            </div>
            <p className='font-bold text-xl md:text-4xl space-y-2'>
                <span className='text-white'> Congrats,  </span>
                <span className='gradientPink'>Susan!</span>
                <br />
                <p className='text-white'>Your ticket is ready.</p>
            </p>
            <div className="py-6 text-white text-md md:text-xl font-normal">
                <p>We've emailed your ticket to <br />
                    <span className='accentPink'> Email Address</span> and will send updates in <br /> the run up to the event.</p>
            </div>
        </div>
    )
}

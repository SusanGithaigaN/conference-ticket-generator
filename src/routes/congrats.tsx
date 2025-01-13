import { createFileRoute } from '@tanstack/react-router'
import logo from '../assets/images/logo-full.svg';
import avatar from '../assets/images/image-avatar.jpg'
import github from '../assets/images/icon-github.svg'

export const Route = createFileRoute('/congrats')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="p-4 text-center line-top bg-no-repeat bg-right-top h-screen">
            <div className="flex flex-row justify-center py-8">
                <img className='img-fluid w-64 h-auto' alt='logo' src={logo} />
            </div>
            <p className='font-bold text-xl md:text-4xl space-y-2'>
                <span className='text-white'> Congrats,  </span>
                <span className='gradientPink'>Susan!</span>
                <br />
                <p className='text-white'>Your ticket is ready.</p>
            </p>
            <div className="py-6 text-white text-md md:text-xl font-normal mb-10">
                <p className='text-gray-300'>We've emailed your ticket to <br />
                    <span className='accentPink'> susangithaiga26@gmail.com</span> and will send updates in <br /> the run up to the event.</p>
            </div>
            {/* Display user input */}
            <div className="flex flex-col items-center justify-center py-10 patternTicket bg-contain bg-center bg-no-repeat">
                {/* date and location */}
                <div className="flex flex-col items-start w-[90%] max-w-md">
                    <img className="img-fluid size-120 py-4" alt="Coding Conf" src={logo} />
                    <p className="text-sm text-gray-400 font-normal" style={{ wordSpacing: '10px' }}>Jan 31, 2025 / Austin, TX</p>
                </div>
                {/* github */}
                <div className="flex flex-row items-start w-[90%] max-w-md gap-4 pt-8">
                    <div className="img">
                        <img className="img-fluid size-16 rounded-md" alt="User profile" src={avatar} />
                    </div>
                    <div className="text">
                        <p className="text-md text-white font-normal text-start">Susan </p>
                        <div className="flex flex-row gap-2 py-2">
                            <img className="img-fluid" alt="GitHub Icon" src={github} />
                            <p className="text-sm text-gray-400 font-normal">susangithaiga26@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

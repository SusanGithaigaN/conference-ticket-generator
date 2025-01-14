import { createFileRoute, useLocation } from '@tanstack/react-router';
import logo from '../assets/images/logo-full.svg';
import github from '../assets/images/icon-github.svg';
import { FormDataState } from './index';

export const Route = createFileRoute('/congrats')({
    component: RouteComponent,
});

function RouteComponent() {
    const { state } = useLocation() as { state: FormDataState };
    // test
    // console.log('Location state:', state);
    const { fullName, email, gitUserName, userAvatar } = state || {};

    // create url for uploaded avatar
    // set default avatar
    const avatarSrc =
        typeof userAvatar === 'string'
            ? userAvatar
            : userAvatar
                ? URL.createObjectURL(userAvatar)
                : '../assets/images/image-avatar.jpg';

    return (
        <div className="p-4 text-center line-top bg-no-repeat bg-right-top h-screen">
            <div className="flex flex-row justify-center py-8">
                <img className="img-fluid w-64 h-auto" alt="logo" src={logo} />
            </div>
            <div className="font-bold text-xl md:text-4xl space-y-2">
                <span className="text-white"> Congrats, </span>
                <span className="gradientPink">{fullName || 'User'}!</span>
                <br />
                <p className="text-white">Your ticket is ready.</p>
            </div>
            <div className="py-6 text-white text-md md:text-xl font-normal mb-10">
                <p className="text-gray-300">
                    We've emailed your ticket to <br />
                    <span className="accentPink">{email || 'Your email'}</span> and will send updates in <br /> the run-up
                    to the event.
                </p>
            </div>
            {/* Display user input */}
            <div className="flex flex-col items-center justify-center py-10 patternTicket bg-contain bg-center bg-no-repeat mb-20">
                {/* date and location */}
                <div className="flex flex-col items-start w-[90%] max-w-md">
                    <img className="img-fluid size-120 py-4" alt="Coding Conf" src={logo} />
                    <p className="text-sm text-gray-400 font-normal" style={{ wordSpacing: '10px' }}>
                        Jan 31, 2025 / Austin, TX
                    </p>
                </div>
                {/* github */}
                <div className="flex flex-row items-start w-[90%] max-w-md gap-4 pt-8">
                    <div className="img">
                        <img
                            className="img-fluid size-16 rounded-md text-white"
                            alt="User profile"
                            src={avatarSrc}
                        />
                    </div>
                    <div className="text">
                        <p className="text-md text-white font-normal text-start">
                            {fullName || 'Your full name'}
                        </p>
                        <div className="flex flex-row gap-2 py-2">
                            <img className="img-fluid" alt="GitHub Icon" src={github} />
                            <p className="text-sm text-gray-400 font-normal">{gitUserName || 'GitHub Username'}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Attribution */}
            <div className="attribution text-gray-400 text-sm pt-12 flex flex-row justify-center pb-6">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className='pl-1.5 accentPink'>Frontend Mentor</a>.
                Coded by <a href="https://github.com/SusanGithaigaN"> <span className='pl-1.5 accentPink'>Susan Githaiga</span></a>.
            </div>
        </div>
    );
}

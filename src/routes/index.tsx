import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router';
import logo from '../assets/images/logo-full.svg';
import info from '../assets/images/icon-info.svg';

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <>
      <div className="p-4 text-center line-top bg-no-repeat bg-right-top ">
        <div className="flex flex-row justify-center py-8">
          <img className='img-fluid w-64 h-auto' alt='logo' src={logo} />
        </div>
        <p className='font-bold text-xl md:text-4xl space-y-2'>
          <span className='text-white'> Your Journey to Coding <br />Conf 2025 Starts Here!</span>
        </p>
        <div className="py-6 text-white text-md md:text-xl font-thin">
          Secure your spot at next year's biggest coding conference.
        </div>
      </div>

      {/* form */}
      <div className='flex flex-row justify-center'>
        <form>
          <div className="space-y-12 p-4 text-white">
            <div className="avatar">
              {/* Photo avatar label */}
              <label htmlFor="cover-photo" className="block text-md font-medium py-4">
                Upload Avatar
              </label>

              {/* Photo avatar */}
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-500 bg-slate-900 px-6 py-6 w-full">
                <div className="text-center">
                  <img className='mx-auto size-120 border border-slate-800 p-4 rounded-xl bg-slate-800' alt='Upload File' src={info} />
                  <div className="mt-4 flex text-sm/6">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-normal focus-within:outline-none focus-within:ring-2 hover:accentPink"
                    >
                      <span className='text-gray-400'>Drag and drop or click to upload</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <img className='img-fluid' alt='img-fluid w-10' src={info} />
                <span className='text-sm text-gray-400 font-thin'>Upload your photo (JPG or PNG, max size: 500KB).</span>
              </div>
            </div>

            <div className="mt-10 col capitalize space-y-6">
              {/* Full name */}
              <div className="col-span-full capitalize">
                <label htmlFor="full-name" className="block text-sm/6 font-normal">
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    autoComplete="given-name"
                    className="w-full rounded-md bg-transparent px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Email address */}
              <div className="col-span-full capitalize">
                <label htmlFor="email" className="block text-sm/6 font-normal">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='example@email.com'
                    className="w-full rounded-md bg-transparent px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Github username */}
              <div className="col-span-full capitalize">
                <label htmlFor="github-username" className="block text-sm/6 font-normal">
                  Github Username
                </label>
                <div className="mt-2">
                  <input
                    id="github-username"
                    name="github-username"
                    type="text"
                    autoComplete="github-username"
                    placeholder='@yourusername'
                    className="w-full rounded-md bg-transparent px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Generate ticket */}
              <div className="mt-4">
                <button className='w-full darkOrange p-2 rounded-md bgDarker font-semibold hover:bg-orange-600'>
                  Generate My Ticket
                </button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </>
  )
}


import { createFileRoute } from '@tanstack/react-router'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'

export const Route = createFileRoute('/form')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <form>
        <div className="space-y-12 p-4 text-white">
          {/* Photo avatar label */}
          <label htmlFor="cover-photo" className="block text-sm/6 font-medium">
            Upload Avatar
          </label>

          {/* Photo avatar */}
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-500 bg-slate-900 px-6 py-6 w-full md:w-1/4">
            <div className="text-center">
              {/* <PhotoIcon aria-hidden="true" className="mx-auto size-120" /> */}
              {/* <div className='bg-bgLight'> */}
              <img className='mx-auto size-120 border border-slate-800 p-4 rounded-xl bg-slate-800' alt='Upload File' src='../../src/assets/images/icon-upload.svg' />
              {/* </div> */}
              <div className="mt-4 flex text-sm/6">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-semibold focus-within:outline-none focus-within:ring-2 hover:accentPink"
                >
                  <span>Drag and drop or click to upload</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">

            <div className="mt-10 col capitalize">
              {/* Full name */}
              <div className="col-span-full capitalize">
                <label htmlFor="full-name" className="block text-sm/6 font-medium">
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    autoComplete="given-name"
                    className="w-full md:w-1/4 rounded-md bg-transparent px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Email address */}
              <div className="col-span-full capitalize">
                <label htmlFor="email" className="block text-sm/6 font-medium">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='example@email.com'
                    className="w-full md:w-1/4 rounded-md bg-transparent px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Github username */}
              <div className="col-span-full capitalize">
                <label htmlFor="github-username" className="block text-sm/6 font-medium t">
                  Github Username
                </label>
                <div className="mt-2">
                  <input
                    id="github-username"
                    name="github-username"
                    type="text"
                    autoComplete="github-username"
                    placeholder='@yourusername'
                    className="w-full md:w-1/4 rounded-md bg-transparent px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Generate ticket */}
              <div className="mt-4">
                <button className='w-full md:w-1/4 darkOrange p-2 rounded-md bgDarker font-bold hover:bg-orange-600'>
                  Generate My Ticket
                </button>
              </div>

            </div>
          </div>
        </div>
      </form>
    </>
  )
}

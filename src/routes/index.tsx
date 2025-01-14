import * as React from 'react'
import { createFileRoute, useRouter } from '@tanstack/react-router';
import logo from '../assets/images/logo-full.svg';
import info from '../assets/images/icon-info.svg';
import upload from '../assets/images/icon-upload.svg';

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

// define userInput type to be mapped onto /congrats
export type FormDataState = {
  fullName: string;
  email: string;
  gitUserName: string;
  userAvatar?: File | string | null;
};

function HomeComponent() {
  const [userInput, setUserInput] = React.useState<FormDataState>({
    fullName: '',
    email: '',
    gitUserName: '',
    userAvatar: null,
  });

  // navigation
  const router = useRouter();
  // redirect the user
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setUserInput((prev) => ({
        ...prev,
        userAvatar: fileUrl,
      }));
    }
  };

  // update user input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('You have entered:', userInput);
    router.navigate({
      to: '/congrats',
      state: {
        fullName: userInput.fullName,
        email: userInput.email,
        gitUserName: userInput.gitUserName,
        userAvatar: userInput.userAvatar,
      },
    });

  };

  return (
    <div className='h-full line-top bg-no-repeat bg-right-top h-fit'>
      <div className="p-4 text-center">
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
        <form onSubmit={handleSubmit}>
          <div className="space-y-8 p-4 text-white">
            <div className="avatar">
              {/* Photo avatar label */}
              <label htmlFor="cover-photo" className="block text-md font-medium text-gray-300 py-2">
                Upload Avatar
              </label>

              {/* Photo avatar */}
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-500 bg-slate-900 px-6 py-6 w-full">
                <div className="text-center">
                  {userInput.userAvatar ? (
                    typeof userInput.userAvatar === "string" ? (
                      <img
                        className="mx-auto size-16 border border-slate-800 rounded-xl bg-slate-800"
                        alt="Uploaded Avatar"
                        src={userInput.userAvatar}
                      />
                    ) : (
                      <img
                        className="mx-auto size-1 6border border-slate-800 p-4 rounded-xl bg-slate-800"
                        alt="Uploaded Avatar"
                        src={URL.createObjectURL(userInput.userAvatar)}
                      />
                    )
                  ) : (
                    <img
                      className="mx-auto size-120 border border-slate-800 p-4 rounded-xl bg-slate-800"
                      alt="Upload File"
                      src={upload}
                    />
                  )}

                  <div className="mt-4 flex text-sm/6">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-normal focus-within:outline-none focus-within:ring-2 hover:accentPink"
                    >
                      <span className='text-gray-00 text-sm'>Drag and drop or click to upload</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
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
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={userInput.fullName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="w-full rounded-md bg-slate-900 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
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
                    value={userInput.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder='example@email.com'
                    className="w-full rounded-md bg-slate-900 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
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
                    id="gitUserName"
                    name="gitUserName"
                    type="text"
                    value={userInput.gitUserName}
                    onChange={handleChange}
                    autoComplete="github-username"
                    placeholder='@yourusername'
                    className="w-full rounded-md bg-slate-900 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Generate ticket */}
              <div className="mt-4">
                <button className='w-full darkOrange p-2 rounded-md bgDarker font-semibold hover:bg-orange-600' onClick={handleSubmit}>
                  Generate My Ticket
                </button>
              </div>

            </div>
          </div>
        </form>
      </div>
      {/* Attribution */}
      <div className="attribution text-gray-400 text-sm flex flex-row justify-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className='pl-1.5 accentPink'>Frontend Mentor</a>.
        Coded by <a href="https://github.com/SusanGithaigaN"> <span className='pl-1.5 accentPink'>Susan Githaiga</span></a>.
      </div>
    </div>
  );
}


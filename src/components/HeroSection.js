import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Using react-icons

const HeroSection = () => {
  return (
    <div id="home" className="relative isolate px-6 pt-20 lg:px-12 bg-black">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[50rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-700 to-gray-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-7xl py-20 sm:py-32 lg:py-40 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Forging Legends in Code
          </h1>
          <p className="mt-8 text-lg leading-8 text-gray-400">
            Greetings, I'm Solomon, a self-taught software artisan devoted to
            crafting high-quality digital realms. From humble beginnings, I aspire to
            conquer the tech landscape. Join me on this epic journey to build
            the future.
          </p>
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-gray-800 bg-opacity-70 backdrop-blur-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 flex items-center gap-x-2"
            >
              Join the Battle
              <FaArrowRight />
            </a>
            <a
              href="#portfolio"
              className="text-sm font-semibold leading-6 text-white hover:text-gray-400"
            >
              Explore My Quests <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczOOpgDaUuHWC6HHf5FX5Xv_FfMI-fMkWSXQik0PZs_TDTDYEkHvzZPW9fmdu7545PvffsiJ8v1LIQv6BGVAvE8RmrnAyD3Pmy6BHbHbw1vigdQl-GSyHH2nMHnhIK7xXbDkxKAbmqFEj9HvgeIH3BAJ=w810-h1080-s-no?authuser=0" // Replace with your actual image URL
            alt="Self-taught developer"
            className="h-auto max-w-full rounded-lg shadow-lg border-4 border-gray-600"
            style={{ maxHeight: '500px', objectFit: 'cover' }} // Adjust image height and fit
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-16rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-32rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[50rem] -translate-x-1/2 bg-gradient-to-tr from-gray-700 to-gray-900 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default HeroSection;

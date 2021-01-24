import React from 'react'
import { Section } from '../lib/enums'
import Arrow from './Arrow'
import aromaticity from '../Images/aromaticity.png'
import bandcamp from '../Images/bandcamp.webp'
import githuboctocat from '../Images/github-octocat.png'

export default function Projects(){
    return (
        <section className="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font pt-10">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div id="projects" className="lg:w-2/3 mx-auto">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-700 dark:text-white font-bold text-center">Projects</h1>
                    <div className="flex flex-wrap w-full bg-gray-100 dark:bg-gray-800 py-32 px-10 relative mb-4">
                        <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={aromaticity}/>
                        <div className="text-center relative z-10 w-full">
                        <h2 className="text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">aromaticity</h2>
                        <p className="leading-relaxed">aromaticity is a lot of things: a molecular modeling software, a spreadsheet editor for chemistry with Excel-like formulas, a CLI application and more that has yet to come.</p>
                        <a className="mt-3 text-blue-500 dark:text-blue-300 inline-flex items-center" href="https://aromaticity.io" target="_blank">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/2">
                        <div className="flex flex-wrap w-full bg-gray-100 dark:bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={bandcamp}/>
                            <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl font-medium title-font mb-2 text-gray-900 dark:text-white">Bandcamp Desktop</h2>
                            <p className="leading-relaxed">A desktop client for Bandcamp with an integrated music player and purchased music downloader.</p>
                            <a className="mt-3 text-blue-500 dark:text-blue-300 inline-flex items-center" href="https://github.com/themagiulio/bandcamp-desktop" target="_blank">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="px-2 w-1/2">
                        <div className="flex flex-wrap w-full bg-gray-100 dark:bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={githuboctocat}/>
                            <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl font-medium title-font mb-2 text-gray-900 dark:text-white">See More...</h2>
                            <p className="leading-relaxed">Visit my GitHub profile to see more free and open-source projects!</p>
                            <a className="mt-3 text-blue-500 dark:text-blue-300 inline-flex items-center" href="https://github.com/themagiulio" target="_blank">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
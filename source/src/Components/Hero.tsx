import React from 'react'
import { Section } from '../lib/enums'
import { goTo } from '../lib/functions'
import Emoji from 'react-apple-emojis'
import Arrow from './Arrow'
import Social from './Social'
import me from '../Images/me.png'


export default function Hero(props: {
    isDark: boolean;
    setDarkMode: Function;
}){
    return (
        <section className="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font fill-window">
            <div id="home" className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-3/12 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={me}/>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-700 dark:text-white font-mono">Hi, I'm <b>Giulio De Matteis</b></h1>
                    <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-700 dark:text-white mb-10 font-mono"> Chemist Would-Be & Developer</h2>
                    <Social/>
                    <div className="flex justify-center m-5 mt-16">
                        <button onClick={() => goTo(Section.ABOUTME)} className="inline-flex text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg font-bold font-mono">About Me</button>
                        <button onClick={() => goTo(Section.PROJECTS)} className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg font-bold font-mono">Projects</button>
                        <button onClick={() => props.setDarkMode(!props.isDark)} className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg font-bold font-mono">Switch to {props.isDark ? 'light' : 'dark'} mode</button>
                    </div>
                </div>
                <Arrow type="down" class="focus:outline-none my-16" section={Section.ABOUTME}/>
            </div>
        </section>
    )
}
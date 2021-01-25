import React, { useState } from 'react'
import { Section } from '../lib/enums'
import { goTo } from '../lib/functions'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Projects from '../Components/Projects'
import Footer from '../Components/Footer'
import ScrollDirection from '@anakinyuen/scroll-direction'

export default function Home(){
    let defaultDarkMode;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        defaultDarkMode = true;
      } else {
        defaultDarkMode = false;
      }

    const [isDark, setDarkMode] = useState(defaultDarkMode);

    return (
        <div className={isDark ? 'dark' : 'light'}>
            <Hero isDark={isDark} setDarkMode={setDarkMode}/>
            <AboutMe/>
            <Projects/>
            <Footer/>
        </div>
    )
}
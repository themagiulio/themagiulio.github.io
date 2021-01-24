import React, { useCallback, useEffect, useState } from 'react'
import { Section } from '../lib/enums'
import { goTo } from '../lib/functions'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Projects from '../Components/Projects'
import Footer from '../Components/Footer'
import ScrollDirection from '@anakinyuen/scroll-direction'

export default function Home(){
/*     const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
        e => {
            console.log(y)
            const window = e.currentTarget;
            if (y > window.scrollY) {
                // Scroll Up
                if(y <= 1176){
                    goTo(Section.HOME);
                }else if(y < 2443){
                    goTo(Section.ABOUTME)
                }
            } else if (y < window.scrollY) {
                // Scroll Down
                if(y > 0 && y < 90){
                    goTo(Section.ABOUTME)
                }else if(y > 1176){
                    goTo(Section.PROJECTS)
                }
            }
            setY(window.scrollY);
        }, [y]
    );
    
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]); */

    return (
        <div>
            <Hero/>
            <AboutMe/>
            <Projects/>
            <Footer/>
        </div>
    )
}
import React from 'react'
import { Section } from '../lib/enums'
import Arrow from './Arrow'
import badge_scienza_e_tecnologia_dei_materiali from '../Images/badge_scienza_e_tecnologia_dei_materiali.png'
export default function AboutMe(){
    return (
        <section id="aboutme" className="text-gray-400 dark:bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center"><Arrow type="up" class="focus:outline-none mb-10" section={Section.HOME}/></div>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-700 dark:text-white font-bold text-center">About Me</h1>
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                    <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-400">
                        My name is <b>Giulio De Matteis</b>, I'm 19 years old and I study <b>Chemistry</b> at the <b>Alma Mater Studiorum - University of Bologna</b>.
                    </p>
                    <p className="leading-relaxed text-lg mt-2 text-gray-700 dark:text-gray-400">
                        I really love that science, but I also like physics, math, history and phylosophy. Moreover I like to write code in my free time. I learnt <b>C#</b>, <b>Phython</b>, <b>JavaScript</b> (and <b>TypeScript</b>), <b>Electron</b> and <b>React</b> Frameworks and a little bit of <b>PHP</b> on my own.
                    </p>
                    <p className="leading-relaxed text-lg mt-2 text-gray-700 dark:text-gray-400">
                        I mixed my two passions, chemistry and coding, by developing <b>aromaticity</b>, which is a fully programmable molecular modelling software and a spreadsheet editor with Excel-like formulas for chemistry.
                    </p>
                    <p className="leading-relaxed text-lg mt-2 text-gray-700 dark:text-gray-400">
                        Another chemistry-related thing about me is my partecipation to the <b>"Scienza e Tecnologia dei Materiali"</b> course provided by <b>Politecnico di Milano</b>. Here it is the badge I've earned:
                    </p>
                    <img src={badge_scienza_e_tecnologia_dei_materiali} className="w-1/6 py-5 mx-auto" />
                    <p className="leading-relaxed text-lg mt-2 text-gray-700 dark:text-gray-400">
                        I love music, my favourite genre is rock, in particular punk (ska punk songs are the best things on this planet) and I also play guitar!
                    </p>
                    <p className="leading-relaxed text-lg mt-2 text-gray-700 dark:text-gray-400">
                        That's it! If you want to contact me, you can do it by sending an email to <a href="mailto:giuliodematteis@icloud.com" className="font-bold underline">giuliodematteis@icloud.com</a> or a message on <a href="https://t.me/themagiulio" target="_blank" className="font-bold underline">Telegram</a>.
                    </p>
                    <Arrow type="down" class="focus:outline-none mt-20 mb-10" section={Section.PROJECTS}/>
                </div>
            </div>
        </section>
    )
}
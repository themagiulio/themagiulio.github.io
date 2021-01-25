import React from 'react'
import { Link } from 'react-router-dom'
import Social from './Social'

export default function Footer(){
    return (
        <footer className="text-gray-600 body-font dark:bg-gray-900 dark:text-gray-400">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-sm text-gray-500 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4 font-mono">© 2021 <b>Giulio De Matteis</b>
                </p>
                <Social/>
            </div>
        </footer>
    )
}
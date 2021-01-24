import React from 'react'
import { Section } from '../lib/enums'
import { goTo } from '../lib/functions'
import { ArrowDown, ArrowUp } from 'heroicons-react'

export default function Arrow(props: {
    section: Section;
    type: string;
    class: string;
}){
    let arrow;
    if(props.type === 'down'){
        arrow = <ArrowDown className="animate-bounce"/>
    }else{
        arrow = <ArrowUp className="animate-bounce"/>
    }

    return (
        <button className={props.class} onClick={() => goTo(props.section)}>
            {arrow}
        </button>
    )
}
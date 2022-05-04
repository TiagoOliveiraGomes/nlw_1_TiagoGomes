import {ChatTeardropDots} from 'phosphor-react'

import { Popover } from '@headlessui/react'
import "./style.css"

export function WidgetButton () {
    
    return (
            <Popover.Button className='btn group bg-brand-500'>
                <ChatTeardropDots className='chatIcon' size={200} />
                <span className='btn-Text'>
                    <span className='pl-2'/>
                Feedback
                </span>
            </Popover.Button>
    )
}
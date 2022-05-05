import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'
import './style.css'

export function CloseButton () {
    return (
        <Popover.Button className="closeBtnContainer" title='fechar formulário de feedback' >
            <X weight='bold' className='closeIcon' />
        </Popover.Button>
    )
}
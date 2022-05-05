import { WidgetButton } from "./widgetButton";
import { WidgetForm } from "./widgetForm";
import { Popover } from "@headlessui/react";
import './style.css'

export function Widget () {
    return (
        <Popover className='widgetContainer'>
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
            <WidgetButton />
        </Popover>
    )
}
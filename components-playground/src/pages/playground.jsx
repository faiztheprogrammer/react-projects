import '../App.css'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import Modal from '../components/Modal.jsx'

import { useState } from 'react'

function Playground() {

    // Handle the Modal
    let [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <Card
                title="This is a title passed as prop">
                <p>Only the title is passed as prop</p>
            </Card>

            <Card
                title="This is the title passed as a prop"
                subtitle="A subtitle"
                actions={<Button />}
                compact={false}
            >
                <p>This is the card's body passed using React's default children prop - full card</p>
            </Card>

            <Card
                title="This is a title passed as prop"
                subtitle="A subtitle"
                actions={<Button />}
                compact={true}
            >
                <p>This is the cards body passed using React's default children prop - full card and compact = true</p>
            </Card>





            {/* Use the Modal */}
            <div className='flex justify-center mt-3 mb-10'>
            <button
                className='pt-3 pb-3 pl-4 pr-4 rounded-md bg-blue-700 text-white cursor-pointer'
                onClick={() => setIsOpen(true)}>Open Modal</button>

            </div>
            <Modal isOpen = {isOpen} onClose = {() => setIsOpen(false)} />
        </>

    )
}

export default Playground;
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
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal isOpen = {isOpen} onClose = {() => setIsOpen(false)} />
        </>

    )
}

export default Playground;
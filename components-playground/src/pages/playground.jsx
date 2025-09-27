import '../App.css'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'

function Playground() {

    return (
        <>
            <Card
                title="This is a title passed as prop">
                <p>Only the title is passed as prop</p>
            </Card>


            <Card
                title="This is a title passed as prop"
                subtitle="A subtitle"
                actions={<Button />}
                compact={false}
            >
                <p>This is the cards body passed using React's default children prop - full card</p>
            </Card>




            <Card
                title="This is a title passed as prop"
                subtitle="A subtitle"
                actions={<Button />}
                compact={true}
            >
                <p>This is the cards body passed using React's default children prop - full card and compact = true</p>
            </Card>
        </>

    )
}

export default Playground;
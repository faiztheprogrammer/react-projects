import '../App.css'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'

function Playground() {
  
  return (
    <>
      <Card
        title="This is a title passed as prop"
        subtitle="A subtitle"
        actions={<Button />}
        compact={false}
      >
        <p>This is the cards body passed using React's default children prop</p>
      </Card>
    </>

  )
}

export default Playground;
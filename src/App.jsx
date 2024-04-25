import Card from "./Card"
import Profilepics from "./assets/profilepics.jpg"
import profilepics2 from "./assets/profilepics2.jpg"
import profilepics3 from "./assets/profilepics3.jpg"

function App() {
  return(
    <>
    <Card name= "Alexander Inope" about= "I am a virtual assistant and I design websites" img={Profilepics} />
    <Card name= "Anthony Sabombom" about= "I am a dev engineer" img={profilepics2}/>
    <Card name= "Lexiduuuu Yomishimmaa" about= "I am a porn star" img={profilepics3}/>
    
    </>
  )
}

export default App

import React from 'react'
import "./App.css"
import Header from "./Components/Header/Header"
import "./Components/Header/Header.css"
import Topcontainer from './Components/Topcontainer/Topcontainer'
import Skillcontainer from './Components/Skillcontainer/skillcontainer';
import Projectcontainer from './Components/Projectcontainer/Projectcontainer'
import Experiencecontainer from './Components/Experiencecontainer/Experiencecontainer'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectcontainer />
      <Experiencecontainer />
      <Contact />
    </div>
  )
}

export default App




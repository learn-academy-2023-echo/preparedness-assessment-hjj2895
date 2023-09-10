import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import ModalComponent from "./components/ModalComponent";
import "./App.css";
import background from './assets/background-image.jpeg';

const App = () => {

  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const reset = () => {
    setUserInput("")
  }

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(!openModal);
  
  return (
    <div className="entire-content" style={{backgroundImage: `url(${background})`}}>
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" value={userInput} onChange={handleChange}/>
        </div>
        <Button onClick={handleOpenModal}>Click Me</Button>
        <Button onClick={reset}>Reset</Button>
        {openModal && <ModalComponent toggleModal={handleOpenModal} inputValue={userInput}/>}
      </div>
    </div>
  )
}

export default App

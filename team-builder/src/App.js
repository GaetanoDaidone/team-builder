import React, {useState} from 'react';
import ReactDom from "react-dom";
import Members from "./components/Members";
import MembersForm  from "./components/MembersForm";
import data from "./data";
import './App.css';

function App() {
  const [members, setMembers] = useState(data);

  const addNewMember = member => {
    setMembers ([...members,member]) 

  }
  
  return (
    <div className="App">
      <h1>Team Members:</h1>
      <Members membersList={members} />
      <MembersForm addNewMember = {addNewMember} />
    </div>
  )

}

export default App;

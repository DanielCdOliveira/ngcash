import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState()
  useEffect( () => {
    const API_URL : any = process.env.REACT_APP_BASE_URL;
    console.log(API_URL);
    async function apiconnect() {
        const response = await axios.post(`${API_URL}/signin`,{
          "username":"teste",
          "password": "teste123T"
        } ,{headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY4NjE4ODExLCJleHAiOjE2Njg3MDUyMTF9.KyMn6ryJvCQHBrobtATkb3T4Go1SykzgRU93aG50ojk` }});
        const students : any = response.data.token;
        setText(students)
        console.log(students);
        if(!students){
          alert("Putz! Não há estudantes cadastrados para o sorteio!");
        } 
    }
    apiconnect()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>{text}DAASDASDASD</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

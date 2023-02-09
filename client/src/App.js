import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Output from './components/Output';
import styled from 'styled-components';
function App() {
  const [output,setOutput]=useState({})
  // console.log(output)
  return (
    <Container >
      <Form output={output} setOutput={setOutput}/>
      <Output output={output} />
    </Container>
  );
}
const Container= styled.div`
 width:50vw;
 height:80vh;
 margin:auto;
 margin-top:5rem;

`

export default App;

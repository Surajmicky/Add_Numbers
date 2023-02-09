import React from 'react'
import JSONView from 'react-json-view';
import styled from 'styled-components'
const Output = ({output}) => {
 console.log(output);
 let keys=Object.keys(output);
 
  return (
    <Container>
        <JSONView name={false} displayObjectSize= {false} displayDataTypes={false} theme="monokai" src={output}/>
    </Container>
  )
}
const Container = styled.div`
background-color:#272822;
height:30vh;
color:red;
align-self:center;
`

export default Output
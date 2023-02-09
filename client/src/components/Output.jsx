import React from 'react'
import { JsonViewer } from '@textea/json-viewer'
import styled from 'styled-components'
const Output = ({output}) => {
  return (
    <Container>
        <JsonViewer name={false} theme="dark" value={output}/>
    </Container>
  )
}
const Container = styled.div`
background-color:#181818;
height:30vh;
color:red;
align-self:center;
`

export default Output
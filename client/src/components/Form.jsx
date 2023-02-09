import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'
const Form = ({output,setOutput}) => {
    const initialState ={first_number:"",second_number:""}
    const [formData,setFormData]=useState(initialState);
    const handleSubmit =async ()=>{
     Object.values(formData).forEach(num=>{
       
    });
    let {data}= await axios.post('http://localhost:5000/home',{...formData});
    setOutput(data);
    // console.log('data',data)
    }
    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value});
     
    }
   
  return (
    <Container >
        <div>
            <label htmlFor="first_number">First Number</label>
            <input onChange={handleChange} name='first_number' type="number" placeholder='Enter First Number' />
        </div>
        <div>
            <label htmlFor="second_number">Second Number</label>
            <input onChange={handleChange} name='second_number' type="number" placeholder='Enter Second Number'/>
        </div>
        <div>
            <button onClick={handleSubmit} >Generate steps</button>
        </div>
    </Container>
  )
}
const Container= styled.div`
background-color:white;
padding:2rem;
display:flex;
flex-direction:column;
/* align-items:center; */
justify-content:center;
gap:1rem;
div{
    display:flex;
    justify-content:space-around;
    width:80%;
   label{
    color:#144272;
    flex:1
   }
   input{
    border:none;

    &:focus{
        outline:none;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
       -webkit-appearance: none;
        margin: 0;
       }
   }
   button{
    border:none;
    background-color: #144272;
    color:white;
    padding: 0.5rem;
    border-radius: 0.5rem;
   }
}
`;
export default Form
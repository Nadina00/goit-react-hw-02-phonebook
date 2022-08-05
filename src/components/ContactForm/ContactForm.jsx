import React from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import styled from "styled-components"


export class ContactForm extends React.Component {
    state = {
        name: '',
        number: '', 
        id: ''
       
    }
   

    handleChange = evt => {
        console.log(evt.target.value)
        this.setState({
        [evt.target.name]: evt.target.value, 
        id: nanoid()
      })
    }
    handleSubmitForm = evt => {
        evt.preventDefault()
        this.props.onSubmit(this.state)
        this.reset();
      }   
      
    reset = () => {
        this.setState({
        name: '',
        number: '',
        id: ''
        })
    }  
    render (){
    const Input = styled.input`
  font-size: 25px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border-radius: 3px;
  :hover {
    color: palevioletred;
  }
`;
const Btn = styled.button`
color: palevioletred;
font-size: 30px;
margin: 10px;
padding: 5px 20px;
border: 2px solid palevioletred;
border-radius: 3px;

:hover {
  color: red;
  font-size: 35px;

}
`;
        return (
            <form onSubmit ={this.handleSubmitForm} >
            <label htmlFor={this.idName}>Name
         <Input
      type="text"
      value={this.state.name}
      onChange={this.handleChange}
      name="name"
      id = {this.state.id}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    </label>
    <label htmlFor=''>Number
    <Input
      type="tel"
      value={this.state.number}
      onChange={this.handleChange}
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    </label>
    <Btn type='submit'>Add contact</Btn>
    </form>
        )
    }
    

}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired, 
    id: PropTypes.string.isRequired,
  };
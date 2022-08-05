import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"


export const Filter = ({value, onChange})=>{
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
return(
<label htmlFor=''>Find contacts by name
  <Input
  type="text"
  value={value}
  onChange={onChange}
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
</label>
)}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  
};
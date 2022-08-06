import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const List = styled.li`
list-style: none;
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

export const ContactList = ({contacts, onClick}) =>{
   
    return(
        <ul>
            {contacts.map(contact =>{
                return (
<List key={contact.id}>{contact.name}: {contact.number}
<Btn type='button' onClick={onClick} id={contact.id}>Delete</Btn>
</List>
            )})}
        </ul>
    )
}
ContactList.protoType = {
    onClick: PropTypes.func.isRequired,
}

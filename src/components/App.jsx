import React from 'react';
import {ContactList} from 'components/ContactList/ContactList'
import {ContactForm} from 'components/ContactForm/ContactForm'
import { Filter } from 'components/Filter/Filter';
import PropTypes from 'prop-types';



export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

addContactList = data => {
  const searchName = data.name.toLowerCase()
   this.state.contacts.find(contact =>
       contact.name.toLowerCase() === searchName) 
      ? (alert ("contact is already in contacts")):
  (this.setState(prevState =>({
    contacts: [...prevState.contacts, data]

  })))
}

handleDelete = evt => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== evt.target.id),
  }));
};

handleFindChange = evt => {
  this.setState({
  filter: evt.target.value 
})
}



  render() {
    const filterContact = this.state.contacts.filter(contacts => 
      contacts.name.toLowerCase().includes(this.state.filter.toLowerCase())) 
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}

         >
  
  <h1>Phonebook</h1>
<ContactForm onSubmit={this.addContactList}/> 
<h2>Contacts</h2>  
<ContactList contacts ={filterContact} onClick = {this.handleDelete} />
<Filter value={this.state.filter} onChange={this.handleFindChange}/>

    </div>
  );
};
}
App.protoType = {
  state:PropTypes.oneOfType([
    PropTypes.string,
   PropTypes.number]),
    filter:PropTypes.string.isRequired

}

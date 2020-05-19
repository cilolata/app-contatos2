import React from 'react';

import './App.scss';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import { URL } from './services';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      contacts: [],
      view: [],
    }
  };
  
   componentDidMount() {
     fetch(URL)
     .then(res => res.json())
     .then(contacts => {
      this.setState({ 
        contacts,
        view: contacts,
      })
    })
  }
  
  handleChange = event =>{
    const { view } = this.state  
    const findContact = view.filter(contact => contact.name.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({ 
      contacts: findContact
    })    
  }

  handleClick = (event, param) => {
    const { contacts } = this.state
    const contact = contacts.filter(c =>{
      return c
    })
    const contactOrdered = contact.sort((a, b) => a[param] > b[param] ? 1 : b[param] > a[param] ? -1 : 0);

    console.log(contactOrdered)
    
    this.setState({
      contacts: contactOrdered,
    })

  }

  render() {
    const { contacts, filter } = this.state  
    console.log(filter)
    return (
        <div data-testid="app" className="app">
      <Topbar />
      <Filters
      handleChange ={this.handleChange}
      handleClick = {this.handleClick}
      />

     <Contacts
      contacts={contacts} 
     />        
      </div>  
    )
  }
}

export default App;

import React from 'react';

import './App.scss';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';

import { URL } from './services';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      contacts: [],
    };
  }
  
   componentDidMount() {
     fetch(URL)
     .then(res => res.json())
     .then(contacts => {
      this.setState({ contacts })
    })
  }
  
  handleChange = event =>{
    const { contacts } = this.state  
    const findContact = contacts.filter(contact => contact.name.toLowerCase().includes(event.target.value))
    this.setState({ 
      contacts: findContact
    }) 
  };

  handleClick = (event) => {
    const { contacts } = this.state  
    const contactOrdered = contacts.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);

    this.setState({
      contacts: contactOrdered,
    })
  }
 
  render() {
    const { contacts } = this.state  
    return (
        <div data-testid="app" className="app">
      <Topbar />
      <Filters
      handleChange ={this.handleChange}
      handleClick ={this.handleClick}
      />

     <Contacts
      contacts={contacts} 
     />        
      </div>
      
    
    )
  }
}

export default App;

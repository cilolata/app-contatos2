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
        view: contacts
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

  handleClick = (event) => {
    const { contacts } = this.state  
    const contactOrdered = contacts.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
    this.setState({
      contacts: contactOrdered,
    })
  }

  handleClickCountry = (event) => {
    const { contacts } = this.state  
    const contactOrderedCountry = contacts.sort((a, b) => a.country > b.country ? 1 : b.country > a.country ? -1 : 0);
    this.setState({
      contacts: contactOrderedCountry,
    })
  }

  handleClickCompany = (event) => {
    const { contacts } = this.state  
    const contactOrderedCompany = contacts.sort((a, b) => a.company > b.company ? 1 : b.company > a.company ? -1 : 0);
    this.setState({
      contacts: contactOrderedCompany,
    })
  }

  handleClickDepartment = (event) => {
    const { contacts } = this.state  
    const contactOrderedDepartment = contacts.sort((a, b) => a.department > b.department ? 1 : b.department > a.department ? -1 : 0);
    this.setState({
      contacts: contactOrderedDepartment,
    })
  }

  handleClickDate = (event) => {
    const { contacts } = this.state  
    const contactOrderedDate = contacts.sort((a, b) => a.admissionDate > b.admissionDate ? 1 : b.admissionDate > a.admissionDate ? -1 : 0);;
    this.setState({
      contacts: contactOrderedDate,
    })
  }
 
  render() {
    const { contacts } = this.state  
    return (
        <div data-testid="app" className="app">
      <Topbar />
      <Filters
      handleClickInput={this.handleChange}
      handleChange ={this.handleChange}
      handleClick ={this.handleClick}
      handleClickCountry ={this.handleClickCountry}
      handleClickCompany ={this.handleClickCompany}
      handleClickDepartment ={this.handleClickDepartment}
      handleClickDate ={this.handleClickDate}
      />

     <Contacts
      contacts={contacts} 
     />        
      </div>  
    )
  }
}

export default App;

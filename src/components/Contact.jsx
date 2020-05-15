import React from 'react';
import './Contact.scss';


class Contact extends React.Component {
  render(){
  const { data } = this.props
  const admissionDate = new Date(data.admissionDate).toLocaleDateString('pt-BR');

  return(
    <article className="contact" data-testid="contact">
      <span  className="contact__avatar" >
        <img src={data.avatar} alt={data.name}/>
      </span> 
      <span className="contact__data" data-testid="contact-name">{data.name}</span>
      <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
      <span className="contact__data" data-testid="contact-country">{data.country}</span>  
      <span className="contact__data" data-testid="contact-date"> {admissionDate}</span>
      <span className="contact__data" data-testid="contact-company">{data.company}</span>
      <span className="contact__data" data-testid="contact-department">{data.department}</span>
    </article>
   )   
 }
}



export default Contact;

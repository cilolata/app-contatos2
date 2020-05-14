import React from 'react';
import './Contact.scss';


class Contact extends React.Component {
  render(){
  const { data } = this.props
  const dataFormt = new Date(data.admissionDate);
  const format = new Intl.DateTimeFormat('pt-BR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(dataFormt);

  return(
    <article className="contact" data-testid="contact">
      <span  className="contact__avatar" >
        <img src={data.avatar} alt={data.name}/>
      </span> 
      <span className="contact__data" data-testid="contact-name">{data.name}</span>
      <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
      <span className="contact__data" data-testid="contact-country">{data.country}</span>  
      <span className="contact__data" data-testid="contact-date"> {format}</span>
      <span className="contact__data" data-testid="contact-company">{data.company}</span>
      <span className="contact__data" data-testid="contact-department">{data.department}</span>
    </article>
   )   
 }
}



export default Contact;

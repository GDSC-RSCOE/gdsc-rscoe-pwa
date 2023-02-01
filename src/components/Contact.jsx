import React from 'react'
import "../stylesheets/contact.css"

const Contact = () => {
  document.title = "Contact us"
  return (
    <div className='big-container'>
     <div className="cont">
    <img src="./images/message.png" className="message-img" alt="message" />
    <h1 className="heading">Contact Us</h1>
    <form>
      <label htmlFor="name" />
      <input type="text" id="name" name="name" placeholder="First and Last Name" required />
      <label htmlFor="email" />
      <input type="email" id="email" name="email" placeholder="Your email address" required />
      <label htmlFor="message" />
      <textarea id="message" name="message" rows={4} placeholder="Message" required defaultValue={""} />
      <button type="submit" className="btn">Send</button>
    </form>
  </div>
  </div>
  )
}

export default Contact

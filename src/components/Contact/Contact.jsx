import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container container__contact">
      <h5 className="text-light">Get in touch</h5>
      <h2>Contact Me</h2>

      <form action="">        
        <input type="text" placeholder="Your full name" />        
        <input type="text" placeholder="Your e-mail" />        
        <textarea
        placeholder="Your message"
              type="text"
              className="input_area"              
              cols="80"
              rows="5"
             
              
            />
        <input type="submit"value="Send Message" className='btn btn-primary'/>
      </form>
      </div>
      </section>
  )
}

export default Contact
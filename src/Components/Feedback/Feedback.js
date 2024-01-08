import React from 'react'
import "./Feedback.css"

function Feedback() {
  return (
    <div className="feedback">

      <div className='container'>
        <h1>Feedback</h1>
        <p>Ask your any query or leave your feedback.</p>
        <p>Your Feedback help to improve us.</p>
        {/* <textarea type="textarea" rows="10" cols="100" /> */}
        <form action="/feedback" >
          <label className='label' for="message">Enter your message:</label><br />
          <textarea className='textarea' name="message" id="message" ></textarea><br />
          <input className='submit' type="submit" value="Submit" />
        </form>
<br/><p>or</p>
        <h6>To contact us <a target="_blank" href="mailto:ritiktp@gmail.com">  Mail us</a></h6> 
      </div>
    </div>
  )
}

export default Feedback

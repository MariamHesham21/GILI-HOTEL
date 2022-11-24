import React from 'react'
import"./Pages.css"

import img1 from "./img/lol.jpg"

const Contact = () => {
  return (
    <div className='Contact'>
        <div className='Contact-all'>
        <div className='Contact-img'>
            <img src={img1} height={630} width={1470}/>
        </div>
        <div className='Contact-us'>
        <div className='Contact-head'>
            <h2>CONTACT US</h2>
            <p>If you wish to contact us you may kindly fill in the following form with your message.
                <br/>We will be happy to assist you with your inquires.
            </p>
        </div>
        <div className='Contact-text'>
            <div className='Contact-form'>
            <input type="text" name="contName" value="" size="40" 
            className='Contact-Name' aria-required="true" aria-invalid="false" placeholder="NAME"/>
            <input type="email" name="contMail" value="" size="40" 
            className='Contact-email' aria-required="true" aria-invalid="false" placeholder="EMAIL"/>
            <input type="phone" name="contTele" value="" size="40"
            className='Contact-tele' aria-invalid="false" placeholder="PHONE"/>
            </div>

            <div className='Contact-info'>
                <div className='email-info'>
                    <div className='email-name'> EMAIL </div>
                    <div className='email-text'> info@GiliLankanfushi.Com</div>
                </div>
                <div className='email-info'>
                    <div className='FAX-name'> FAX </div>
                    <div className='FAX-text'> info@GiliLankanfushi.Com</div>
                </div>
            </div>

        </div>
        </div>
        </div>
    </div>
  )
}

export default Contact

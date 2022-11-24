import React from 'react'
import"./Pages.css"
import img1 from "./img/ss.png"
import Staydata from './staydata'


const Stay = () => {
  return (
    <div className='STAY'>
        <div className='Stay-form'>
            <div className='stay-backg'>
                <img src={img1} height={500}/>
            </div>
            <div className='Stay-f'>
                <div className='Stay-why'>
                    <p>WHY BOOK DIRECT WITH US?</p>
                    <h3>Get these exclusive benefits</h3>
                    <div className='stay-ri'>
                        <div className='SR'>
                        <img src="https://www.anaxmykonos.gr/wp-content/themes/anax/images/tick.png" alt="Resort Mykonos"/>
                        <p>Best Rate Guarantee</p>
                        </div>
                        <div className='SR'>
                        <img src="https://www.anaxmykonos.gr/wp-content/themes/anax/images/tick.png" alt="Resort Mykonos"/>
                        <p>Special Discounts</p>
                        </div>
                        <div className='SR'>
                        <img src="https://www.anaxmykonos.gr/wp-content/themes/anax/images/tick.png" alt="Resort Mykonos"/>
                        <p>Welcome drinks upon arrival</p>
                        </div>
                        <div className='SR'>
                        <img src="https://www.anaxmykonos.gr/wp-content/themes/anax/images/tick.png" alt="Resort Mykonos"/>
                        <p>Personal concierge services</p>
                        </div>
                    </div>
                </div>
                <div className='stay-mid'>
                    <div className='STMIHEAD'><h1>ROOMS & SUITES</h1></div>
                    <div className='sim-table'>
                        <div className='STMIRI'>
                            <div class="sbookTitle">MAKE A RESERVATION</div> 
                            
                        </div>
                        <div className='STMILE'> 
                        <Staydata/>
                        </div>
                    </div>
                    
                </div>
            </div>


        </div>
    </div>
  )
}

export default Stay
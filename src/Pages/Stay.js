import React from 'react'
import"./Pages.css"
import img1 from "./img/ss.png"
import Staydata from './staydata'


const Stay = () => {
  return (
    <div className='STAY'>
        <div className='Stay-form'>
            <div className='stay-backg'>
                <img src={img1} height={480}/>
            </div>
            <div className='stay-header'>
                <h2>ROOMS & SUITES</h2>
            </div>
            <div className='stay-menu'>
                <div className='menu-1'>
                    <div className='menu-cont'>
                    <img src="https://www.petinoshotel.gr/uploads/images/367.jpg?v=202209271709" alt="" width="500" height="400" className='user-photo'/>
                    <h3>SUPERIOR DOUBLE</h3>
                    <div className='menu-text'>
                        <p>Size: 30 sp.m</p>
                        <p>Price: 220$</p>
                        <p>Allow: 3 Adult</p>
                    </div>
                    <div className='menu-btn'>
                    <a href="/SUPERIORDO" className="btn-vb" id="CONTACT">View more</a>
                    <a href="/" className="btn-vb" id="CONTACT">Booking Now</a>
                    </div>
                    </div>
                    <div className='menu-cont'>
                    <img src="https://www.petinoshotel.gr/uploads/images/312.jpg?v=202009241034" alt="" width="500"height="400" className='user-photo'/>
                    <h3>STANDARD DOUBLE</h3>
                    <div className='menu-text'>
                        <p>Size: 30 sp.m</p>
                        <p>Price: 180$</p>
                        <p>Allow: 2 Adult</p>
                    </div>
                    <div className='menu-btn'>
                    <a href="/STANDARDDOUBLE" className="btn-vb" id="CONTACT">View more</a>
                    <a href="/" className="btn-vb" id="CONTACT">Booking Now</a>
                    </div>
                    </div>
                </div>
                <div className='menu-1'>
                    <div className='menu-cont'>
                    <img src="https://www.anaxmykonos.gr/wp-content/uploads/2016/05/Anax-Resort-Spa-Exclusive-Suite-with-PP-and-Side-Sea-View-3.jpg" alt="" width="500" height="400" className='user-photo'/>
                    <h3>SUPERIOR SUITE</h3>
                    <div className='menu-text'>
                        <p>Size: 35 sp.m</p>
                        <p>Price: 280$</p>
                        <p>Allow: 2 Adult</p>
                    </div>
                    <div className='menu-btn'>
                    <a href="/" className="btn-vb" id="CONTACT">View more</a>
                    <a href="/" className="btn-vb" id="CONTACT">Booking Now</a>
                    </div>
                    </div>
                    <div className='menu-cont'>
                    <img src="https://www.anaxmykonos.gr/wp-content/uploads/2016/05/Anax-Resort-Spa-Anax-Suite-with-Private-Pool-5.jpg" alt="" width="500"height="400" className='user-photo'/>
                    <h3>SUITE WITH PRIVATE POOL</h3>
                    <div className='menu-text'>
                        <div className='menu-p'>
                        <p>Size: 35 sp.m</p>
                        <p>Price: 350$</p>
                        <p>Allow: 2 Adult</p>
                        </div>
                    </div>
                    <div className='menu-btn'>
                    <a href="/" className="btn-vb" id="CONTACT">View more</a>
                    <a href="/" className="btn-vb" id="CONTACT">Booking Now</a>
                    </div>
                    </div>
                </div>
                <div className='menu-1'>
                    <div className='menu-cont'>
                    <img src="https://www.petinoshotel.gr/uploads/images/365.jpg?v=202009241034" alt="" width="500" height="400" className='user-photo'/>
                    <h3>HONEYMOON SUITE SEA VIEW</h3>
                    <div className='menu-text'>
                        <div className='menu-p'>
                        <p>Size: 38 sp.m</p>
                        <p>Price: 420$</p>
                        <p>Allow: 2 Adult</p>
                        </div>
                    </div>
                    <div className='menu-btn'>
                    <a href="/" className="btn-vb" id="CONTACT">View more</a>
                    <a href="/" className="btn-vb" id="CONTACT">Booking Now</a>
                    </div>
                    </div>
                    <div className='menu-cont'>
                    <img src="https://www.anaxmykonos.gr/wp-content/uploads/2018/04/Anax-Resort-Spa-Luxury-Suite-with-Private-Pool-1.jpg" alt="" width="500"height="400" className='user-photo'/>
                    <h3>LUXURY SUITE WITH PRIVATE POOL</h3>
                    <div className='menu-text'>
                        <div className='menu-p'>
                        <p>Size: 40 sp.m</p>
                        <p>Price: 500$</p>
                        <p>Allow: 2 Adult</p>
                        </div>
                    </div>
                    <div className='menu-btn'>
                    <a href="/" className="btn-vb" id="CONTACT">View more</a>
                    <a href="/" className="btn-vb" id="CONTACT">Booking Now</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stay

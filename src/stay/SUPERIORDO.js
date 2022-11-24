import React from 'react'
import"../Pages/Pages.css"
import { BsCheck2 } from "react-icons/bs";
import { IoMdBed } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import { GrOverview } from "react-icons/gr";





const SUPERIORDO = () => {
  return (
    <div className='SUPERIORDO'>
      <div className='ROOM-FORM'>
        <div className='supdou-img'>
          <img src="https://www.petinoshotel.gr/uploads/photos/D1366/2020/07/familysuite_8899.jpg" alt="" width="1470" height={510}/>
        </div>
        <div className='ROOM-TITLE'>
        SUPERIOR DOUBLE ROOM
        </div>
        <div className='ROOMTEXT'>
          <div className='ROOMTEXT-L'>
            <div className='TEXT-L'>
              <div className='L-logo'><IoMdBed/></div>
              <div className='L-text'>
                <p>BEDS </p>
                <p>1</p>
              </div>
            </div>
            
            <div className='TEXT-L'>
            <div className='L-logo'><BsPeopleFill/></div>
              <div className='L-text'>
                <p>OCCUPANCY</p>
                <p>2-3 </p>
              </div>
            </div>
            <div className='TEXT-L'>
              <div className='L-logo'><MdPhotoSizeSelectSmall/></div>
              <div className='L-text'>
                <p>Size</p>
                <p>30 Sp.M</p>
              </div>
            </div>
          
          <div className='TEXT-L'>
            <div className='L-logo'><GrOverview/></div>
              <div className='L-text'>
                <p>VIEW</p>
                <p>pool view </p>
              </div>
            </div>
          </div>
          
        </div>

        <div className='ROOM-BODY'>
          <div className='room-text'>
            <p><BsCheck2/>King size bed</p>
            <p><BsCheck2/>Complimentary tea & instant coffee making facilities</p>
            <p><BsCheck2/>Nespresso machine</p>
            <p><BsCheck2/>Direct dial telephone</p>
            <p><BsCheck2/>Mini fridge</p>
            <p><BsCheck2/>Private bath (with bathtub or shower)</p>
            <p><BsCheck2/>Iron/ironing board</p>
            <p><BsCheck2/>High-speed Wi-Fi internet access</p>
            <p><BsCheck2/>balcony</p>
            <p><BsCheck2/>Slippers</p>
            <p><BsCheck2/>Soundproof Windows</p>
            <p><BsCheck2/>Cotton bed linen</p>
            <div className="room-book">
              <h3>MAKE A RESERVATION</h3>
              <div className="book-body">
                <div className="book-date">
                  <div className="book-checkin">
                    <label>Check In:</label>
                  <input type="date" placeholder="Check In" name="checkin" size="12" maxlength="10" id="checkinroom"/>
                  </div>
                  <div className="book-checkout">
                  <label>Check out:</label>
                  <input type="date" placeholder='Check out'  name="checkout" size="12" maxlength="10" id="checkoutroom"/>
                  </div>
                </div>
              <div className="book-guests">
                <select id="adults" name="adults">
                 <option value="" disabled="" selected="">Adults</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                </select>
                <select id="adults" name="ROOMS">
                <option value="" disabled="" selected="">ROOMS</option>
                <option value="1">1</option>
                <option value="2">2</option>
                </select>
                <div className='booking-btn'>
                <a href="/" className="btn-vb" id="">BOOK NOW</a>
                </div>
              </div>

              </div>
            </div>
          </div>
          <div className='room-img'>
            <img src="https://www.petinoshotel.gr/uploads/photos/D1366/2020/07/familysuite_9540.jpg" alt="" width="960"height="380"/>
            <div className='roomimg'>
            <div  className='roomimg-R'>
            <img src="https://www.petinoshotel.gr/uploads/photos/D1366/2020/07/familysuite_2196.jpg" alt="" width="460"height="250"/>
            <img src="https://www.petinoshotel.gr/uploads/photos/D1366/2020/07/familysuite_5666.jpg" alt="" width="460"height="250"/>
            </div>
            <div className='roomimg-L'>
            <img src="https://www.petinoshotel.gr/uploads/photos/D1366/2020/07/familysuite_2397.jpg" alt="" width="500"height="505"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default SUPERIORDO
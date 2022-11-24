import React from 'react'
import "./Slider.css";
import canal from "../Photo/canal.jpg"



const ResSlider = () => {
  return (
    <div className='Res'>
        <div className='ResSlider'>
        <div className='ResSlider-tex'>
            <h1>EAT & DRINK</h1>
            <h3>Authentic Greek Tastes</h3>
            <p>Ideally situated by the sea right on the gorgeous beach of Platis Gialos, the hotel’s restaurant, 
            Blue Myth, is the ideal place to taste local specialties in a traditional Mediterranean ambiance.</p>
            <button type="submit" className="nav-btn">VIEW MORE</button>

        </div>
        <div className='ResSlider-img'>
        <img src="https://www.petinoshotel.gr/uploads/images/D1920/317.jpg" width="1470"/>
        </div>
        </div>
        <div className='ResActivity'>
            <div className='activimg'>
            <img src='https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/19/58/c6.jpg' width="850" height="650"/>
            </div>
            <div className='activtext'>
            <h1>ACTIVITIES</h1>
            <h3>Active takes you to another world</h3>
            <p>Mykonos is world-renown as a destination <br/>for holidaymakers of all styles and ages <br/>with throbbing cosmopolitan life.</p>
            <div className='swipbtn'>
            <button type="submit" className="nav-btn">VIEW MORE</button>
            </div>

            </div>
        </div>
        <div className='home-6'>
            <div className='width-photo'>
                <div className='ero-photo'>
                <img src={canal} width="1469" height="450" />
                </div>
                <div className='Contact-us'>
                    <h1> CONTACT US</h1>
                    <h2>GLIL LANKANFUSHI</h2>
                    <p>+20-01234567</p>
                    <a href=''>info@GiliLankanfushi.Com</a>
                    <p>
                       GLIL Resort & Spa, Agios Ioannis Diakoftis 
                       <br/>Mykonos, Greece  
                    </p>
                    <h3>Fill out the below form to connect with us!</h3>
                    <a href="/Contact" className="btn" id="CONTACT">CONTACT</a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ResSlider

import React from 'react'
import"./Pages.css"


const data =[
    {id:1,
    roomName:"SUPERIOR DOUBLE",
    space:"Up to 2 guests are allowed",
    des:"The Superior Double Room offers elegant furnishings in a spacious white ambiance bathed in natural light.",
    image:"https://www.petinoshotel.gr/uploads/photos/D1366/2020/07/standarddouble_4255.jpg"
},
{id:2,
    roomName:"LUXURY SUITE WITH PRIVATE POOL",
    space:"Up to 2 guests are allowed",
    des:"The LUXURY SUITE Room offers elegant furnishings in a spacious white ambiance bathed in natural light.",
    image:"https://www.anaxmykonos.gr/wp-content/uploads/2018/04/Anax-Resort-Spa-Luxury-Suite-with-Private-Pool-1.jpg"
},
{id:3,
    roomName:"SUPERIOR SUITE",
    space:"Up to 2 guests are allowed",
    des:"The Superior SUITE Room offers elegant furnishings in a spacious white ambiance bathed in natural light.",
    image:"https://www.anaxmykonos.gr/wp-content/uploads/2016/05/Anax-Resort-Spa-Exclusive-Suite-with-PP-and-Side-Sea-View-3.jpg"
},
{id:4,
    roomName:" STANDARD DOUBLE",
    space:"Up to 2 guests are allowed",
    des:"The STANDARD DOUBLE Room offers elegant furnishings in a spacious white ambiance bathed in natural light.",
    image:"https://www.petinoshotel.gr/uploads/images/312.jpg?v=202009241034"
},
{id:5,
    roomName:"HONEYMOON SUITE SEA VIEW",
    space:"Up to 2 guests are allowed",
    des:"The HONEYMOON SUITE  Room offers elegant furnishings in a spacious white ambiance bathed in natural light.",
    image:"https://www.petinoshotel.gr/uploads/images/365.jpg?v=202009241034"
},
{id:6,
    roomName:"SUITE WITH PRIVATE POOL",
    space:"Up to 2 guests are allowed",
    des:"The SUITE WITH PRIVATE POOL offers elegant furnishings in a spacious white ambiance bathed in natural light." ,
    image:"https://www.anaxmykonos.gr/wp-content/uploads/2016/05/Anax-Resort-Spa-Anax-Suite-with-Private-Pool-5.jpg"
},
]

const Staydata = () => {
  return (
    <section className='Staydata'>
        {data.map( user =>(
          <div key={user.id} className="st-all">
              <div className="st-con">
                  <div className='user-img'>
                  <img src={user.image} alt="" width="446.9" className='user-photo'/>
                  </div>
                  <h3>{user.roomName}</h3>
                  <h5>{user.space}</h5>
                  <p>{user.des}</p>
                  <div className='stbtn'>
                  <button type="submit" className="nav-btn">VIEW MORE</button>
                  </div>
              </div>
            </div>
      ))}
    </section>
  )
}

export default Staydata

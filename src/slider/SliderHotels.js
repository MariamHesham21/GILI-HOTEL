import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data =[
    {id:1,
    roomName:"SUPERIOR DOUBLE",
    space:"Up to 3 guests are allowed",
    des:"The Superior Double Room offers elegant furnishings in a spacious white ambiance bathed in natural light.",
    image:"https://www.petinoshotel.gr/uploads/images/367.jpg?v=202209271709"
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


const SliderHotels = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}

    spaceBetween={15}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    className="slides-A"
  >
      {data.map( user =>(
          <SwiperSlide key={user.id} className="slide-all">
              <div className="slide-con">
                  <div className='user-img'>
                  <img src={user.image} alt="" width="446.9" className='user-photo'/>
                  </div>
                  <h3>{user.roomName}</h3>
                  <h5>{user.space}</h5>
                  <p>{user.des}</p>
                  <div className='swipbtn'>
                  <button type="submit" className="nav-btn">VIEW MORE</button>
                  </div>

              </div>
          </SwiperSlide>
      ))}
  </Swiper>
  )
}

export default SliderHotels

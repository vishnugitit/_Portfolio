import React from 'react'
import "./Workitems.css"
const Workitems = ({item}) => {
  return (
   <div className="work__card" key={item.id}>
    <img src={item.image} alt="" className='work__img'/>
    <h3 className="work__title">{item.title}</h3>
    <a href={item.link} className="work__button">
        <button className="Project-live">Live Preview<i className="bx bx-right-arrow-alt work__button-icon"></i></button>
    </a>
    
   </div>
  )
}

export default Workitems

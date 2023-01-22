import React from 'react'
// import './foodItem.css'
// import {motion,AnimatePresence} from "framer-motion"
export default function FoodItem({item},props) {
//   const added = (event)=>{
//     console.log("added to cart")
//     props.showAlert('Added to Cart','success')

// }   
const added = (event)=>{
    console.log("added to cart")
    props.showAlert('Added to Cart','success')
}
  return (
            <div className="card" style={{width: "18rem"}}>
                        <img src={item.image} alt={item.name}  className="card-img-top" style={{height:"190px"}} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p>Rs.{item.price}</p>
                            <button className="btn btn-outline-warning"  onClick={added}>Add to Cart</button>
                        </div>
                    </div>
  )
}

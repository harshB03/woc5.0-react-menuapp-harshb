import React from 'react'

export default function Product(props) {
    const added = (event)=>{
        console.log("added to cart")
        props.showAlert('Added to Cart','success')
      }
    const {id,productName,price,description,productImage}=props.data;
  return (

    <div className="card" style={{width: "18rem"}}>
      <img src={productImage} className="card-img-top" alt="..." />
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">{description}</p>
        <p>Rs.{price}</p>
        <button onClick={added} className="btn btn-outline-warning">Add to Cart</button>
    </div>
  )
}

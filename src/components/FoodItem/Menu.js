import React from 'react'
import { useState } from 'react'
import Alert from './Alert'
import {data} from './data'
// import useShoppingCart from '../../context/ShoppingCartContext'
import FoodItem from './FoodItem'
// import { PRODUCTS } from '../../products'
// import {Product} from './Product'
export default function Menu(props) {
  const[alert,setAlert] = useState(null);
  
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)   
}
const [foods, setFoods] = useState(data);

const filterType = (category) => {
    setFoods(
        data.filter((item) => {
            return item.category === category;
        })
    )
}
const filterPrice = (price) => {
    setFoods(
        data.filter((item) => {
            if(item.price<100)
                return price==='$'
            else if(item.price>100 && item.price<200)
                return price==='$$'
            else if(item.price>200 && item.price<300)
                return price==='$$$'
            else
                return price==='$$$$'
        })
    )
}
const result=(name)=>{
    setFoods(
        data.filter((item)=>{
            return (item.name.toLowerCase())===name
        }
    ))
}
// const{
//     getItemQuantity,
//     increaseCartQuantity,
//     decreaseCartQuantity,
//     removeCartQuantity,
// } = useShoppingCart() 
// const quantity = getItemQuantity(props.id);
  return (
    <>
        <Alert alert={alert}/>
        <div className="container">

        <h2 className="container text-center my-2">Food Items Available</h2> 
        {/* <input type="search" placeholder="Search" id="search-input" style={{backgroundColor:"transparent" , borderBottom:"2px solid black",padding:"1em 0.3em",width:"40%"}} />
        <button id="search" style={{padding:"1em 2em", marginLeft:"1em", backgroundColor:"blue",color:"white",borderRadius:"5px",marginTop:"0.5em"} } onClick={()=>result()}>Search</button> */}
        {/* <input type="text"
                    placeholder=" Search Courses"
                    name="search" />
                <button>
                    <i class="fa fa-search"
                        style={{fontSize: "18px"}}>
                    </i>
                </button> */}
        </div>

                <div className="container my-3">

                    
                    <div className='d-flex justify-content-center'>

                   
                        <button onClick={() => setFoods(data)} className='hover:text-white border rounded-xl px-5 py-1'>All</button>
                        <button onClick={() => filterType('burger')} className=' hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className=' hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Pizza</button>
                        <button onClick={() => filterType('salad')} className=' hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Salads</button>
                        <button onClick={() => filterType('Non-Veg')} className=' hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Non-Veg</button>
                        <button onClick={() => filterPrice('$')} className=' hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Below 100</button>
                        <button onClick={() => filterPrice('$$')} className=' hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Below 200</button>
                        <button onClick={() => filterPrice('$$$')} className=' hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Below 300</button>
                        <button onClick={() => filterPrice('$$$$')} className=' hover:text-white border rounded-xl px-5 py-1'>Below 400</button>
                    </div>
                </div>
                <div className="container my-3">
                <div className= "row  my-3">
                    {foods.map((item,index)=>{


                        return <div className="col-md-4 my-3"><FoodItem showAlert={showAlert} item={item} key={item.id} />
                        </div>
                    })}
                    </div>
                </div>
          
          
    </>
  );
}

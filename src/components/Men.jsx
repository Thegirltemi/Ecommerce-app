import React from "react";
import { homeData } from "../Data";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router';
import { addToCart } from "./features/cartSlice";
const Men = () => {
  const [state, setState] = useState(homeData);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleAddToCart = (item)=>{
   dispatch(addToCart(item))
   navigate('/cart')
  }

  return (
    <>
      {
        < div className="men">
          {state.map((item, key) => {
            return (
              <div className="men-section">
                <img src={item.imageSrc} alt='product' className="product"/>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
                <button onClick={()=>handleAddToCart(item)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      }
    </>
  );
};

export default Men;
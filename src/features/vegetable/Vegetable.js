import React from 'react'
import { buy, reStock } from './vegetableSlice'
import { useSelector, useDispatch } from 'react-redux'

const Vegetable = () => {
  const totalCount = useSelector((state) => state.vegetable.totalVegetables);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Vegetable Shop</h2>
      <h3>Vegetables in Stock : {totalCount < 1 ? 'Out of Stock!' : totalCount}</h3>
      <button onClick={()=>dispatch(buy(1))} style={{backgroundColor: `${totalCount < 1 ? '#444':'#764ABC'}`, pointerEvents: `${totalCount < 1 ? 'none':'auto'}`}}>click to buy</button>
      <button onClick={()=>dispatch(reStock(5))}>click to Re-Stock</button>
    </>
  )
}

export default Vegetable
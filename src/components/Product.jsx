import React from 'react'
import { products } from '../data'

function Product() {
   console.log(products);
  return (
    <div className='p-6 text-xl font-bold'>Product
        <div className='grid grid-cols-3 gap-3 border-solid p-3'>
        {
            products.map((data)=>(
                <div className='border rounded-xl p-4 shadow'>
                <img className='w-full object-cover rounded-md mb-3' src={data.image}  alt="" /> 
                <h3 className='text-lg font-bold'>{data.name}</h3>               
                <h6 className='text-blue-500 font-semibold'>Price: {data.price}</h6>
                <p className='text-sm'>Category: {data.category}</p>
                <p className='text-sm mb-4'>Rating: {data.rating}</p>
                <button onClick={() => alert(data.name +" is add to the cart")} className='rounded-sm bg-blue-500 w-full text-white'>Add to cart</button>
                </div>
            )
            
            )
        }
                  

        </div>
    </div>
  )
}

export default Product
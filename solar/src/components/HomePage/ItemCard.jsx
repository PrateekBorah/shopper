import React from 'react'

export default function ItemCard({index, item}) {
  return (
    <div className='bg-tertiary-300 flex flex-col justify-center items-center p-3'>
        <div className='bg-tertiary-200 w-[200px] h-[200px]'/>
        <h2 className='text-[24px] font-bold text-primary-300'>{item.name}</h2>
        <h3 className='text-[15px] text-gray-600'>₹{item.price}</h3>
        <p className='text-[16px] '>{item.description}</p>
    </div>
  )
}

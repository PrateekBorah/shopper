import React from 'react'
import {items} from "../../constants"
import ItemCard from './ItemCard'

export default function Home() {
    const finalItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items];
  return (
    <div className='grid grid-cols-4 gap-5 p-10'>
        {finalItems.map((item, index)=>(
            <ItemCard key={index} index={index} item={item}/>
        ))}
    </div>
  )
}

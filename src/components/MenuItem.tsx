import type  {MenuItems} from "../types/index"
import { Dispatch } from 'react'
import { OrderAction} from '../reducers/order-reducer'

type MenuItemProps = {
    item : MenuItems
    dispatch: Dispatch<OrderAction>
}

export default function MenuItem({item, dispatch } : MenuItemProps) {
  return (
    <button 
    className=' border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg  rounded-lg flex justify-between w-full'
    onClick={() => dispatch({type : 'add-items', payload : {item : item}})}
  > 
      <p>{item.name}</p> 
      <p className='font-black'>${item.price}</p>
  </button>
  )
}

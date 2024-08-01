// * Los <> Generic types son útiles cuando se tiene una estructura más compleja y quieres mantener un arreglo o un objeto con ciertos elementos


import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"


export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItem) => {
    const itemExists = order.find(orderItem => orderItem.id === item.id)
    if ( itemExists ) {
      const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
        {...orderItem, quantity: orderItem.quantity + 1} :
        orderItem
      )
      setOrder(updatedOrder)       
    } else {
      const newItem = {...item, quantity: 1}
      setOrder([...order, newItem])
    }
    
  }  

  return{
    order,
    addItem
  }
}
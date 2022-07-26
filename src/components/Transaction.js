import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Transaction({transaction}) {
  const {delTransaction} = useContext(GlobalContext)
  let sign = transaction.amount > 0 ? "+" : "-"
  let myClass =  transaction.amount > 0 ? "plus" : "minus"
  return (
    <li className={myClass}>
    {transaction.description}
    <span>{sign} ${transaction.amount}</span>
    <button onClick={()=> delTransaction(transaction.id)} className="delete-btn">X</button>
</li>
  )
}

export default Transaction
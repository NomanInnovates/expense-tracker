import React from 'react'

function Transaction({transaction}) {
  let sign = transaction.amount > 0 ? "+" : "-"
  let myClass =  transaction.amount > 0 ? "plus" : "minus"
  return (
    <li className={myClass}>
    {transaction.description}
    <span>{sign} ${transaction.amount}</span>
    <button className="delete-btn">X</button>
</li>
  )
}

export default Transaction
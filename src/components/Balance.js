import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
  const {transactions} = useContext(GlobalContext)
  let allTransactions = transactions.map(transaction=>transaction.amount)
  let total = allTransactions.reduce((acc,transaction)=> (acc += transaction) , 0).toFixed(2)

  return (
    <div>
        <h4>Current Balance</h4>
        <h1>${total}</h1>
    </div>
  )
}

export default Balance
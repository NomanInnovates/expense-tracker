import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

// Import the Global State


export const AccountSummary = () => {

    const {transactions} = useContext(GlobalContext)
    let allTransactions = transactions.map(transaction=>transaction.amount)
    let totalMinus = allTransactions.filter(transaction => transaction < 0).reduce((acc,transaction)=> (acc += transaction) , 0).toFixed(2)
    let totalPlus = allTransactions.filter(transaction => transaction > 0).reduce((acc,transaction)=> (acc += transaction) , 0).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    +${totalPlus}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    -${Math.abs(totalMinus)}
                </p>
            </div>

        </div>
    )
}
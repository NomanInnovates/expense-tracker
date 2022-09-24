import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { AddTransaction } from './components/AddTransaction'
import { TransactionHistory } from './components/TransactionHistory'
import { GlobalProvider } from './context/GlobalState'

function App() {
  
  return (
   <div className='dark'>
      <GlobalProvider>
      <Header />
      <div className="container" >
      <Balance />
      <AccountSummary />
      <AddTransaction />
      <TransactionHistory />
      </div>
      </GlobalProvider>
      </div>
  )
}

export default App
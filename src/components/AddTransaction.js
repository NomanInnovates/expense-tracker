import React, { useState } from 'react'

export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text" id="description" placeholder="Detail of Transaction" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                        type="number" id="transactionamount" placeholder="Dollar Value of Transaction" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
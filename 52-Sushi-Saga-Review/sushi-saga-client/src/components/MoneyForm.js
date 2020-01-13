import React from 'react'

// Render html form with callback for changing state of "money"
const MoneyForm = (props) => {
    return (
        <form onSubmit={props.addMoney}>
            <input name='money'placeholder='how much money you got?'/> 
            <button type='submit'>Submit</button>
        </form>
    )
}

export default MoneyForm
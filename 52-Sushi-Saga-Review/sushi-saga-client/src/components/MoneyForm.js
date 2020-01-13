import React from 'react'

const MoneyForm = (props) => {
    return (
        <form onSubmit={props.addMoney}>
            <input name='money'placeholder='how much money you got?'/> 
            <button type='submit'>Submit</button>
        </form>
    )
}

export default MoneyForm
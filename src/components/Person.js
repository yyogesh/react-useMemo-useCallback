import React from 'react'


const Person = ({ firstName, lastName, isMemo }) => {
    console.log(`${isMemo ? 'Memo person ' : 'Person'}`, firstName, lastName)
    return (
        <div>
            <div> First name : {firstName}</div>
            <div> Last name : {lastName}</div>
        </div>
    )
}

export default Person

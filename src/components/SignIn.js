import React from 'react'

const SignIn = ({ userName, onSignIn }) => {
    console.log('SignIn Component')
    return (
        <div>
            <button onClick={onSignIn}>Sign in {userName} </button>
        </div>
    )
}

export default React.memo(SignIn);

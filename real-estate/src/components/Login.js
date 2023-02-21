import React from "react";

function SignIn(){
    return (
        <>
        <h2>Sign In to your Account</h2>
        <form>
           
            <label>Email</label>
            <input type='email' />
            <label>Password</label>
            <input type='password' />
            <button type="submit">Sign In</button>
        </form>
        </>
    )
}

export default SignIn
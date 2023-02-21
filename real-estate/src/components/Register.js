import React from "react";

function Register(){
    return (
        <>
        <h2>Create your Account</h2>
        <form>
            <label>Name</label>
            <input type='text' />
            <label>Email</label>
            <input type='email'  />
            <label>Password</label>
            <input type='password' />
            <label>Age</label>
            <input type='number' defaultValue={18} minLength={18} />
            <label>Password</label>
            <input type='password' />
            <button type="submit">Sign Up</button>
        </form>
        </>
    )
}

export default Register